function Pregunta(t,e,o){this.texto=t,this.opciones=e,this.respuesta=o}var numero=$("#pregunta"),texto=$("#texto"),btn0=$("#0"),btn1=$("#1"),btn2=$("#2"),btn3=$("#3"),emoji=$("#emoji"),score=$("#score"),msg=$("#msg");numero.html("1"),texto.html("¿Cuál es la pesadilla #25 de Bella Messi?"),btn0.html("Zapato Mojado"),btn1.html("Tallar Carro"),btn2.html("Quebrar Diente"),btn3.html("Tronar Globo"),emoji.addClass("poop"),score.html("20/100"),msg.html("¡Hasta un manco podría contestar mejor que tú!"),Pregunta.prototype.esCorrecta=function(t){return this.respuesta===t};