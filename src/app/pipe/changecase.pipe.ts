import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changecase',
  pure: false,
})
export class Changecase implements PipeTransform {
  transform(value: any) {
    console.log(value);
    return value?.name?.toUpperCase();
  }
}
