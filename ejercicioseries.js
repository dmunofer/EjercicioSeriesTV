
let seriesPending = ['Breaking Bug', 'Game of Drones','Boolean 99', 'Arrested Developer'];

//3
seriesPending.push('Pocki Blinders');

//4
for (let i = 0; i < seriesPending.length; i++) {

  //5
    if (seriesPending[i]==='Boolean 99'){
        console.log('Found it!');
    }
    console.log(`Serie numero ${i}: ${seriesPending[i]}`);
}

//6
let seriesWatching = [];

//7
seriesWatching.push(seriesPending.shift())
console.log(seriesWatching)
console.log(seriesPending)

//8
console.log(`Longitud de la lista de series vistas: ${seriesWatching.length} \n Longitud de la lista de series pendientes: ${seriesPending.length}`)

//9
let long=seriesPending.length;
for(let i=0;i<long;i++){
    seriesWatching.push(seriesPending.shift());

}
//10
console.log(`Longitud de las series vistas: ${seriesWatching.length} \n Longitud de las series pendientes: ${seriesPending.length}`)

//11
seriesWatching.splice(0, seriesWatching.length);

//12
console.log(`Longitud de las series vistas: ${seriesWatching.length} \n Longitud de las series pendientes: ${seriesPending.length}`)