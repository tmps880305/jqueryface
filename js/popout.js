// pop the result screen
function popOut(myPopout) {
    var pop = document.getElementById(myPopout);

    // When the user clicks on the button, open the popout
    pop.style.display = "block";
    console.log("PPPPPPOP")

    setTimeout(function () {
        popOff('myPopout');
    }, 1500)

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == pop) {
            pop.style.display = "none";
        }
    }
}

// close the result screen
function popOff(myPopout) {
    var pop = document.getElementById(myPopout);
    pop.style.display = "none";
}
