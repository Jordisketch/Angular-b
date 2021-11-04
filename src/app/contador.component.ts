import { Component } from '@angular/core'



@Component({
    selector: 'app-contador',
    template: `
    
        <h1> {{titulo}} </h1>


        <button (click)='sumar()'> +1</button>


        <h3>{{numero}}</h3>


        <button (click)='restar()'> -1</button>

        <button (click)='multiplicarPorDos()'>*2</button>

    
    `
})




export class contadorComponent {


    titulo: string = 'Contador App';

    numero: number = 0;

    sumar() {
        this.numero += 1;
    }

    restar = () => {
        this.numero -= 1;
    }

    multiplicarPorDos = () => {
        this.numero *= 2;
    }


}