import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:"mytrim"
})
export class TrimPipe implements PipeTransform{
    transform(value: string ) {
        if (value.length>7){
            return value.substring(0,7)+'...';
        }
        return value;
        
    }

}