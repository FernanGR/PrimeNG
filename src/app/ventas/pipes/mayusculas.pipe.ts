import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {

    transform( valor:string, enMayusculas:boolean = true ): string {
        console.log(valor)
        if(enMayusculas){
            valor = valor.toUpperCase();
        }
        return valor;
    }

}