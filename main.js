var convidados=[];
function envia(){
var nome=document.getElementById("rumister").value;
convidados.push(nome);
document.getElementById("lista").innerHTML=convidados.toString();
};
function deixa_bonito(){
    convidados.sort();
    document.getElementById("lista").innerHTML=convidados.toString();

};
