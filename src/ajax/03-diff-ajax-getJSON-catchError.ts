import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const manejaError = ( resp: AjaxError ) => {
    console.warn('Error:', resp.message);
    return of({
        ok: false,
        usuario: []
    })
}

const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

// obs2$.subscribe( data => console.log('ajax:', data ));
obs$.pipe(
    catchError( manejaError )
)
.subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('error en subs', err),
    complete: () => console.log('complete'),
});

