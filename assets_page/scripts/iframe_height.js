window.onload = function(){calcIframeHeight();}

window.onclick = function(){calcIframeHeight();}

function calcIframeHeight(){
    parent.document.getElementById("iframe").setAttribute('height',getIframeHeight());

    console.log(getIframeHeight())
}

function getIframeHeight(){
    return document.getElementById("iframePage").scrollHeight;
}