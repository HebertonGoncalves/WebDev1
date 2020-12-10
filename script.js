let inputGasolina = document.getElementById("gasolina");
let inputAlcool = document.getElementById("alcool");
let inputConGas = document.getElementById("con_gas");
let inputConAlc = document.getElementById("con_alc");

function calcular(){
    if(inputAlcool.value>0 && inputGasolina.value>0 && inputConAlc.value>0 && inputConGas.value>0){
    let gas = inputConGas.value/inputGasolina.value; 
    let alc = inputConAlc.value/inputAlcool.value;

    if (gas>=alc){caixa_res.innerHTML = '<p>O combustível ideal é gasolina !</p>';}
    else{caixa_res.innerHTML = '<p>O combustível ideal é o alcool !</p>';}
}
    else{caixa_res.innerHTML = '<p>Por favor preencha todos os campos!</p>';}

}