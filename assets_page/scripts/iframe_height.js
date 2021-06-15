window.onload = function(){
    setTimeout(calcIframeHeight(),500);
}

window.onclick = function(){
    calcIframeHeight();
}

function calcIframeHeight(){
    let iframe = document.getElementById("iframePage").scrollHeight;
    let parentIframe = parent.document.getElementById("iframe");

    parentIframe.height = iframe;
}
