var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 210;
background_image = "racing track.png";
car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 300;
canvas_image = "canvasimage.jpg";
function add(){
    backgound_imgTag = new Image();
    backgound_imgTag.onload = uploadbackgroundimage;
    backgound_imgTag.src = canvas_image;
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1image;
    car1_imgTag.src = car1_image;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2image;
    car2_imgTag.src = car2_image;
}
function uploadbackgroundimage(){
    ctx.drawImage(backgound_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1image(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2image(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    if(keypressed == "38"){
        car1_up();
        console.log("up arrow key pressed");
    }
    keypressed = e.keyCode;
    if(keypressed == "40"){
        car1_down();
        console.log("down arrow key pressed");
    }
    keypressed = e.keyCode;
    if(keypressed == "37"){
        car1_left();
        console.log("left arrow key pressed");
    }
    keypressed = e.keyCode;
    if(keypressed == "39"){
        car1_right();
        console.log("right arrow key pressed");
    }

    keypressed = e.keyCode;
    if(keypressed == "87"){
        car2_up();
        console.log("w key is pressed");
    }
    keypressed = e.keyCode;
    if(keypressed == "83"){
        car2_down();
        console.log("s key is pressed");
    }
    keypressed = e.keyCode;
    if(keypressed == "65"){
        car2_left();
        console.log("a  key is pressed");
    }
    keypressed = e.keyCode;
    if(keypressed == "68"){
        car2_right();
        console.log("d key is pressed");
    }
    if(car1_x > 700){
        console.log("Car1 Won!");
        document.getElementById("game_status").innerHTML="Car1 Won!";
        document.getElementById("game_status").style.color="yellow";
   }
    if(car2_x > 700){
    console.log("Car2 Won!");
    document.getElementById("game_status").innerHTML="Car2 Won!";
    document.getElementById("game_status").style.color="yellow";
    }
}
function car1_up(){
    if(car1_y >= 0){
        car1_y = car1_y-10;
        uploadbackgroundimage();
        uploadcar1image();
        uploadcar2image();
           
    }
}
function car1_down(){
    if(car1_y <= 500){
        car1_y = car1_y+10;
        uploadbackgroundimage();
        uploadcar1image();
        uploadcar2image();
    }
}
function car1_left(){
    if(car1_x >= 0){
        car1_x = car1_x-10;
        uploadbackgroundimage();
        uploadcar1image();
        uploadcar2image();
    }
}
function car1_right(){
    if(car1_x<= 700){
        car1_x = car1_x+10;
        uploadbackgroundimage();
        uploadcar1image();
        uploadcar2image();
    }
}
function car2_up(){
    if(car2_y >= 0){
        car2_y = car2_y-10;
        uploadbackgroundimage();
        uploadcar1image();
        uploadcar2image();
    }
}
function car2_down(){
    if(car2_y <= 500){
        car2_y = car2_y+10;
        uploadbackgroundimage();
        uploadcar1image();
        uploadcar2image();
    }
}
function car2_left(){
    if(car2_x >= 0){
        car2_x = car2_x-10;
        uploadbackgroundimage();
        uploadcar1image();
        uploadcar2image();
    }
}
function car2_right(){
    if(car2_x <= 700){
        car2_x = car2_x+10;
        uploadbackgroundimage();
        uploadcar1image();
        uploadcar2image();
    }
}