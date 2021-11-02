import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demopipe'
})
export class DemopipePipe implements PipeTransform {

  transform(s:string): number {
    if(s=="Outstanding")
    {
      return 1;
    }else if(s=="Excellent")
    {
      return 2;

    }
    else if(s=="Good")
    {
      return 3;
      
    }
    else 
    {
      return 4;
      
    }
  }

}
