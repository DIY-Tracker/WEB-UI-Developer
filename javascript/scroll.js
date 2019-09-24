document.addEventListener('click', function (event) {
    frontFace = event.target.closest(".dev");
    if(frontFace == null){ return; }
    if(frontFace.className.includes(" flip flipBack ")){
        frontFace.className = frontFace.className.replace(" flip flipBack ", "");
        console.log("remove");
    }else if(frontFace.className.includes(" flip ")){
        frontFace.className = frontFace.className.replace(" flip ", " flip flipBack ");
        setTimeout(function(){
            frontFace.className = frontFace.className.replace(" flip flipBack ", "");
        }, .4*(1000));
    }else{ 
        frontFace.className += " flip "; 
    }
}, false);