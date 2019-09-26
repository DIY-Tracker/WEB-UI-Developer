document.addEventListener('click', function (event) {
    frontFace = event.target.closest(".dev");
    if(frontFace == null){ return; }
    clearInterval(scroll);
    if(frontFace.className.includes(" flip flipBack ")){
        frontFace.className = frontFace.className.replace(" flip flipBack ", "");
    }else if(frontFace.className.includes(" flip ")){
        frontFace.className = frontFace.className.replace(" flip ", " flip flipBack ");
        setTimeout(function(){
            frontFace.className = frontFace.className.replace(" flip flipBack ", "");
            scroll = setInterval(scrollB, 20);
        }, .4*(1000));
    }else{ 
        frontFace.className += " flip "; 
    }
}, false);

var myElement = document.getElementById("devs");
let scrollAmount = 0;
let scrollAm = 2;
var scroll = setInterval(scrollB, 20);
function scrollB(){
    if(scrollAmount != myElement.scrollLeft){
        scrollAmount = myElement.scrollLeft;
    }else if(scrollAmount == myElement.scrollLeft){
        scrollAm *= -1;
    }
    myElement.scrollBy(scrollAm,0);
}