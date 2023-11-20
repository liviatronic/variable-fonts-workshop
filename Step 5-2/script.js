$(document).ready(function () {

    // mouse move function - every time you move your mouse this function triggers
    $(document).on("mousemove", function (event) {
        // get mouse positions
        let x = event.pageX;
        let y = event.pageY;

        // this function maps one range of numbers to a different range of numbers 
        // it will scale the range of the axis to the 0 to window width of the window
        function scale(number, inMin, inMax, outMin, outMax) {
            return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        }

        // the minimum and maximum values for the font axis go here
        let xScale = scale(x, 0, $(window).width(), 1, 20);

        console.log(xScale);

        // updates the font-variation-settings CSS with the remapped mouse X value
        $('.content').css("font-variation-settings", `"wght" ${xScale}`);
    });

});