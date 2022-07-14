function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}

$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $("#currentDay").css("text-decoration", "underline");
    for (let i = 9; i < 18; i++) {


        var row = $(`<div data-time=${i} id='${i}' class="row">`);


        var col1 = $('<div class="col-sm-2"> <p class="hour">' + amPm(i) + '</p>');


        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="event" placeholder="Add your event here..."></textarea>`);


        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)
