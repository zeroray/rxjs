import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


/* Reduce
Aplica una función acumuladora a las emisiones producidas por el observable
*/

const totalReduce = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}

interval(1000).pipe(
    take(3),
    tap( console.log ),
    reduce( totalReduce )
)
.subscribe( {
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
})

