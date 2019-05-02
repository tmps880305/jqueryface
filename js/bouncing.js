//bouncing functions
function up(id) {
    // console.log("UP")
    $(id).animate({top: "-10px"});
}

function down(id) {
    // console.log("DOWN")
    $(id).animate({top: "0px"},up(id));
}
