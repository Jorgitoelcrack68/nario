var mario,ladrillo,nube,montaña,tubo,enemigo,moneda;
var control={
    up:"87",
    left: "65",
    down: "83",
    right: "68",
    revive: "32",
}

var gameConfig={
    estado: "start",
    initialLifes:5,
    moveSpeed:5,
    enemigoSpeed:1,
    gravity:1,
    gravityEnemigos:10,
    jump:-15,
    startingPointX:500,
    startingPointY:0,
    screenX: 1240,
    screenY:336,
    scores:0,
    timeScores:0
}
function game() {
    initializeIndraw()
    moveEnviroment(mario)
    drawSprites()
    if (gameConfig.estado==="start") {
        fill(0,0,0,150)
        rect(0,0,gameConfig.screenX.screenY.screenY)
        fill(255,255,255)
        textsize(40)
        textAlign(CENTER)
        text("presiona cualquier tecla de flecha para iniciar",gameConfig.screenX/2,gameConfig.screenY/2)
        textsize(40)
        stroke(255)
        strokeWeight(7)
        noFill()
        cambiarEstado()
    }
}a
function initializeIndraw() {
    background(109,143,252)
    tubo.displace(tubo)
    enemigo.displace(enemigo)
    enemigo.displace(tubo)
    nube.displace(nube)
}
function moveEnviroment(jugador) {
    var velEnviroment=gameConfig.moveSpeed*0.3

    if (gameConfig.estado==="play") {
        enviromentScrolling(plataforma,velEnviroment)
        enviromentScrolling(ladrillo,velEnviroment)
        enviromentScrolling(nube,velEnviroment*0.5)
        enviromentScrolling(tubo,velEnviroment)
        enviromentScrolling(montaña,velEnviroment*0.3)
        enviromentScrolling(moneda,velEnviroment)
        enviromentScrolling(enemigo,velEnviroment)
        jugador.position.x=velEnviroment
        
    }
}