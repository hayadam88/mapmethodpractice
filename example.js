console.log('array map method lecture');

const caterpillar = 'Ben';

// const caterpillarToButterfly = function(caterpillar){
//     return {name: caterpillar, isButterfly: true};
// }

//same thing as above
//const caterpillarToButterfly = (caterpillar) => ({ name: caterpillar, isButterfly: true });


//console.log(caterpillarToButterfly('Ben'))

const caterpillarArray = [
    'Ben',
    'Charlotte',
    'Daisy',
    'Logan',
];

// const butterflyArray = [];

// for (let i = 0; i<caterpillarArray.length; i++){
//     const newButterfly = caterpillarToButterfly(caterpillarArray[i]);
//     butterflyArray.push(newButterfly);
// }

// caterpillarArray.forEach(function(caterpillar){
//     const newButterfly = caterpillarToButterfly(caterpillar);
//     butterflyArray.push(newButterfly);
// })

// const butterflyArray = caterpillarArray.map(function (caterpillar) {
//     const newButterfly = caterpillarToButterfly(caterpillar);
//     return newButterfly;
//     // first time through would return [{name: 'Ben', isButterfly: true}]
// })

// const butterflyArray = caterpillarArray.map((caterpillar) => {
//     const newButterfly = caterpillarToButterfly(caterpillar);
//     return newButterfly;
// })

// const butterflyArray = caterpillarArray.map((caterpillar) => {
//     return caterpillarToButterfly(caterpillar);
// });

const butterflyArray = caterpillarArray.map((caterpillar) => ({ name: caterpillar, isButterfly: true }))



console.log(butterflyArray);