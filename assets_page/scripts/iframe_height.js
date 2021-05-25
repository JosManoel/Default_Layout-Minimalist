window.onload = function(){
    parent.document.getElementById("iframe").height = document.getElementById("iframePage").scrollHeight;
    
    console.log(document.getElementById("iframePage").scrollHeight)
    console.log("reajuste de height do iframe")
 }