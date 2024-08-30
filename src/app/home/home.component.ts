import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { homeService } from '../../assets/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  HomeForm!: FormGroup;

  ngOnInit() {
    this.initializeForm();
  }
  constructor(
    private fb: FormBuilder,
    route: Router,
    private service: homeService
  ) {}

  initializeForm() {
    this.HomeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]|^([A-Za-z] [A-Za-z]|[A-Za-z]+)$')]],
      // lastName: ['', [Validators.required, Validators.pattern('^([A-Za-z]+([A-Za-z]+)*)$')]],
      age: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.min(1),
        ],
      ],
      gender: ['', Validators.required],
    });
  }
  onSubmit() {
    // Object.keys(this.HomeForm.controls).forEach((controlName) => {
    //   this.HomeForm.get(controlName)?.markAllAsTouched();
    // });

    if (this.HomeForm.valid) {
      const user = this.HomeForm.value;
      this.service.addDetailes(user);
      console.log('user detailes', user);
    }
  }
}
