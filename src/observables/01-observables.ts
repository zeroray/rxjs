import { Observable, Observer } from "rxjs";

const observer: Observer<string> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {

    subs.next('Mi ');
    subs.next('nombre');
    subs.next('es ');
    subs.next('Daniel');

    // Forzar error
    // const mensaje = undefined;
    // mensaje.cuerpo = 'El cuerpo';

    subs.complete();
    // Después del complete la suscripción deja de emitir mensajes
    // No se ejecutan los próximos .next()
    subs.next('Apellido');
    subs.next('Fuentes');


} );

// obs$.subscribe( 
//     value => console.log('Next: ', value),
//     error => console.warn('Error: ', error),
//     () => console.info('Complete')
// );

obs$.subscribe( observer );