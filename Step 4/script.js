$(document).ready(function () {

    // mouse move function - every time you move your mouse this function triggers
    $(document).on("mousemove", function (event) {
        // get mouse positions
        let x = event.pageX;
        let y = event.pageY;

        $('.xpos').text(x);
        $('.ypos').text(y);
    });

});