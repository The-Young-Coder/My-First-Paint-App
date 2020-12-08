var canvas =document.getElementById("Drawing_Book");
ctx=canvas.getContext("2d");
color = "black";
var width =1;
var mouse_event ="Empty";
var last_x_position;
var last_y_position;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
color = document.getElementById("Color").value;
width = document.getElementById("width_of_the_line").value;
mouse_event ="mousedown";
console.log("this_is_the_mouse_down_event"+mouse_event);
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
currentx = e.clientX - canvas.offsetLeft;
currenty = e.clientY - canvas.offsetTop;
console.log("mousemove"+currentx+","+currenty);
if (mouse_event == "mousedown"){
 console.log("in mousedownevent");
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=width;
 ctx.moveTo(last_x_position,last_y_position);
 console.log("last_position"+last_x_position+","+last_y_position);
 ctx.lineTo(currentx,currenty);
 ctx.stroke();
}
last_x_position = currentx;
last_y_position = currenty;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
mouse_event ="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
mouse_event ="mouseleave";
}

function Circle(mousex,mousey){
 ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =2;
ctx.arc(mousex,mousey,40,0,2*Math.PI);
ctx.stroke();
}

function Clear_Area(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}

