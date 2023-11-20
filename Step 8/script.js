$(document).ready(function () {
    $(document).on("mousemove", function (event) {
        // get mouse positions
        let x = event.pageX;
        let y = event.pageY;

        // this function maps one range of numbers to a different range of numbers 
        // it will scale the range of the axis to the 0 to window width of the window
        function scale(number, inMin, inMax, outMin, outMax) {
            return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        }

        // make variables to store the scaled x and y values
        let xScale = scale(x, 0, $(window).width(), 1, 20);
        let yScale = scale(y, 0, $(window).height(), -10, 10)

        console.log(xScale);
        console.log(yScale)

        // updates the font's wght axis with mouse x position &&
        // updates the font's wdth axis with the mouse y position
        $('.content').css("font-variation-settings", `"wght" ${xScale}, "slnt" ${yScale}`);
    });
})