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
document.getElementById('maara').innerHTML=maioor;
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

