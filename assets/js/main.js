
function Panda(){

var pictures = ["assets/img/a1.jpg",
                "assets/img/a2.jpg",
                "assets/img/a3.jpg",
                "assets/img/a4.jpg"];

var div_imagenes = document.getElementById('imagenes');
for (var i = 0; i < pictures.length; i++) {
  var indice="img"+(i+1);
  var button="btn"+(i+1);
  var divprincipal="divprincipal"+(i+1);
  var div_principal=document.createElement("div");
  div_principal.setAttribute("id","div_principal");
  div_principal.setAttribute("id",divprincipal);

  var photo = document.createElement('img');
  photo.setAttribute('src', pictures[i]);
  photo.setAttribute('id', indice);

  var btn_x=document.createElement("button");
  btn_x.setAttribute("class","btn_x");
  btn_x.setAttribute("id",button);
  btn_x.textContent="x";
  div_principal.appendChild(btn_x);
  div_principal.appendChild(photo);
  div_imagenes.appendChild(div_principal);
  btn_x.setAttribute('onclick','eliminar(this)');
}
}
Panda();

function eliminar(btn_x){
     btn_x.parentNode.style.visibility='hidden';
}


// funcion de mostrar fotos de los pandas

 var bt3=document.getElementById("bt3");
 bt3.addEventListener('click',mostrar);
function mostrar(){

if (divprincipal1.style.visibility==='hidden'||divprincipal2.style.visibility==='hidden'||
  divprincipal3.style.visibility==='hidden'||divprincipal4.style.visibility==='hidden') {
  divprincipal1.style.visibility='visible' ;
  divprincipal2.style.visibility='visible' ;
  divprincipal3.style.visibility='visible' ;
  divprincipal4.style.visibility='visible' ;
 }
}

//funcion origen muestra el texto del boton origen
var bt1=document.getElementById("bt1");
 bt1.addEventListener('click',origen);

function origen(){

var div1 = document.getElementById('div1');
    if (div1.style.visibility === 'hidden') {
        div1.style.visibility = 'visible';
    } else {
        div1.style.visibility = 'hidden';
    }
 }

//Boton Extincion
var bt2=document.getElementById("bt2");
 bt2.addEventListener('click',extincion);

function extincion(){
var div2 = document.getElementById('div2');
    if (div2.style.visibility === 'hidden') {
        div2.style.visibility = 'visible';
    } else {
        div2.style.visibility = 'hidden';
    }

 }













