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
document.addEventListener('click', function (event) {
    target = event.target;
    devParent = target.closest(".dev");
    console.log(devParent.className);
    console.log(devParent);
    // console.log(event.target);

}, false);