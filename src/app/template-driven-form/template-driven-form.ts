import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven-form.html',
  styleUrls: ['./template-driven-form.css'],
})
export class TemplateDrivenForm implements OnInit {
  @Input() isSubmitted: any;

  @Output() tmformSubmitted = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.tmformSubmitted.emit(true);
  }
}
