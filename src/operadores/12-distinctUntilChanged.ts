import { of, from } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";



const numeros$ = of<number|string>(1,1,1,2,2,2,3,3,3,1,2,3,3,5);

numeros$.pipe(
    distinctUntilChanged()
)
.subscribe( console.log );


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Subzero'
    },
    {
        nombre: 'Megaman'
    },
];

from( personajes ).pipe(
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
).subscribe( console.log )


