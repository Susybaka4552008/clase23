class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
//lee los datos y guarda los valores de player count dentro de la funcion getcount
getCount(){
 var playerCountRef = database.ref("playerCount");
 playerCountRef.on("value",data => {
  playerCount=data.val();
 });
}
//actializa playerCount en la base de datos
updateCount(count){
  database.ref("/").update({
    playerCount:count
  });
}
 }

