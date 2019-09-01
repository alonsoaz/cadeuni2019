/*let ENTREVISTADOS = [{ nombre: "Pablo", img: "../img/percy.jpg" }];

function init() {
  let marco = document.createElement("article");
  marco.classList.add("marco");
  let img = document.createElement("ïmg");
  img.src = ENTREVISTADOS[0].img;
  img.style.width = "100%";
  marco.appendChild(img);
  let videos = document.getElementsByClassName("videos");
  videos[0].appendChild(marco);
}

window.onload = init;*/
$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});
