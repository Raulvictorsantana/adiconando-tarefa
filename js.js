var texto = document.getElementById('texto');
var mandar = document.getElementById('mandar');
var ul = document.querySelector('ul');
var lii = ul.querySelectorAll ('li')

mandar.addEventListener ('click', enviaar);
texto.addEventListener('keyup', function(e){
  if(e.keyCode=== 13){
     enviaar();
     texto.value='';
  
   
}
})
for(var f= 0; f<lii.length; f++){
     addEvent(lii[f]);
     
}
function done (){
     this.classList.toggle('feito');

}
  


function enviaar (){
if(texto.value===""){ 
   let veri=document.getElementById('res')
   veri.innerHTML="Digite algo"
   veri.style.fontSize ="1.5rem",
   veri.style.color ="red"
   veri.style.fontWeight ="800px"
   veri.style.background ="black"
}
else{
 var li =document.createElement ('li')
var text = document.createTextNode (texto.value); 
li.appendChild(text);
ul.appendChild(li);
texto.value='';
texto.focus();
addEvent(li);

}
}

function addEvent(li){
     li.addEventListener ('click',done)
}
function reca(){
     location.reload();
}

