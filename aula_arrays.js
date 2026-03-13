//Arrays
//Acessar Elementos
let alunos = ["josé", "pedro", "mario",]
console.log(alunos[1]);
//Saída: pedro

//Modificar Elementos
let carros = ["Fiat","Peugeot"]
carros[2] = "Toyota";
console.log(carros)
//Saída: ['Fiat', 'Peugeot', 'Toyota']

//Retornar o Numero de Elementos da Lista
let frutas = ["Banana","Pera","Maçã"];
console.log(frutas.length);
//Saída: 3

//Principais Métodos do Array
// .push(elemento):Adiciona elemento no final do array.
// .pop():Remove o elemento final do array.
//.unshift(elemento):Adiciona elemento no inicio do array.
//.shift():Remove elemento no início do array.

//Percorrendo Array Usando For
let celulares = ["Iphone","Samsung","Xiaomi","Huawei"];
for (let i = 0; i < celulares.length; i++ ) {
    console.log(celulares[i]);
}
//Saída: Iphone Samsung Xiaomi Huawei

//For in Indices do Array
let plantas = ["Manjericão","Hortelã","Babosa"];
for (let indice in frutas)  {
    console.log(`Indice: ${indice}, Valor ${plantas[indice]}"`);
}

//For of Itera Diretamente os Valores
let = sanduiches = ["MCdonalds","Bobs","Bk"];

for (let sanduiche of sanduiches)  {
    console.log(`Sandubas ${sanduiches}`);
}

//Arrays Multidimensionais
let matriz = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
];
console.log(matriz[1][2]);
//Saída = 6

//Novo Array Transformado (.map)



