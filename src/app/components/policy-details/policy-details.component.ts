import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { truncate } from 'fs';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {
  data: any;
  dataSource: any;
  ppt: any;
  premium: any;
  sum: any;
  age: any;
  date: any;
  pt: any;
  flag: boolean = false;
  gender: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  policyForm: FormGroup = this.fb.group({
    ppt: ['', [Validators.required, Validators.max(10), Validators.min(5)]],
    pt: ['', [Validators.required, Validators.max(20), Validators.min(10)]],
    premium: ['', [Validators.required]],
    date: ['', [Validators.required]],
    age: ['', [Validators.required, this.ageRangeValidator]],
    sum: ['', [Validators.required]],
    gender: ['', [Validators.required]]
  });

  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 23 || control.value > 56)) {
      return { 'ageRange': true };
    }
    return null;
  }

  formInvalid(): boolean {
    if(this.policyForm.invalid) {
      return false;
    } 
    this.ppt = this.policyForm.controls['ppt'].value;
    this.pt = this.policyForm.controls['pt'].value;
    if(this.ppt <= this.pt) return false;

    return true;
  }

  get policyFormControl() {
    return this.policyForm.controls;
  }

  onSubmit() {
    this.flag = true;
    this.ppt = this.policyForm.controls['ppt'].value,
    this.pt = this.policyForm.controls['pt'].value,
    this.premium = this.policyForm.controls['premium'].value,
    this.date = this.policyForm.controls['date'].value,
    this.age = this.policyForm.controls['age'].value,
    this.sum = this.policyForm.controls['sum'].value,
    this.gender = this.policyForm.controls['gender'].value,

      this.dataSource = new MatTableDataSource(this.data);
    const columnsToDisplay = ['type', 'name', 'amount', 'status', 'dateModified', 'state'];
  }
}
