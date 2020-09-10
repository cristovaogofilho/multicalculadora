function calcularIMC (){
	
	var peso = document.getElementById("pesoIMC").value;
	var altura = document.getElementById("alturaIMC").value;
	
	if (peso == "" || altura == ""){
		alert("Preencha os dois campos");
	} else {
		var resIMC = parseFloat(peso)/(parseFloat(altura)*parseFloat(altura));
		alert("O valor do IMC: "+resIMC.toFixed(2));
	}
}

function calcularRetangulo (){
	
	var baseReta = document.getElementById("baseRetangulo").value;
	var alturaReta = document.getElementById("alturaRetangulo").value;
	
	if (baseReta == "" || alturaReta == ""){
		alert("Preencha os dois campos");
	} else {
		var resReta = parseFloat(baseReta)*parseFloat(alturaReta);
		alert("O valor da área do retângulo: "+resReta.toFixed(2));
	}
}

function calcularCirculo (){
	
	var raioCirc = document.getElementById("raioCirculo").value;
	
	if (raioCirc == ""){
		alert("Preencha o campo");
	} else {
		var resCirc = Math.PI*parseFloat(raioCirc)*parseFloat(raioCirc);
		alert("O valor da área do círculo: "+resCirc.toFixed(2));
	}
}