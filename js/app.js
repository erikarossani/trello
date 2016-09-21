window.addEventListener("load", function() {
	var boton = document.getElementById("trello1");
  var textArea = document.getElementById("texto");
  var guardar = 

	boton.addEventListener("click", function(e) {
    e.preventDefault();
    var guardar = document.getElementById("resultado");

    activarCampo();

});

    function activarCampo(){
        var contenedor = document.getElementById("tema");
        contenedor.style.display = "block";
        return true;
    }

});
