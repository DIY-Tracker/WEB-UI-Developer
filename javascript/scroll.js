document.addEventListener('click', function (event) {
    cardA = event.target.closest(".cardSideA");
    if(cardA == null){ return; }
    if(cardA.className.includes(" flip flipBack ")){
        cardA.className = cardA.className.replace(" flip flipBack ", "");
        console.log("remove");
    }else if(cardA.className.includes(" flip ")){
        cardA.className = cardA.className.replace(" flip ", " flip flipBack ");
        setTimeout(function(){
            cardA.className = cardA.className.replace(" flip flipBack ", "");
        }, .4*(1000));
    }else{ 
        cardA.className += " flip "; 
    }
}, false);