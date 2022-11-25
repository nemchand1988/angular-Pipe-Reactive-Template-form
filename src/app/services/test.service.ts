import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class Testservice{
  information = new Subject();

  constructor(){

  }

  getlist(){
    return ['nemchand','sonali','biswa','suresh','ramesh']
  }

  post(val){
    this.information.next(val)
  }
}