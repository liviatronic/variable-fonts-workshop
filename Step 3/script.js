$(document).ready(function () {

    // this fuction looks for input on the #wght slider
    $(document).on("input", `#wght`, function () {

        // gets the slider value and stores it as a variable called variableAxis
        let variableAxis = $(this).val();

        // updates the text showing next to the slider
        $('.slider-wrap .val').text(variableAxis);

        // updates font-variation-settings in the CSS file with the slider value
        $('.content').css("font-variation-settings", `"wght" ${variableAxis}`);
    });
})