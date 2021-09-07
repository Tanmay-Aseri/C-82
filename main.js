var mouseEvent="empty";
var last_position_x, last_position_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="orange";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
     color=document.getElementById("color_line").value;
     width=document.getElementById("width_line").value;
     mouseEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
  current_position_of_mouse_x= e.client-canvas.offsetLeft;
  current_position_of_mouse_y= e.client-canvas.offsetTop;

  if(mouseEvent=="mousedown"){
      ctx.beginPath();
      ctx.strokeStlyle=color;
      ctx.lineWidth=width_of_line;
      console.log("Last position of x and y cordinates =");
      console.log("x="+last_position_x+"y="+last_position_y);
      ctx.moveTo(last_position_x,last_position_y);

      console.log("Current position of x and y cordinates =");
      console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
      ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
      ctx.stroke();
  }

  last_position_x=current_position_of_mouse_x;
  last_position_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
         mouseEvent="mouseup";

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
