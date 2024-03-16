function numeros() {
  let n1 = parseInt(prompt("Informe um numero: "));
  let n2 = parseInt(prompt("Informe outro numero: "));

  if (n1 > n2) {
    document.getElementById("comp").innerHTML =
      "O numero: " + n1 + " é maior que o numero: " + n2;
  } else {
    document.getElementById("comp").innerHTML =
      "O numero: " + n2 + " é maior que o numero: " + n1;
  }
}

function comparar() {
  let numerocomp = parseInt(
    prompt("Informe o numero, vamos ver o que ele é: ")
  );

  if (numerocomp >= 1) {
    document.getElementById("mostraresult").innerHTML =
      "O numero: " + numerocomp + " é positivo";
  } else if (numerocomp < 0) {
    document.getElementById("mostraresult").innerHTML =
      "O numero: " + numerocomp + " é negativo";
  } else if (numerocomp == 0) {
    document.getElementById("mostraresult").innerHTML =
      "O numero: " + numerocomp + " é igual a zero";
  }
}

function comparar2() {
  let n1 = parseInt(prompt("Digite um numero: "));
  let n2 = parseInt(prompt("Digite outro numero: "));
  let n3 = parseInt(prompt("Agora mais um: "));

  if (n1 && n2 < n3) {
    document.getElementById("mostraresult2").innerHTML =
      "O numero: " + n3 + " é maior que os numeros: " + n1 + ", e " + n2;
  } else if (n1 && n3 < n2) {
    document.getElementById("mostraresult2").innerHTML =
      "O numero: " + n2 + " é maior que os numeros: " + n1 + ", e " + n3;
  } else if (n2 && n3 < n1) {
    document.getElementById("mostraresult2").innerHTML =
      "O numero: " + n1 + " é maior que os numeros: " + n3 + ", e " + n2;
  }
}

function somar() {
  let n1 = parseInt(prompt("Digite um numero: "));
  let n2 = parseInt(prompt("Digite outro numero: "));
  let n3 = parseInt(prompt("Agora mais um: "));

  if (n1 && n2 > n3) {
    let soma = n1 + n2;
    document.getElementById("mostrasoma").innerHTML =
      "A soma entre os maiores " + n1 + " e " + n2 + " é igual a: " + soma;
  } else if (n2 && n3 > n1) {
    let soma = n2 + n3;
    document.getElementById("mostrasoma").innerHTML =
      "A soma entre os maiores " + n2 + " e " + n3 + " é igual a: " + soma;
  } else if (n1 && n3 > n2) {
    document.getElementById("mostrasoma").innerHTML =
      "A soma entre os maiores  " + n1 + " e " + n3 + "é igual a: " + soma;
  }
}

function media() {
  let n1 = parseInt(prompt("Digite um numero: "));
  let n2 = parseInt(prompt("Digite outro numero: "));
  let n3 = parseInt(prompt("Agora mais um: "));
  let n4 = parseInt(prompt("Digite um numero: "));
  let n5 = parseInt(prompt("Digite outro numero: "));
  let n6 = parseInt(prompt("Agora mais um: "));

  if (n1 != null) {
    let media = (n1 + n2 + n3 + n4 + n5 + n6) / 6;
    document.getElementById("mostramedia").innerHTML =
      "A media de todos os numeros é: " + media;
  }
}

function peun() {
  let n1 = parseInt(prompt("Digite um numero: "));
  let n2 = parseInt(prompt("Digite outro numero: "));
  let n3 = parseInt(prompt("Agora mais um: "));
  let n4 = parseInt(prompt("Digite um numero: "));

  if (n1 > n2 && n1 > n3 && n1 > n4) {
    document.getElementById("mostranuns").innerHTML =
      "O primeiro numero: " + n1 + " o ultimo: " + n4 + " e o maior é :  " + n1;
  } else if (n2 > n1 && n2 > n3 && n2 > n4) {
    document.getElementById("mostranuns").innerHTML =
      "O primeiro numero: " + n1 + " o ultimo: " + n4 + " e o maior é :  " + n2;
  } else if (n3 > n1 && n3 > n2 && n2 > n4) {
    document.getElementById("mostranuns").innerHTML =
      "O primeiro numero: " + n1 + " o ultimo: " + n4 + " e o maior é :  " + n3;
  } else if (n4 > n2 && n4 > n1 && n4 > n3) {
    document.getElementById("mostranuns").innerHTML =
      "O primeiro numero: " + n1 + " o ultimo: " + n4 + " e o maior é :  " + n4;
  }
}

function mensoma() {
  let n1 = parseInt(prompt("Digite um numero: "));
  let n2 = parseInt(prompt("Digite outro numero: "));
  let n3 = parseInt(prompt("Agora mais um: "));
  let n4 = parseInt(prompt("Digite um numero: "));
  let n5 = parseInt(prompt("Digite outro numero: "));
  let n6 = parseInt(prompt("Agora mais um: "));

  let numeros = [n1, n2, n3, n4, n5, n6];

  let numerosMenoresQue72 = numeros.filter((numero) => numero < 72);

  // Soma os números filtrados
  let soma = numerosMenoresQue72.reduce((acc, curr) => acc + curr, 0);

  document.getElementById("mostramenor").innerHTML = "O resultado é: " + soma;
}

function calmed2() {
  let n1 = parseInt(prompt("Digite um numero: "));
  let n2 = parseInt(prompt("Digite outro numero: "));
  let n3 = parseInt(prompt("Agora mais um: "));
  let n4 = parseInt(prompt("Digite um numero: "));

  // let nummed = [n1, n2, n3, n4];

  if (n1 > 0 && n2 > 0 && n3 > 0 && n4 > 0) {
    let med = (n1 + n2 + n3 + n4) / 4;
    document.getElementById("mostramedi3").innerHTML = med;
  }
}

function calcpes() {
  let mulhom = parseInt(prompt("Digite se você é mulher ou homem (1 -Mulher/ 2-Homem)"));
  let altura = parseFloat(prompt("Digite sua altura: "))
  if( mulhom == 1){
   let resu = (62.1*altura)-44.7;
   document.getElementById("pesoid").innerHTML="Seu peso ideal é: "+resu;
  }else if(mulhom == 2){
    let resul = (72.7* altura)-58
    document.getElementById("pesoid").innerHTML="Seu peso ideal é: "+resul;
  }



}



function calc(){
    let n1 = parseInt(prompt("Vamos calcular? Digite um numero (de 1 a 4 por favor): "));
    let n2 = parseInt(prompt("Digite outro numero (de um a 4 por favor): "));

    if((n1 && n2)>= 1 && (n1 && n2) <= 4){
        let soma =(n1+n2);
        let sub = (n1-n2);
        let div = (n1/n2);
        let exp = (n1*n2);


        document.getElementById("resultsoma").innerHTML=" A soma entre numero 1 e o numero 2 é: "+soma;
        document.getElementById("resultsub").innerHTML=" A Subtração entre numero 1 e o numero 2 é: "+sub;
        document.getElementById("resultdiv").innerHTML=" A divisão entre numero 1 e o numero 2 é: "+div;
        document.getElementById("resultexpo").innerHTML=" A exponenciação entre numero 1 e o numero 2 é: "+exp;
    
    }
}
