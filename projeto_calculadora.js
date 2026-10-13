let numero1 = Number(prompt('Digite um número'));
let numero2 = Number(prompt('Digite outro número'));

let calculo = Number(prompt(('Digite uma opção para calcular: 1- Soma, 2- Subtração, 3- Multiplicação ou 4- Divisão')));

if(calculo === 1){
    alert(`A soma dos números são ${numero1 + numero2}`);
}else if (calculo === 2){
    alert(`A subtração dos números são ${numero1 - numero2}`);
}else if (calculo === 3){
    alert(`A multiplicação dos números são ${numero1 * numero2}`);
}else if (calculo === 4){
    alert(`A divisão dos números são ${numero1 / numero2}`);
}

let texto = 'isso é um texto.';