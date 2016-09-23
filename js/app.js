window.addEventListener("load", function() {
      var boton = document.getElementById("trello1");
      var textArea = document.getElementById("texto");
      var guardar = document.getElementById("resultado");
      var contenedor = document.getElementById("tema");
      var retornar = document.getElementById("retornar");
      var btn1 = document.getElementsByTagName("button");
      var principal = document.getElementById("principal");
      var content= document.getElementById("content");
      var parrafo= document.getElementById("parrafo");

boton.addEventListener("click", function(e) {
	 e.preventDefault();
      activarCampo();
      boton.style.display ="none";
      textArea.focus();
});

retornar.addEventListener("click", function(e) {
	 e.preventDefault();
	 retornarCampo()
	 boton.style.display ="block";

	 if (contenedor.style.display = "none") {
		boton.style.marginLeft = "0";
	 }
});

guardar.addEventListener("click", function() {
	 var texto = textArea.value;
	 agregarMensaje(texto, this);
	 contenedor.style.display = "none";
	 boton.style.display ="block";
      moverTarjeta();


});

	function activarCampo(){
	     contenedor.style.display = "block";
	}

	function retornarCampo(){
	   contenedor.style.display = "none";
	}


	function moverTarjeta(){
	      var padre =guardar.parentElement.parentElement;
	      var mover = document.createElement("div");
	      principal.appendChild(mover);
	      mover.appendChild(boton);
	      mover.appendChild(contenedor);
	      mover.classList.add("mover");
	}

	function agregarMensaje(texto, boton){
	     var nuevoItem = document.createElement("div");
	     var btn = document.createElement("button");
	     nuevoItem.innerHTML =texto;
	     btn.textContent = "Añadir una tarjeta";
	     btn.classList.add("texto");
	     nuevoItem.classList.add("div")

     btn.addEventListener("click", function(){

		mostrarCampo();

	   });

	   var lista = boton.parentElement.parentElement;
	   lista.insertBefore(btn, lista.childNodes[0]);
	   lista.insertBefore(nuevoItem, lista.childNodes[0]);
	   document.getElementById("texto").value = "";
	}

	function mostrarCampo(){
            
        var item = document.createElement("textarea");
        var btn1 = document.createElement("button");
        btn1.textContent = "Añadir";
        btn1.classList.add("Añadir");
        item.classList.add("item");

        var lista1 = document.getElementById("secundario");
        lista1.insertBefore(btn1, secundario.childNodes[1]);
        lista1.insertBefore(item, secundario.childNodes[1]);
        document.getElementById("texto").value = "";

     }

});