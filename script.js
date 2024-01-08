 // declarar variável e atribuir ligação a cada uma das frases e respetivos autores 
 var frases = [
    ["Ámame sin preguntas, que yo te amaré sin respuestas."],
 ["Porque sin buscarte te encuentro en todos lados, principalmente cuando cierro los ojos."],	   
 ["La vida es una, y la veo más hermosa desde que estás a mi lado."],
 ["Porque te amo más de lo que puedo expresar con palabras. Si pudiera decirtelo, te lo haría saber."],
 ["Admiro la pasión, la entrega y la dedicación con la que haces cada cosa."],
 ["Quiero llenar mi boca con tu nombre, y poder repetirlo hasta la infinidad"], 
 ["Deberíamos darnos un tiempo. Tú me das tu presente, yo te doy mi futuro"],
 ["Ven a dormir conmigo. No haremos el amor... el nos hará a nosotras..."], 
["Eres la melodía que siempre quiero escuchar."],
["Tus ojos son estrellas que iluminan mi universo."],
["Amar es encontrarte en cada rincón de mi corazón."],
["Eres el sueño que nunca quiero despertar."],
["Tu amor es el faro que guía mi existencia."],
["Cada instante a tu lado es un poema de amor."],
["Eres la razón por la que late mi corazón."],
["En tus abrazos encuentro mi refugio."],
["Contigo, cada día es una nueva aventura."],
["Eres la pieza que completa mi rompecabezas."],
["Tus besos son la magia que transforma mi realidad."],
["A tu lado, el tiempo se detiene."],
["Eres mi sol en los días grises."],
["Nuestro amor es un cuento que nunca termina."],
["Eres la respuesta a todas mis preguntas."],
["En tus labios descubro el secreto de la felicidad."],
["Eres mi sueño hecho realidad."],
["Amar es verte y sentir que todo está bien."],
["Tus caricias son el bálsamo de mi alma."],
["Eres la chispa que enciende mi corazón."],
["A tu lado, la vida es más hermosa."],
["Eres la melodía que da ritmo a mi vida."],
["Tus abrazos son mi lugar favorito."],
["Eres la inspiración de mis mejores versos."],
["Amar es compartir contigo cada amanecer."],
["Tus ojos son la ventana a un mundo de amor."],
["En tu sonrisa encuentro la paz."],
["Eres mi anhelo más profundo."],
["A tu lado, cada día es San Valentín."],
["Tus palabras son la melodía de mi corazón."],
["Eres el sueño del que nunca quiero abandonar."],
["Tus besos son la poesía que recita mi alma."],
["Amar es perderse en tu mirada."],
["Eres la razón por la que creo en el destino."],
["En tu amor encuentro mi fortaleza."],
["Eres la luz que ilumina mi camino."],
["Tus caricias son el susurro del viento en mi piel."],
["Amar es bailar al ritmo de nuestro propio corazón."],
["Eres la pieza clave en el rompecabezas de mi felicidad."],
["Tus abrazos son mi refugio seguro."],
["En tus labios descubro el sabor del amor eterno."],
["Eres la melodía que nunca deja de sonar en mi interior."],
["A tu lado, cada día es un regalo."],
["Tus besos son la magia que transforma mi realidad."],
["Eres el faro que guía mis noches oscuras."],
["En tu amor encuentro la fuerza para seguir adelante."],
["Eres la razón por la que mi corazón late con fuerza."],
["Amar es descubrir la belleza en cada detalle de ti."],
["Tus caricias son el lenguaje que mi piel entiende."],
["Eres la historia de amor que siempre soñé vivir."]];



// mostrar as frases de forma aleatória 
// definir função para aleatório 
function aleatorio(x) {

  // parar a execução normal das frases e retornar um número aleatório  
     return Math.floor(((Math.random() * x.length) + 1) - 1);
}


// definir função para as frases aleatórias
function aleatorioFrase() {
  
  // atribuir ligação entre número aleatório e frases 
     var aleatorioNumero = aleatorio(frases);

         // retornar as frases em número aleatório 
         return frases[aleatorioNumero];
}



// declarar variável para mudar frase e autor e atribuir ligação ao elemento id definido em html
var mudarConteudo = document.getElementById('botón');

// declarar variável para apresentar as frases e atribuir ligação ao elemento id definido em html
var apresentarFrase = document.getElementById('texto');

// declarar variável para apresentar os autores e atribuir ligação ao elemento id defindo em html 	




// após se clicar no botão 
mudarConteudo.onclick = function(){

  // aparece outra frase e autor
  // atribuir ligação entre outra frase e autor e frases aleatórias  
 var outroConteudo = aleatorioFrase();

     // mostrar no ecrã outro autor
     

     // mostrar no ecrã outra frase 
     apresentarFrase.innerHTML = outroConteudo[0];
}


/* created by magda pimentel, august 2017 - 31 Dias de Código */ 