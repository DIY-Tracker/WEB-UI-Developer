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