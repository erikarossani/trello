window.addEventListener("load", function() {
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

	function guardarTarjeta(padre,textArea){
		var campoTarjeta = document.createElement("div");
		campoTarjeta.innerText = textArea.value;
		padre.insertBefore(campoTarjeta, padre.lastChild);

		campoTarjeta.classList.add("tarjeta1");
		padre.appendChild(campoTarjeta.previousSibling);
		padre.lastChild.style.display = "block";
	}
});