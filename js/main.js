var canvas;
var ctx;
var FPS = 50;

var anchoF = 50;
var altoF = 50;

var cesped = "#018928";
var tierra = "#C37C06";
var llave = "#C0CD00";
var puerta = "#641E16";

var enemigo = [];

var tileMap;

var colisionEnemigo;

var protagonista;

var imagenAntorcha;
var imagenAntorcha1;
var imagenAntorcha2;
var imagenAntorcha3;

var escenario = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,2,2,0,0,0,2,2,2,2,0,0,2,2,0],
  [0,0,2,2,2,2,2,0,0,2,0,0,2,0,0],
  [0,0,2,0,0,0,2,2,0,2,2,2,2,0,0],
  [0,0,2,2,2,0,0,2,0,0,0,2,0,0,0],
  [0,2,2,0,0,0,0,2,0,0,0,2,0,0,0],
  [0,0,2,0,0,0,2,2,2,0,0,2,2,2,0],
  [0,2,2,2,0,0,2,0,0,0,1,0,0,2,0],
  [0,2,2,3,0,0,2,0,0,2,2,2,2,2,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

function dibujarEscenario(){

  for(y = 0; y < 10; y++){
    for(x = 0; x < 15; x++){


      var tile = escenario[y][x];
      ctx.drawImage(tileMap, tile*32,0,32,32,anchoF*x,altoF*y, anchoF, altoF);
    }
  }
}

var antorcha = function(x, y){
  this.x = x;
  this.y = y;


  this.retraso = 10;
  this.contador = 0;
  this.fotograma = 0; //0-3

  this.cambiaFotograma = function(){
    if(this.fotograma < 3){
      this.fotograma++;
    }else {
      this.fotograma = 0;
    }
  }

  this.dibuja = function(){

    if (this.contador < this.retraso) {
      this.contador++;
    }else {
      this.contador = 0;
      this.cambiaFotograma();
    }
    ctx.drawImage(tileMap, this.fotograma*32,64,32,32,anchoF*x,altoF*y, anchoF, altoF);
  }

}

var antorcha1 = function(x, y){
  this.x = x;
  this.y = y;


  this.retraso = 10;
  this.contador = 0;
  this.fotograma = 0; //0-3

  this.cambiaFotograma = function(){
    if(this.fotograma < 3){
      this.fotograma++;
    }else {
      this.fotograma = 0;
    }
  }

  this.dibuja = function(){

    if (this.contador < this.retraso) {
      this.contador++;
    }else {
      this.contador = 0;
      this.cambiaFotograma();
    }
    ctx.drawImage(tileMap, this.fotograma*32,64,32,32,anchoF*x,altoF*y, anchoF, altoF);
  }

}

var antorcha2 = function(x, y){
  this.x = x;
  this.y = y;


  this.retraso = 10;
  this.contador = 0;
  this.fotograma = 0; //0-3

  this.cambiaFotograma = function(){
    if(this.fotograma < 3){
      this.fotograma++;
    }else {
      this.fotograma = 0;
    }
  }

  this.dibuja = function(){

    if (this.contador < this.retraso) {
      this.contador++;
    }else {
      this.contador = 0;
      this.cambiaFotograma();
    }
    ctx.drawImage(tileMap, this.fotograma*32,64,32,32,anchoF*x,altoF*y, anchoF, altoF);
  }

}

var antorcha3 = function(x, y){
  this.x = x;
  this.y = y;


  this.retraso = 10;
  this.contador = 0;
  this.fotograma = 0; //0-3

  this.cambiaFotograma = function(){
    if(this.fotograma < 3){
      this.fotograma++;
    }else {
      this.fotograma = 0;
    }
  }

  this.dibuja = function(){

    if (this.contador < this.retraso) {
      this.contador++;
    }else {
      this.contador = 0;
      this.cambiaFotograma();
    }
    ctx.drawImage(tileMap, this.fotograma*32,64,32,32,anchoF*x,altoF*y, anchoF, altoF);
  }

}

//clase ENEMIGO
var malo = function(x, y){
  this.x = x;
  this.y = y;

  // this.direccion = Math.floor(Math.random()*4);

  this.retraso = 50;
  this.fotograma = 0;

  this.dibuja = function(){
  ctx.drawImage(tileMap, 0,32,32,32,this.x*anchoF, this.y*altoF, anchoF, altoF);
  }

  this.comprobarColision = function(x, y){
    var colision = false;

    if(escenario[y][x] == 0){
      colision = true;
    }
    return colision;
  }

  this.mueve = function(){

    this.direccion = Math.floor(Math.random()*4);

    protagonista.colisionEnemigo(this.x, this.y);

    if(this.contador < this.retraso){
      this.contador++;

    }else{

      this.contador = 0;

      //ARRIBA
      if(this.direccion == 0){
        if(this.comprobarColision(this.x, this.y - 1) == false){
          this.y--;
        }else{
          this.direcion = Math.floor(Math.random()*4);
        }
      }

      //ABAJO
      if(this.direccion == 1){
        if(this.comprobarColision(this.x, this.y + 1) == false){
          this.y++;
        }else{
          this.direcion = Math.floor(Math.random()*4);
        }
      }

      //IZQUIERDA
      if(this.direccion == 2){
        if(this.comprobarColision(this.x - 1, this.y) == false){
          this.x--;
        }else{
          this.direcion = Math.floor(Math.random()*4);
        }
      }

      //DERECHA
      if(this.direccion == 3){
        if(this.comprobarColision(this.x + 1, this.y) == false){
          this.x++;
        }else{
          this.direcion = Math.floor(Math.random()*4);
        }
      }
    }
  }
}




//Objeto Jugador
var jugador = function(){
  this.x = 1;
  this.y = 1;
  this.color = "red";
  this.llave = false;

  this.dibuja = function(){
  ctx.drawImage(tileMap, 32,32,32,32,this.x*anchoF, this.y*altoF, anchoF, altoF);
  }

  this.colisionEnemigo = function(x, y){
    if(this.x == x && this.y == y){
      this.muerte();
    }
  }

  this.margen = function(x, y){
    var colision = false;

    if(escenario[y][x] == 0){
      colision = true;
    }

    return(colision);

  }

  this.arriba = function(){
    if(this.margen(this.x, this.y - 1) == false){
      this.y --;
      this.logicaObjeto();
    }
  }

  this.abajo = function(){
    if(this.margen(this.x, this.y + 1) == false){
      this.y ++;
      this.logicaObjeto();
    }

  }

  this.derecha = function(){
    if(this.margen(this.x + 1, this.y) == false)
    {
      this.x ++;
      this.logicaObjeto();
    }

  }

  this.izquierda = function(){
    if(this.margen(this.x - 1, this.y) == false){
      this.x --;
      this.logicaObjeto();
    }

  }

  this.victoria = function(){
    console.log("HAS GANADO EL JUEGO!!");
    this.x = 1;
    this.y = 1;
    this.llave = false;
    escenario[8][3] = 3;
  }

  this.muerte = function(){
    console.log("HAS PERDIDO");
    this.x = 1;
    this.y = 1;
    this.llave = false;
    escenario[8][3] = 3;
  }

  this.logicaObjeto = function(){
    var objeto = escenario[this.y][this.x];
  //Obtener llave
    if(objeto == 3){
      console.log("HAS CONSEGUIDO LA LLAVE!!")
      this.llave = true;
      escenario[this.y][this.x] = 2;

    }
    if(objeto == 1){
      if(this.llave == true){
        this.victoria();
      }else{
        console.log("TE FALTA LA LLAVE")
      }
    }
  }
}

function inicializa(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  //cambiar a imagenes
  tileMap = new Image();
  tileMap.src = "img/tilemap.png";

  //crear protagonista
  protagonista = new jugador();

  //crear enemigo
  enemigo.push(new malo(1, 5));
  enemigo.push(new malo(12, 3));
  enemigo.push(new malo(7, 4));

  imagenAntorcha =  new antorcha(0, 0);
  imagenAntorcha1 =  new antorcha1(0, 9);
  imagenAntorcha2 =  new antorcha2(14, 0);
  imagenAntorcha3 =  new antorcha3(14, 9);

  setInterval(function(){
    principal();
  },1000/FPS)
}

//lectura del teclado
document.addEventListener("keydown", function(tecla){
  if(tecla.keyCode == 38){
    protagonista.arriba();
  }
  else if(tecla.keyCode == 40){
    protagonista.abajo();
  }
  else if(tecla.keyCode == 37){
    protagonista.izquierda();
  }
  else if(tecla.keyCode == 39){
    protagonista.derecha();
  }
});

function borrarCanvas(){
  canvas.width = 750;
  canvas.height = 500;
}

function principal(){
  borrarCanvas();
  dibujarEscenario();
  imagenAntorcha.dibuja();
  imagenAntorcha1.dibuja();
  imagenAntorcha2.dibuja();
  imagenAntorcha3.dibuja();
  protagonista.dibuja();

  for(c = 0; c < enemigo.length; c++){
    enemigo[c].mueve();
    enemigo[c].dibuja();
  }
}
