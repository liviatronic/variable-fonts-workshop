$(document).ready(function () {

    // mouse move function - every time you move your mouse this function triggers
    $(document).on("mousemove", function (event) {
        // get mouse positions
        let x = event.pageX;
        let y = event.pageY;

        // updates the font-variation-settings CSS with the mouse X value
        // the variable font axis only goes to up to 20. 
        // if the window size is more or less than 20px wide, 
        // this value will either stop at 20 or never reach 20
        $('.content').css("font-variation-settings", `"wght" ${x}`);
    });

});