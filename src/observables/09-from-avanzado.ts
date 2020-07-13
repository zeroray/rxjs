import { of, from, async } from "rxjs";

/**
 * of = Toma argumentos y genera una secuencia
 * from = array, promesa, iterable, observable y genera una secuencia
 */

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for (const id of miIterable) {
//     console.log(id);
// }

// O su equivalente

from( miIterable ).subscribe( observer );

// const source$ = from( [1,2,3,4,5] ); // Emite cada valor
// const source$ = of( [1,2,3,4,5] ); // Emite 1 vez con todos sus valores del argumento
// const source$ = of( ...[1,2,3,4,5] ); // Lo mismo que from
// const source$ = from( 'Daniel' ); // Un caracter a la vez 
// const source$ = of( 'Daniel' ); // Una emisión con el argumento completo

const source$ = from( fetch('https://api.github.com/users/zeroray') );

// source$.subscribe( async( resp ) => {
    
//     console.log( resp.body );
//     const dataResp = await resp.json();
//     console.log(dataResp);
    
// })

// source$.subscribe( observer );
