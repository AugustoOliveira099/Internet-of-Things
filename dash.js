 function mudar(){
	document.getElementById("result").innerHTML = "Mudou 1";
  
	for(let i=2; i<=10; i++){
  	let muda = document.createElement("p");
    muda.innerHTML = "Mudou" + " " + i;
    
    document.getElementById("result").append(muda);
  }
}

function acender(){
	document.getElementById('luz').src="https://i.postimg.cc/hvXcySM8/Lon.png";
}

function apagar(){
	document.getElementById('luz').src= "https://i.postimg.cc/wxhFzTKM/Loff.png";
}

 function SendToServer(state){
    var KEY = "0IFIJF97HTOTHJUR";
 //criar um objeto capaz de enviar dados via requisição HTTP GET
    const http = new XMLHttpRequest();
 //prepara um GET passando a váriavel lux como ultimo paramentro do link
    http.open("GET", "https://api.thingspeak.com/update?api_key=0IFIJF97HTOTHJUR&field1=0"+state);
 //envia um GET
    http.send();
 //quando a requisição retornar ele chama o console e imprime o valor gerado
    http.onload = console.log(http.responseText+" "+state)
}