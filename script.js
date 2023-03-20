function mineCraft() {
  window.open("https://studio.code.org/c/1521814003");
}
// calcular média de vendas de um funcionário fictício.

function media(){
  var vJan = document.getElementById("jan").value;
  var vFev = document.getElementById("fev").value;
  var vMar = document.getElementById("mar").value;
  var vAbr = document.getElementById("abr").value;
  
  var media = (parseInt(vJan) + parseInt(vFev) +parseInt(vMar) + parseInt(vAbr))/4 ;
  var mVendas = 10/100 * media ;
  var pVendas = 3/100 * media ;

    if (vJan == "" | vFev == "" | vMar == "" | vAbr == ""){
    alert ("Escreva o valor das vendas de todos os meses!");  
    } else if (media >= 5000) {
      alert("Parabens! Vendeu mais que a meta e receberá R$ "+ mVendas + ",00. A média das suas vendas nos quatro meses foi de R$" + media+",00.");
    } else {
      alert("Infelizmente, você vendeu abaixo da meta e só receberá R$ "+pVendas +",00. A média das suas vendas nesses quatro meses foi de R$" +media+",00.");
    }  
}
function tabuada1(){
  var num = 0;
  var numero = 0;
  var limite = 10;

  while (numero <= limite) {
    alert("1 x "+num+"  = "+numero);
    num = (num + 1);
    numero = (numero + 1);
  }
}
function tabuada2(){
  var num = 0;
  var numero = 0;
  var limite = 20;

  while (numero <= limite) {
    alert("2 x "+num+" = "+numero);
    num = (num + 1);
    numero = (numero + 2);
  }
}
function tabuada3(){
  var num = 0;
  var numero = 0;
  var limite = 30;

  while (numero <= limite) {
    alert("3 x "+num+" = "+numero);
    num = (num + 1);
    numero = (numero + 3);
  }
}
function tabuada4(){
  var num = 0;
  var numero = 0;
  var limite = 40;

  while (numero <= limite) {
    alert("4 x "+num+" = "+numero);
    num = (num + 1);
    numero = (numero + 4);
  }
}
function tabuada5(){
  var num = 0;
  var numero = 0;
  var limite = 50;

  while (numero <= limite) {
    alert("5 x "+num+" = "+numero);
    num = (num + 1);
    numero = (numero + 5);
  }
}
function tabuada6(){
  var num = 0;
  var numero = 0;
  var limite = 60;

  while (numero <= limite) {
    alert("6 x "+num+" = "+numero);
    num = (num + 1);
    numero = (numero + 6);
  }
}
function tabuada7(){
  var num = 0;
  var numero = 0;
  var limite = 70;

  while (numero <= limite) {
    alert("7 x "+num+" = "+numero);
    num = (num + 1);
    numero = (numero + 7);
  }
}
function tabuada8(){
  var num = 0;
  var numero = 0;
  var limite = 80;

  while (numero <= limite) {
    alert("8 x "+num+" = "+numero);
    num = (num + 1);
    numero = (numero + 8);
  }
}
function tabuada9(){
  var num = 0;
  var numero = 0;
  var limite = 90;

  while (numero <= limite) {
    alert("9 x "+num+" = "+numero);
    num = (num + 1);
    numero = (numero + 9);
  }
}
function tab() {
  var contador = 0;
  var limite = 10;
  var numDig = document.getElementById("tab").value;
  
  if (numDig == "") {
    alert("Digite um número inteiro entre 1 e 9.");
  }else{
    while(contador<=limite) {   
      if (numDig > 9 || numDig < 1) {
        alert("Digite um número entre 1 e 9");
        break;  
      }else{
        var tabuada = numDig * contador;
        alert(numDig +" x " + contador+ " = " + tabuada);
        contador++  
      }
    }
  } 
}

function voltar() {
   window.location.href="https://projetobrnb.brunabechlin.repl.co/";
}
