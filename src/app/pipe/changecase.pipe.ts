import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changecase',
})
export class Changecase implements PipeTransform {
  transform(value: any) {
    console.log(value);
    return value?.name?.toUpperCase();
  }
}
