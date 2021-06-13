window.onload = function(){
    firstLoadIframe = calcIframeHeight();
    setTimeout(resizeIframe(),5000);
}


window.onclick = function(){
    resizeIframe();
}


function calcIframeHeight(){
    return document.getElementById("iframePage").scrollHeight;
}


function resizeIframe(){
    var iframeHeight = calcIframeHeight();
    let parentHeight = parent.document.getElementById("iframe");
    
    if(parentHeight.height != iframeHeight){

        if( parentHeight.height == firstLoadIframe){
            parentHeight.height = iframeHeight;
        }else{
            parentHeight.height = firstLoadIframe;
        }
        
        console.log("tamanho inicial: " + firstLoadIframe)
        console.log("tamanho da tela: " + parentHeight.height)
        console.log("tamanho do iframe: " + iframeHeight)
    }
 }

// O Bug de resize do iframe acontece pq no teste a conexão nao é https,onde o chrome nao carrega completamente o iframe, diferente do firefox e do opera. por isso funciona neles e no chrome nao.

//https://stackoverflow.com/questions/45117519/iframes-not-loading-on-mobile-or-tablet