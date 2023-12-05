var montañas=["/imagenes/mountains01.png","/imagenes/mountains02.png","/imagenes/mountains03.png","/imagenes/mountains04.png"]
var nubes=["/imagenes/cloud01.png","/imagenes/cloud02.png"]
var blokes=["/imagenes/blocks001.png","/imagenes/blocks002.png","/imagenes/blocks003.png"]
var monedas=["imagenes/coin01.png","imagenes/coin02.png","imagenes/coin03.png"]
var tubo=["/imagenes/tube.png"]
var plataforma=["/imagenes/platform.png"]
var enemigos=["/imagenes/enemyMushroom01.png","/imagenes/enemyMushroom02.png"]

var spriteNumber={
    montaña:6,
    nube:10,
    ladrillo:5,
    tubo:5,
    moneda:10,
    enemigo:5,
}

function setSprites() {
    setSpritesGroups()
    loadStaticObjects(montaña,montañas,spriteNumber.montaña,1.5,gameConfig.screenX,gameConfig.screenY-35,gameConfig.screenY-35)
    loadStaticObjects(nube,nubes,spriteNumber.nube,0,gameConfig.screenX,20,gameConfig.screenY*0.5)
    loadStaticObjects(tubo,tubo,spriteNumber.tubo,50,gameConfig.screenX,gameConfig.screenY-20,gameConfig.screenY+10)
    loadStaticObjects(ladrillo,blokes,spriteNumber.ladrillo,gameConfig.screenX*0.1,gameConfig.screenX*0.9,gameConfig.screenY*0.1,gameConfig.screenY*0.7)
    loadAnimatedObjects(moneda,monedas,'shine',spriteNumber.moneda,"get",false,0,gameConfig.screenX,gameConfig.screenY*0.35,gameConfig.screenY*0.75)
    loadAnimatedObjects(enemigo,enemigos,'move',spriteNumber.enemigo,"live",true,gameConfig.screenX*0.5,gameConfig.screenX,gameConfig.screenY*0.35,gameConfig.screenY*0.75)
    loadPlatforms()
}

function setSpritesGroups() {
    ladrillo=new Group()
    enemigo=new Group()
    nube=new Group()
    montaña=new Group()
    tubo=new Group()
    moneda=new Group()
    ladrillo=new Group()
}

function loadStaticObjects(grupo,arreglo_imagen,cantidad,randomXinicio,randomXfinal,randomYinicio,randomYfinal){
    for(var i=0; i<cantidad; i++){
    var num_aleatorio=floor(random()*10%arreglo_imagem.length)
    var img= loadImage(arreglo_imagen[num_aleatorio])
    grupo[i]=createSprite(random(randomXinicio,randomXfinal),random(randomYinicio,randomYfinal))
    grupo[i]=addImage(img)
    }
}

function loadAnimatedObjects(grupo,arreglo_imagen,animacion,cantidad,estado,valor,randomXinicio,randomXfinal,randomYinicio,randomYfinal){
    for(var i=0; i<cantidad;i++){
    grupo[i]=createSprite(random(randomXinicio,randomXfinal),random(randomYinicio,randomYfinal))
    group[i]=addAnimation(animation,arreglo_imagen[0],arreglo_imagen[1]);
    grupo[i].scale=1.5
    grupo[i][estado]= valor
    }
}

function loadPlatforms() {
    img=loadImage("imagenes/platform.png")
    for ( i=0; i<70; i++){
        num_aleatorio=random()
        if (num_aleatorio>0.2) {
            platforms[i]=createSprite(gameConfig.screenX-i*19,gameConfig.screenY-10)
        }
        else{
            platforms[i]=createSprite(random(gameConfig.screenX),gameConfig.screenY-10)
        }
        platforms[i].addImage(img)
    }
}

function marioanimation() {
    mario=createSprite(gameConfig.startingPointX,gameConfig.startingPointY,gameConfig.startingPoint,0.30)
    mario.addAnimation("stand","imagenes/mario06.png")
    mario.addAnimation("move","imagenes/mario01.png","imagenes/mario02.png","imagenes/mario03.png")
    mario.addAnimation("jump","imagenes/mario05.png")
    mario.addAnimation("crouch","imagenes/mario18.png")
    mario.addAnimation("dead","imagenes/mario24.png")
}
