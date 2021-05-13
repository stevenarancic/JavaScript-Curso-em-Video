var fatias = 5
var fatiasComidas = 0

/*
do {
    console.log('fatia comida')
    fatiasComidas++
} while (fatiasComidas < fatias);
*/

/*
while (fatiasComidas < fatias) {
    console.log('fatia comida!')
    fatiasComidas++
}
*/

/*
for (let fatiasComidas = 0; fatiasComidas < fatias; fatiasComidas++) {
    console.log('Nhom')
}
*/

var valores = [2, 3, 4 , 5]
valores.push(1)
valores.sort()

for (let index = 0; index < valores.length; index++) {
    const element = valores[index];
    console.log(element)
}