window.addEventListener("load", function() {
<<<<<<< HEAD
      var boton = document.getElementById("trello1");
      var textArea = document.getElementById("texto");
      var guardar = document.getElementById("resultado");
      var contenedor = document.getElementById("tema");
      var retornar = document.getElementById("retornar");

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
		boton.style.marginLeft = "10";
	 }
});

guardar.addEventListener("click", function() {
	 agregarMensaje(texto, this);
	 contenedor.style.display = "none";
	 boton.style.display ="block";
     moverTarjeta();
});
=======
	var subcontenedor = document.getElementById("subcontenedor");
	var lista = document.getElementById("lista");
	var anadirLista = document.getElementById("anadirLista");
	var formulario = document.getElementById("formulario");
	var inputLista = document.getElementById("inputLista");
	var guardar = document.getElementById("guardar");

	anadirLista.addEventListener("click", function(e){
		e.preventDefault();
  		anadirLista.style.display = "none";
        activarCampo();
  		inputLista.focus();
  		lista.classList.add("lsta");
	});

    retornar.addEventListener("click", function(e) {
	     e.preventDefault();
	     retornarCampo()
	     anadirLista.style.display ="block";

	     if (formulario.style.display = "none") {
		     anadirLista.style.marginLeft = "10";
	         }
        });

	guardar.addEventListener("click", function(){
		formulario.style.display = "none";
		agregarMensaje(inputLista, this);
		insertarContenedor();
		inputLista.value = "";
	});
>>>>>>> c2e4b99018032cceefdb3765973599ccd514d381

	function activarCampo(){
	     formulario.style.display = "block";
	}
	
	function agregarMensaje(texto, guardar){
		var padre = guardar.parentElement.parentElement; 
		var tarjeta = document.createElement("div");
		var newItem = document.createElement("div");
		
		newItem.innerText = texto.value;
		padre.insertBefore(newItem, padre.childNodes[0]);
		newItem.classList.add("nuevalsta");

		tarjeta.innerText = "Añadir una tarjeta..."
		padre.appendChild(tarjeta);
		tarjeta.classList.add("tarjeta2");


		tarjeta.addEventListener("click", function(){
			tarjeta.style.display = "none";
			anadirTarjeta(padre);
		});
	}

	function retornarCampo(){
	   formulario.style.display = "none";
	}

<<<<<<< HEAD
	function agregarMensaje(texto, boton){
	     var nuevoItem = document.createElement("div");
	     var btn = document.createElement("button");
	     nuevoItem.innerHTML =texto.value;
	     btn.textContent = "Añadir una tarjeta";
	     btn.classList.add("texto");
	     nuevoItem.classList.add("div")
=======
	function insertarContenedor(){
		var nuevoCampo = document.createElement("div");
		subcontenedor.appendChild(nuevoCampo);

		nuevoCampo.insertBefore(anadirLista, nuevoCampo.childNodes[0]);
		nuevoCampo.insertBefore(formulario, nuevoCampo.childNodes[0]);
		
		nuevoCampo.classList.add("nuevocampo");
		nuevoCampo.classList.add("lsta");

		anadirLista.style.display = "block";
	}
	function anadirTarjeta(padre){
		var card = document.createElement("form");
		var textArea = document.createElement("textarea");
		var btnAnadir = document.createElement("button");

		card.insertBefore(textArea, card.childNodes[0]);
		card.insertBefore(btnAnadir, card.childNodes[1]);
		padre.appendChild(card);
>>>>>>> c2e4b99018032cceefdb3765973599ccd514d381

		btnAnadir.type = "button";
		btnAnadir.innerText = "Añadir";

		card.classList.add("card");
		textArea.classList.add("textarea");
		btnAnadir.classList.add("boton");

		textArea.focus();

		btnAnadir.addEventListener("click",function(){
			card.style.display = "none";
			guardarTarjeta(padre,textArea);
		});
	}

<<<<<<< HEAD
	function moverTarjeta(){
	      var padre =guardar.parentElement.parentElement;
	      var mover = document.createElement("div");
	      principal.appendChild(mover);
	      mover.appendChild(boton);
	      mover.appendChild(contenedor);
	      mover.classList.add("mover");
	}

	function mostrarCampo(){
            
        var item = document.createElement("textarea");
        var btn1 = document.createElement("button");
        btn1.textContent = "Añadir";
        btn1.classList.add("añadir");
        item.classList.add("item");
=======
	function guardarTarjeta(padre,textArea){
		var campoTarjeta = document.createElement("div");
		campoTarjeta.innerText = textArea.value;
		padre.insertBefore(campoTarjeta, padre.lastChild);
>>>>>>> c2e4b99018032cceefdb3765973599ccd514d381

		campoTarjeta.classList.add("tarjeta1");
		padre.appendChild(campoTarjeta.previousSibling);
		padre.lastChild.style.display = "block";
	}
});