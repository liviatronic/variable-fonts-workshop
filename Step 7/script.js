$(document).ready(function () {

    // the weight axis variable and width axis variable need to be global so that they can be passed to both functions
    // set the initial value to the lowest number in the range for each axis
    let wght = 1;
    let slnt = 0;

    // this function looks for input on the #wght slider
    $(document).on("input", `#wght`, function () {

        // gets the wght slider value
        wght = $(this).val();
        slnt = slnt

        // updates the text showing next to the slider
        $('.slider-wrap.wght .val').text(wght);

        // updates the font-variation-settings CSS with the slider value
        $('.content').css("font-variation-settings", `"wght" ${wght}, "slnt" ${slnt}`);
    });

    // this function looks for input on the #slnt slider
    $(document).on("input", `#slnt`, function () {

        // gets the slnt slider value
        slnt = $(this).val();
        wght = wght

        // updates the text showing next to the slider
        $('.slider-wrap.slnt .val').text(slnt);

        // updates the font-variation-settings CSS with the slider value
        $('.content').css("font-variation-settings", `"wght" ${wght}, "slnt" ${slnt}`);
    });
})