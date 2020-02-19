var width=document.getElementById("width");
var height=document.getElementById("height");
var butt=document.getElementById("butt")
var zhouchang=document.getElementById("zhouchang");
var mianji=document.getElementById("mianji");
butt.onclick=function(){
/**button event */
  //get value
  var w=width.value;
  var h=height.value;
  //calculate
  var z=(w*2+h*2).toFixed(2);
  var m=(w*h).toFixed(2);
  //output 
  zhouchang.value=z;
  mianji.value=m;
}