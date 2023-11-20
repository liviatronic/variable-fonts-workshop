$(document).ready(function () {

    // the weight axis variable and width axis variable need to be global so that they can be passed to both functions
    // set the initial value to the lowest number in the range for each axis
    let wght = 1;
    let slnt = 0;
    let vvlm = 0;
    let nsss = 0;

    // this function looks for input on the #wght slider
    $(document).on("input", `#wght`, function () {

        // gets the wght slider value
        wght = $(this).val();
        slnt = slnt
        vvlm = vvlm
        nsss = nsss

        // updates the text showing next to the slider
        $('.slider-wrap.wght .val').text(wght);

        // updates the font-variation-settings CSS with the slider value
        $('.content').css("font-variation-settings", `"wght" ${wght}, "slnt" ${slnt}, "VVLM" ${vvlm}, "NSSS" ${nsss}`);
    });

    // this function looks for input on the #slnt slider
    $(document).on("input", `#slnt`, function () {

        // gets the slnt slider value
        slnt = $(this).val();
        wght = wght
        vvlm = vvlm
        nsss = nsss

        // updates the text showing next to the slider
        $('.slider-wrap.slnt .val').text(slnt);

        // updates the font-variation-settings CSS with the slider value
        $('.content').css("font-variation-settings", `"wght" ${wght}, "slnt" ${slnt}, "VVLM" ${vvlm}, "NSSS" ${nsss}`);
    });

    // this function looks for input on the #vvlm slider
    $(document).on("input", `#vvlm`, function () {

        // gets the vvlm slider value
        vvlm = $(this).val();
        wght = wght
        slnt = slnt
        nsss = nsss

        // updates the text showing next to the slider
        $('.slider-wrap.slnt .val').text(vvlm);

        // updates the font-variation-settings CSS with the slider value
        $('.content').css("font-variation-settings", `"wght" ${wght}, "slnt" ${slnt}, "VVLM" ${vvlm}, "NSSS" ${nsss}`);
    });

    // this function looks for input on the #nsss slider
    $(document).on("input", `#nsss`, function () {

        // gets the nsss slider value
        nsss = $(this).val();
        wght = wght
        vvlm = vvlm
        slnt = slnt

        // updates the text showing next to the slider
        $('.slider-wrap.slnt .val').text(nsss);

        // updates the font-variation-settings CSS with the slider value
        $('.content').css("font-variation-settings", `"wght" ${wght}, "slnt" ${slnt}, "VVLM" ${vvlm}, "NSSS" ${nsss}`);
    });
})