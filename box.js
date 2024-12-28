// selecting counts

function textcount(event){
    var counttext= document.querySelector(".textbox").value;
   var countdisplay=document.getElementById("textcount")
   var error=document.getElementById("errordisplay")
console.log(counttext.length)
if(counttext.length>=150){
    error.style.display="block";
    countdisplay.textContent=counttext.length +"/150"
}
else{
  
    error.style.display="none";
    countdisplay.textContent=counttext.length +"/150"
}
}