// //JS PURO
// function teste() {
//   const valor = document.getElementById("input1").value;
//   document.getElementById("h11").innerHTML = valor;
// }

//---------------------------------------------------------------

//Teste mostrar clicks
// const clicks = rxjs.Observable.fromEvent(document,'click')
// clicks.subscribe(click => console.log(click))

// const clicks = rxjs.fromEvent(document, 'click');
// clicks.subscribe(click => console.log(click));

//const clicks = rxjs.fromEvent(document, 'click');
//clicks.subscribe(x => document.getElementById("h11").innerHTML = document.getElementById('input1').value );

//-----------------------------------------------------------------------


// const observable = rxjs.Observable.create( observer=>{
//     observer.next('hello')
// })

// observable.subscribe(val=>alert(val))


//----------------------------------------Desafio---------------------------------------------------

//Tentativa 1

// const startWatching = () => {
//     document.getElementById("input1").addEventListener('keyup', addvalue)
//         .subscribe(addvalue);
// }
// const addvalue = () => { document.getElementById("h11").innerHTML = document.getElementById('input1').value };
// startWatching();

//Não funciona com addEventListener 

//Tentativa 2

// const observable  = rxjs.fromEvent(document.getElementById('input1'), 'keyup');
// observable.subscribe(x => document.getElementById("h11").innerHTML = document.getElementById('input1').value );

//funciona

//Tentativa 3

//Observable

const startWatching = () => {
    rxjs.fromEvent(document.getElementById('input1'), 'keyup')
        .subscribe(innerVal);
        //Subscribe Este método é como conectamos um observer(observador) a um Observable.
    }
//Observers
const innerVal = () => {
    document.getElementById("h11").innerHTML = '😈' + document.getElementById('input1').value
}
startWatching();

//Tentativa 4

//Observable

// const observable = () => {
//     rxjs.fromEvent(document.getElementById('input1'), 'keyup')
//         .subscribe(innerVal);
//         //Subscribe Este método é como conectamos um observer(observador) a um Observable.
//     }
// //Observers
// const innerVal = () => {
//     document.getElementById("h11").innerHTML = document.getElementById('input1').value
// }
// observable();

