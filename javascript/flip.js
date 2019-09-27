let cards = document.getElementsByClassName("dev");
console.log(cards);
cards[0].onclick = clicked;
function clicked(){
    console.log("Clicked", this);
    console.log(this.classList);
    console.log(this.classList.toggle("dev-active"));
    console.log(this);
}
let allUnflipped = true;