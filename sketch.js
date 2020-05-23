var x,y;
var drawing=[];
var button ;
var database;
function setup (){
    database=firebase.database();
    createCanvas(displayWidth,displayHeight);
clear=createButton("clearCanvas");
button = createButton("clear");
}
function draw(){
    background("white");
    for(var i= 0;i<drawing.length;i++){

       
        stroke('purple'); 
strokeWeight(10); 
point(drawing[i].x,drawing[i].y);
    }

    button.mousePressed(() => {
   drawing=[];
   var dbRef=database.ref("drawing");
   dbRef.remove();
    });
   


    drawSprites();
}


function mouseDragged(){
    var point ={
        x:mouseX,
        y:mouseY
    }
    drawing.push(point);
    var dbRef=database.ref("drawing")
dbRef.set({ "d":drawing });
}