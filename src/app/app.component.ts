import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { from, of, Subject } from 'rxjs';
import { Testservice } from './services/test.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  form: FormGroup;
  isSubmitted: boolean = false;
  updatedValue: any;
  count: number = 1;

  constructor(public fb: FormBuilder, public testservice: Testservice) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl(''),
      roll: new FormControl(''),
      contacts: this.fb.group({
        phone: new FormControl(''),
        mobile: new FormControl(''),
      }),
      subjects: this.fb.array([]),
      marks: this.fb.array([]),
    });

    this.form.valueChanges.subscribe((values) => {
      console.log(values);
      this.updatedValue = values;
    });
  }

  get f() {
    return this.form.controls;
  }
  get subjects() {
    const ctrl = this.f.subjects as FormArray;
    return ctrl.controls;
  }

  get marks() {
    const ctrl = this.f.marks as FormArray;
    return ctrl.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.form.value);
  }

  add() {
    const ctrl = this.f.subjects as FormArray;
    ctrl.push(new FormControl(''));
  }

  addm() {
    const ctrl = this.f.marks as FormArray;
    ctrl.push(
      this.fb.group({
        math: new FormControl(''),
        science: new FormControl(''),
      })
    );
  }

  remove(index) {
    const ctrl = this.f.subjects as FormArray;
    ctrl.removeAt(index);
  }

  tmformSubmitted(ev) {
    console.log(ev);
  }

  countupdate(ev) {
    this.count = ev;
  }

  ngAfterViewInit() {
    let list = this.testservice.getlist();
    of(list).subscribe((value) => {
      console.log(value);
    });

    // const source = of(1, 2, 3, 4, 5);
    // //output: 1,2,3,4,5
    // const subscribe = source.subscribe(val => console.log(val));

    //     //emit result of promise
    // const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
    // //output: 'Hello World'
    // const subscribe = promiseSource.subscribe(val => console.log(val));
  }

  createSubject() {
    this.testservice.post('next')
  }
}
