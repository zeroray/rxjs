import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt dignissim. Ut at porta ligula, ut interdum sapien. Cras et mattis ante. Proin a nisl ut lacus suscipit posuere. Ut urna tortor, pharetra non nulla vel, venenatis pellentesque odio. Aliquam mollis dui ipsum, vitae aliquet diam pulvinar at. Vivamus nisi elit, aliquet eget urna at, mollis posuere quam. Donec non blandit massa, at pellentesque sapien. Proin mollis, nisi in malesuada congue, eros mauris tempus enim, id auctor arcu mauris et justo. Morbi lobortis, nunc vitae lobortis dictum, nisl leo tempus dolor, a laoreet leo arcu sit amet erat.
<br/><br/>
Nam ultrices mauris ante. Aliquam at nulla viverra velit finibus condimentum. Maecenas porttitor hendrerit eros, a tempor eros cursus a. Aliquam volutpat erat ut dolor euismod, at ornare felis finibus. Suspendisse pulvinar tincidunt congue. Duis nec placerat leo, id faucibus mauris. Nam semper semper fermentum. Maecenas et ligula iaculis, vestibulum justo eget, eleifend sapien. Fusce venenatis mi sed consectetur iaculis. Maecenas eget turpis cursus, maximus dolor at, semper elit. Proin risus dui, blandit at mollis et, tincidunt at massa. Integer posuere tincidunt felis, a porta arcu consequat quis.
<br/><br/>
Vivamus semper augue non enim semper ornare. Sed et tortor et felis rhoncus scelerisque in et massa. Sed non finibus nisi, id iaculis dolor. Donec id ante eu nisl finibus lobortis. Suspendisse sed diam ut ante imperdiet porta id at justo. Vivamus sit amet convallis lacus. Donec pharetra tellus laoreet quam euismod lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis erat vel ipsum pellentesque cursus quis sed eros. Morbi nisl tellus, bibendum sagittis ante eu, varius mattis justo. Ut non ultricies ipsum. Morbi venenatis efficitur lectus, eu pharetra nulla ultricies a. Nunc congue commodo turpis varius viverra.
<br/><br/>
Fusce dui elit, imperdiet quis lobortis eu, sagittis id est. In justo eros, aliquam quis turpis sit amet, luctus lobortis turpis. Vestibulum volutpat leo a auctor molestie. Donec et ultricies enim, molestie feugiat mi. Proin libero justo, malesuada eu finibus et, accumsan id nibh. Duis rhoncus vitae nunc nec tincidunt. In iaculis id nibh id feugiat. In commodo malesuada tellus, eget imperdiet justo facilisis eget. Praesent id euismod lectus. Nunc quis magna eu risus aliquam dapibus sed a orci. Maecenas fermentum pretium luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec scelerisque molestie libero sed commodo. Nulla mollis sem et aliquet scelerisque. Praesent tincidunt felis sit amet convallis porta. Integer ac consectetur urna, laoreet dapibus odio.
<br/><br/>
Etiam laoreet ut elit interdum iaculis. Vestibulum ultrices augue et sollicitudin iaculis. Maecenas bibendum orci vitae lacus efficitur, sed lacinia libero dapibus. Ut viverra eleifend lorem ut condimentum. Fusce et fermentum metus. Praesent sed sollicitudin sapien. Curabitur ut pulvinar mauris. In feugiat, mauris non bibendum imperdiet, nibh lorem aliquet libero, eget feugiat felis ex id nisi. Aenean cursus, mi nec imperdiet viverra, nisl mauris mattis magna, eu ornare nulla lectus vitae sapien. Nunc nec maximus ante. Pellentesque pretium lacus ultricies hendrerit dictum. Pellentesque at erat gravida, cursus ipsum sit amet, molestie nibh. Pellentesque tempus massa nec enim venenatis, id luctus dolor lacinia.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt dignissim. Ut at porta ligula, ut interdum sapien. Cras et mattis ante. Proin a nisl ut lacus suscipit posuere. Ut urna tortor, pharetra non nulla vel, venenatis pellentesque odio. Aliquam mollis dui ipsum, vitae aliquet diam pulvinar at. Vivamus nisi elit, aliquet eget urna at, mollis posuere quam. Donec non blandit massa, at pellentesque sapien. Proin mollis, nisi in malesuada congue, eros mauris tempus enim, id auctor arcu mauris et justo. Morbi lobortis, nunc vitae lobortis dictum, nisl leo tempus dolor, a laoreet leo arcu sit amet erat.
<br/><br/>
Nam ultrices mauris ante. Aliquam at nulla viverra velit finibus condimentum. Maecenas porttitor hendrerit eros, a tempor eros cursus a. Aliquam volutpat erat ut dolor euismod, at ornare felis finibus. Suspendisse pulvinar tincidunt congue. Duis nec placerat leo, id faucibus mauris. Nam semper semper fermentum. Maecenas et ligula iaculis, vestibulum justo eget, eleifend sapien. Fusce venenatis mi sed consectetur iaculis. Maecenas eget turpis cursus, maximus dolor at, semper elit. Proin risus dui, blandit at mollis et, tincidunt at massa. Integer posuere tincidunt felis, a porta arcu consequat quis.
<br/><br/>
Vivamus semper augue non enim semper ornare. Sed et tortor et felis rhoncus scelerisque in et massa. Sed non finibus nisi, id iaculis dolor. Donec id ante eu nisl finibus lobortis. Suspendisse sed diam ut ante imperdiet porta id at justo. Vivamus sit amet convallis lacus. Donec pharetra tellus laoreet quam euismod lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis erat vel ipsum pellentesque cursus quis sed eros. Morbi nisl tellus, bibendum sagittis ante eu, varius mattis justo. Ut non ultricies ipsum. Morbi venenatis efficitur lectus, eu pharetra nulla ultricies a. Nunc congue commodo turpis varius viverra.
<br/><br/>
Fusce dui elit, imperdiet quis lobortis eu, sagittis id est. In justo eros, aliquam quis turpis sit amet, luctus lobortis turpis. Vestibulum volutpat leo a auctor molestie. Donec et ultricies enim, molestie feugiat mi. Proin libero justo, malesuada eu finibus et, accumsan id nibh. Duis rhoncus vitae nunc nec tincidunt. In iaculis id nibh id feugiat. In commodo malesuada tellus, eget imperdiet justo facilisis eget. Praesent id euismod lectus. Nunc quis magna eu risus aliquam dapibus sed a orci. Maecenas fermentum pretium luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec scelerisque molestie libero sed commodo. Nulla mollis sem et aliquet scelerisque. Praesent tincidunt felis sit amet convallis porta. Integer ac consectetur urna, laoreet dapibus odio.
<br/><br/>
Etiam laoreet ut elit interdum iaculis. Vestibulum ultrices augue et sollicitudin iaculis. Maecenas bibendum orci vitae lacus efficitur, sed lacinia libero dapibus. Ut viverra eleifend lorem ut condimentum. Fusce et fermentum metus. Praesent sed sollicitudin sapien. Curabitur ut pulvinar mauris. In feugiat, mauris non bibendum imperdiet, nibh lorem aliquet libero, eget feugiat felis ex id nisi. Aenean cursus, mi nec imperdiet viverra, nisl mauris mattis magna, eu ornare nulla lectus vitae sapien. Nunc nec maximus ante. Pellentesque pretium lacus ultricies hendrerit dictum. Pellentesque at erat gravida, cursus ipsum sit amet, molestie nibh. Pellentesque tempus massa nec enim venenatis, id luctus dolor lacinia.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt dignissim. Ut at porta ligula, ut interdum sapien. Cras et mattis ante. Proin a nisl ut lacus suscipit posuere. Ut urna tortor, pharetra non nulla vel, venenatis pellentesque odio. Aliquam mollis dui ipsum, vitae aliquet diam pulvinar at. Vivamus nisi elit, aliquet eget urna at, mollis posuere quam. Donec non blandit massa, at pellentesque sapien. Proin mollis, nisi in malesuada congue, eros mauris tempus enim, id auctor arcu mauris et justo. Morbi lobortis, nunc vitae lobortis dictum, nisl leo tempus dolor, a laoreet leo arcu sit amet erat.
<br/><br/>
Nam ultrices mauris ante. Aliquam at nulla viverra velit finibus condimentum. Maecenas porttitor hendrerit eros, a tempor eros cursus a. Aliquam volutpat erat ut dolor euismod, at ornare felis finibus. Suspendisse pulvinar tincidunt congue. Duis nec placerat leo, id faucibus mauris. Nam semper semper fermentum. Maecenas et ligula iaculis, vestibulum justo eget, eleifend sapien. Fusce venenatis mi sed consectetur iaculis. Maecenas eget turpis cursus, maximus dolor at, semper elit. Proin risus dui, blandit at mollis et, tincidunt at massa. Integer posuere tincidunt felis, a porta arcu consequat quis.
<br/><br/>
Vivamus semper augue non enim semper ornare. Sed et tortor et felis rhoncus scelerisque in et massa. Sed non finibus nisi, id iaculis dolor. Donec id ante eu nisl finibus lobortis. Suspendisse sed diam ut ante imperdiet porta id at justo. Vivamus sit amet convallis lacus. Donec pharetra tellus laoreet quam euismod lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis erat vel ipsum pellentesque cursus quis sed eros. Morbi nisl tellus, bibendum sagittis ante eu, varius mattis justo. Ut non ultricies ipsum. Morbi venenatis efficitur lectus, eu pharetra nulla ultricies a. Nunc congue commodo turpis varius viverra.
<br/><br/>
Fusce dui elit, imperdiet quis lobortis eu, sagittis id est. In justo eros, aliquam quis turpis sit amet, luctus lobortis turpis. Vestibulum volutpat leo a auctor molestie. Donec et ultricies enim, molestie feugiat mi. Proin libero justo, malesuada eu finibus et, accumsan id nibh. Duis rhoncus vitae nunc nec tincidunt. In iaculis id nibh id feugiat. In commodo malesuada tellus, eget imperdiet justo facilisis eget. Praesent id euismod lectus. Nunc quis magna eu risus aliquam dapibus sed a orci. Maecenas fermentum pretium luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec scelerisque molestie libero sed commodo. Nulla mollis sem et aliquet scelerisque. Praesent tincidunt felis sit amet convallis porta. Integer ac consectetur urna, laoreet dapibus odio.
<br/><br/>
Etiam laoreet ut elit interdum iaculis. Vestibulum ultrices augue et sollicitudin iaculis. Maecenas bibendum orci vitae lacus efficitur, sed lacinia libero dapibus. Ut viverra eleifend lorem ut condimentum. Fusce et fermentum metus. Praesent sed sollicitudin sapien. Curabitur ut pulvinar mauris. In feugiat, mauris non bibendum imperdiet, nibh lorem aliquet libero, eget feugiat felis ex id nisi. Aenean cursus, mi nec imperdiet viverra, nisl mauris mattis magna, eu ornare nulla lectus vitae sapien. Nunc nec maximus ante. Pellentesque pretium lacus ultricies hendrerit dictum. Pellentesque at erat gravida, cursus ipsum sit amet, molestie nibh. Pellentesque tempus massa nec enim venenatis, id luctus dolor lacinia.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas tincidunt dignissim. Ut at porta ligula, ut interdum sapien. Cras et mattis ante. Proin a nisl ut lacus suscipit posuere. Ut urna tortor, pharetra non nulla vel, venenatis pellentesque odio. Aliquam mollis dui ipsum, vitae aliquet diam pulvinar at. Vivamus nisi elit, aliquet eget urna at, mollis posuere quam. Donec non blandit massa, at pellentesque sapien. Proin mollis, nisi in malesuada congue, eros mauris tempus enim, id auctor arcu mauris et justo. Morbi lobortis, nunc vitae lobortis dictum, nisl leo tempus dolor, a laoreet leo arcu sit amet erat.
<br/><br/>
Nam ultrices mauris ante. Aliquam at nulla viverra velit finibus condimentum. Maecenas porttitor hendrerit eros, a tempor eros cursus a. Aliquam volutpat erat ut dolor euismod, at ornare felis finibus. Suspendisse pulvinar tincidunt congue. Duis nec placerat leo, id faucibus mauris. Nam semper semper fermentum. Maecenas et ligula iaculis, vestibulum justo eget, eleifend sapien. Fusce venenatis mi sed consectetur iaculis. Maecenas eget turpis cursus, maximus dolor at, semper elit. Proin risus dui, blandit at mollis et, tincidunt at massa. Integer posuere tincidunt felis, a porta arcu consequat quis.
<br/><br/>
Vivamus semper augue non enim semper ornare. Sed et tortor et felis rhoncus scelerisque in et massa. Sed non finibus nisi, id iaculis dolor. Donec id ante eu nisl finibus lobortis. Suspendisse sed diam ut ante imperdiet porta id at justo. Vivamus sit amet convallis lacus. Donec pharetra tellus laoreet quam euismod lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quis erat vel ipsum pellentesque cursus quis sed eros. Morbi nisl tellus, bibendum sagittis ante eu, varius mattis justo. Ut non ultricies ipsum. Morbi venenatis efficitur lectus, eu pharetra nulla ultricies a. Nunc congue commodo turpis varius viverra.
<br/><br/>
Fusce dui elit, imperdiet quis lobortis eu, sagittis id est. In justo eros, aliquam quis turpis sit amet, luctus lobortis turpis. Vestibulum volutpat leo a auctor molestie. Donec et ultricies enim, molestie feugiat mi. Proin libero justo, malesuada eu finibus et, accumsan id nibh. Duis rhoncus vitae nunc nec tincidunt. In iaculis id nibh id feugiat. In commodo malesuada tellus, eget imperdiet justo facilisis eget. Praesent id euismod lectus. Nunc quis magna eu risus aliquam dapibus sed a orci. Maecenas fermentum pretium luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec scelerisque molestie libero sed commodo. Nulla mollis sem et aliquet scelerisque. Praesent tincidunt felis sit amet convallis porta. Integer ac consectetur urna, laoreet dapibus odio.
<br/><br/>
Etiam laoreet ut elit interdum iaculis. Vestibulum ultrices augue et sollicitudin iaculis. Maecenas bibendum orci vitae lacus efficitur, sed lacinia libero dapibus. Ut viverra eleifend lorem ut condimentum. Fusce et fermentum metus. Praesent sed sollicitudin sapien. Curabitur ut pulvinar mauris. In feugiat, mauris non bibendum imperdiet, nibh lorem aliquet libero, eget feugiat felis ex id nisi. Aenean cursus, mi nec imperdiet viverra, nisl mauris mattis magna, eu ornare nulla lectus vitae sapien. Nunc nec maximus ante. Pellentesque pretium lacus ultricies hendrerit dictum. Pellentesque at erat gravida, cursus ipsum sit amet, molestie nibh. Pellentesque tempus massa nec enim venenatis, id luctus dolor lacinia.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append( progressBar );

// función que haga el cálculo
const calcularPorcentajeScroll = ( event ) => {
    
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // console.log({ scrollTop, scrollHeight, clientHeight })
    return ( scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent( document, 'scroll' );
// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event) )
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje }%`

})


