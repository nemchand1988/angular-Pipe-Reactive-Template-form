import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[increment-counter]',
})
export class IncrementCounter implements AfterViewInit {

  @Input() value:any;
  @Output() updated = new EventEmitter<number>();

  @HostListener('click') onclick(){
    console.log('pppp',this.value);
    this.updated.emit(this.value++)
  }

  constructor(public el:ElementRef){}

  ngAfterViewInit() {

  }
}
