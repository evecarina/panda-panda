
var pictures = ["assets/img/a1.jpg",
                "assets/img/a2.jpg",
                "assets/img/a3.jpg",
                "assets/img/a4.jpg"];

//var section = document.getElementsByTagName("section1");

var div_imagenes = document.getElementById('imagenes');
for (var i = 0; i < pictures.length; i++) {
  var div_principal=document.createElement("div");
div_principal.setAttribute("class","div_principal");
  var photo = document.createElement('img');
  photo.setAttribute('src', pictures[i]);

  var btn_x=document.createElement("button");
  btn_x.setAttribute("class","btn_x");
  btn_x.textContent="x";
  div_principal.appendChild(btn_x);
  div_principal.appendChild(photo);
  div_imagenes.appendChild(div_principal);


}



