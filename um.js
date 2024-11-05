//                             EXERCICIO1
var valores=[];
function inseri() {
valores.push (parseInt(document.getElementById('nu').value))
document.getElementById('nu').value=""
}
function somar() {
    let mais= valores.reduce((acc,num) => acc+num,0); // operação para realizar ni vetor, acc é o acumulador, guarda o resultado, num é o valor atual sendo processado e 0 valor inial do acumulador
document.getElementById('som').innerHTML= mais;
}

function media() {
    let adiciona=valores.reduce((acc,num) => acc+num,0);
    let mediaa= adiciona/valores.length;
    resull=document.getElementById('medi')
    resull.innerHTML=mediaa.toFixed(2);

}
function par() {
    let pares= valores.filter (num => num %2 ===0);
    quantidadepar=pares.length;
    let impares= valores.filter (num=> num%2!==0);
    quantidadeimpar= impares.length;
document.getElementById('quanti').innerHTML=` Tem ${quantidadepar} números que são par e ${quantidadeimpar} que é impar.`
}

//                             EXERCICIO2

let tempreturaclicada='';                              //identifica qual clicou
document.getElementById('celsius').addEventListener('click',function(){    // serve tipo para fazer a função quando clicado
tempreturaclicada='celsius';
});
document.getElementById('fahrenheit').addEventListener('click',function(){
    tempreturaclicada='fahrenheit';
    });

function calctemp() {
    
    let valor= parseFloat(document.getElementById('valor').value);
    let resultado= document.getElementById('resultado');
   if (tempreturaclicada === 'celsius') {
    let fahrenheit=(valor*9/5)+32;
        resultado.innerHTML=`${valor}C é igual a ${fahrenheit.toFixed(2)}F`;
        alert(`transformando Celsius em fahrenheit`)
   } else if(tempreturaclicada==='fahrenheit'){
    let celsius=(valor-32)*5/9;
    resultado.innerHTML=`${valor}F é igual a ${celsius.toFixed(2)}C`;
    alert(`transformando fahrenheit em Celsius `)
   }
   else if (isNaN(valor)) {
    resultado.innerHTML = "Coloque um número válido"
   } 
   else{
    resultado.innerHTML="por favor, selecione uma escala"
   }

}

//                             EXERCICIO3

var vetor=[];

function exibir() {
    
    vetor=[];

vetor.push(parseInt(document.getElementById('primeiro').value));
vetor.push(parseInt(document.getElementById('segundo').value));
vetor.push(parseInt(document.getElementById('terceiro').value));
vetor.push(parseInt(document.getElementById('quarto').value));
vetor.push(parseInt(document.getElementById('quinto').value));
vetor.push(parseInt(document.getElementById('sexto').value));
vetor.push(parseInt(document.getElementById('setimo').value));
vetor.push(parseInt(document.getElementById('oitavo').value));
vetor.push(parseInt(document.getElementById('nono').value));
vetor.push(parseInt(document.getElementById('decimo').value));

let soma = vetor.reduce((acc, num) => acc + num, 0); // Soma tudo, o reduce soma todos os valores, o acc vai guardando os valores, o num é o inicial, ai vai somando o acumulado pelo o valor digitado
let media = soma / vetor.length; // Calcula a média // vetor.length é a quantidade de valores no vetor
     let menr= document.getElementById('menr')
    let result = document.getElementById('result');
    let maiores = vetor.filter(num => num > media); 
    if (maiores.length >= 0) {   // se tem números maiores maiores que a média no array
        result.innerHTML = `Números que são maiores que a média (${media.toFixed(2)}): ${maiores.join(', ')}`; //join separa os numeros com virgula
    } else {
        result.innerHTML = `Não tem número maior que a média (${media.toFixed(2)}).`;
    }
    let negativos=vetor.filter(num => num<0);
    if (negativos.length> 0) {
        menr.innerHTML=`numeros menores que 0: ${negativos.join(',')}`; 
    } else {
     menr.innerHTML=`não tem menor que 0!`   
    }
}
//                             EXERCICIO4

function preco() {
   let quilometro= document.getElementById('km').value;
   let combustivel= document.getElementById('val').value;
    let gasto= (quilometro/8)*combustivel;
    document.getElementById('calculo').innerHTML=`Seu gasto será ${gasto.toFixed(2)} reais`
}
//                             EXERCICIO5

function piso() {
    let largura= parseFloat(document.getElementById('largu').value);
    let comprimento= parseFloat(document.getElementById('compri'). value);
    let custo= (largura*comprimento)*36;
document.getElementById('assenta').innerHTML=`O custo será de ${custo} reais`

}
//                             EXERCICIO6

function fr() {
    let massa=document.getElementById('massa').value;
let positivaf=document.getElementById('positivaf').value;
let negativaf=document.getElementById('negativaf').value;
forcaresultante=massa*(positivaf-negativaf);
document.getElementById('frr').innerHTML=`A força resultate é ${forcaresultante}N`
}

function situ() {
    let massaone=document.getElementById('objj').value;
    let massatwo=document.getElementById('obj'). value;
    let aceleone=document.getElementById('aceleracao'). value;
    let aceletwo=document.getElementById('aceleracaoo').value;
    let forcar=massaone*aceleone;
    let forcarr=massatwo*aceletwo;  
    document.getElementById('ress').innerHTML=`Força resultante do primeiro é ${forcar}N e do segundo ${forcarr}N `
    document.getElementById('rea').innerHTML=`A força de ação e reação do primeiro objeto é: ${forcar} (são igual, mas em direção opostas).`
document.getElementById('dois').innerHTML=`A força de ação e reação do primeiro objeto é: ${forcarr} (são igual, mas em direção opostas).`
}

//                             EXERCICIO7
 function predo() {
  let metal=parseInt(document.getElementById('me').value);
   let ametal=parseInt(document.getElementById('ame').value);
   let total=metal+ametal;
   if (total!==100) {
     document.getElementById('pre').innerHTML=`A porcentagem não é 100, verifique se os números estão certos (a soma igual 100)`
   }
if (total===100 && metal>ametal) {
    document.getElementById('pre').innerHTML=`A liga predominate é metal`
} if (total===100 && metal<ametal) {
    document.getElementById('pre').innerHTML=`A liga predominate é ametal`
} if (isNaN(ametal && metal)) {
     document.getElementById('pre').innerHTML=`Coloque um número valido`
}if (metal===ametal && total===100) {
     document.getElementById('pre').innerHTML=`não tem liga predoinante, são iguais`
}
 
}
//                             EXERCICIO8


 




//                             exercicio9

var sequencia=[];
function insirar() {
    sequencia.push(parseInt(document.getElementById('insii').value))
document.getElementById('insii').value="";
}
function todosr() {
document.getElementById('todss').innerHTML=sequencia.join(',');
}
function maiorr() {
let maioor=sequencia[0];  //inicial com a variavel maior posta primeiro
for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i]>maioor) {
        maioor=sequencia[i]; //atualiza o valor maior
    }   
    
}
document.getElementById('maara').innerHTML=maior;
}
function menorr() {
let menoor=sequencia[0];
for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i]<menoor) {
        menoor=sequencia[i]; 
    }   
    
}
document.getElementById('menorea').innerHTML=menoor;
}



//                              exercicio10

function fun() {
    let base=parseInt(document.getElementById('bas').value);
    let expoente=parseInt(document.getElementById('expo').value);
   let ccalcular= base**expoente;
    document.getElementById('exp').innerHTML=`O resultado é ${ccalcular}`

    
}



//                             EXERCICIO11

function ultimo() {
    let meta = parseFloat(document.getElementById('met').value);
    let ameta = parseFloat(document.getElementById('amet').value);
    let tota = meta + ameta;

    if (tota === 100 && meta > ameta) {
      document.getElementById('pron').innerHTML = 'Predominante metal';
    } else if (tota === 100 && meta < ameta) {
      document.getElementById('pron').innerHTML = 'Predominante ametal';
    } else if (tota !== 100) {
      document.getElementById('pron').innerHTML = 'Não está 100%, verifique seus números';
    } else if (meta===50 && ameta===50) {
        document.getElementById('pron').innerHTML=`não tem liga predoinante, são iguais`
   }
  }
