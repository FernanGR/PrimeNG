import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform {

    transform( vuela:boolean = true ): string {
         if(vuela){
             return "Si vuela";
            }else{
                return "No puede volar";
        }
    }

}