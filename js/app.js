window.addEventListener("load", function() {
	var boton = document.getElementById("trello1");
  var textArea = document.getElementById("texto");
  var guardar = document.getElementById("resultado");
  var contenedor = document.getElementById("tema");
  var retornar = document.getElementById("retornar");

	boton.addEventListener("click", function(e) {
      e.preventDefault();

      activarCampo();


      if(activarCampo()){
        boton.style.marginLeft = "20%";
      }

  });

      function activarCampo(){
          contenedor.style.display = "block";
          return true;

    }

  retornar.addEventListener("click", function(e) {
      e.preventDefault();

      retornarCampo()

  });

      function retornarCampo(){
          contenedor.style.display = "none";
          return true;
    }

  guardar.addEventListener("click", function() {
     var texto = textArea.value;
     agregarMensaje(texto);
     textArea.style.display ="none";
     guardar.style.display ="none";
     retornar.style.display ="none";



  });

    function agregarMensaje(texto){
       var nuevoItem = document.createElement("div");
       var btn = document.createElement("button");
       nuevoItem.innerHTML =texto;
       btn.textContent = "Añadir una tarjeta";
       btn.classList.add("texto");

       var lista = document.getElementById("tarjeta");
       lista.insertBefore(btn, tarjeta.childNodes[0]);
       lista.insertBefore(nuevoItem, tarjeta.childNodes[0]);
       document.getElementById("texto").value = "";
    }
});
