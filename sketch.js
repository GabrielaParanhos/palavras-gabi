let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatoria()
}

function palavraAleatoria(){
  let palavras = ["Gabriela", "Gabi", "Gabizinha"]
  
  return random(palavras)
}

function colorir(){
   background("rgb(171,171,229)");
   fill(0)
   textSize(70)
   textAlign(CENTER, CENTER)
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length)
  let parcial = palavra.substring(0, quantidade)
  
  return parcial 
}

function draw() {
  
  colorir()
  
  let texto = palavraParcial(0, width)
  
  text(texto, 200, 200)
 
}