var devs = document.getElementById("devs");
let scrolledAmount = 0;
let scrollByAmount = 1;
var scroll = setInterval(
    function () {
        if (scrolledAmount != devs.scrollLeft) {
            scrolledAmount = devs.scrollLeft;
        } else if (scrolledAmount == devs.scrollLeft) {
            scrollByAmount *= -1;
        }
        devs.scrollBy(scrollByAmount, 0);
    }, 12);