var currentDay = moment().format('MMMM Do YYYY, h:mm A');
var hour = moment().format('H')
var currentHour = parseInt(hour)
console.log(currentDay)
console.log(currentHour)
var HeaderTimeEl = $('#currentDay');
HeaderTimeEl.text(currentDay);
console.log(localStorage)
var timeBlockContainerEl = $('.container')
var tableBody = $('#tableBody')
var tableRows = $('tr') // selects all table rows even head 

// ---------------- Select specific row blocks to add background color -
var nineAMrow = $('#nineAMrow')
var tenAMrow = $('#tenAMrow')
var elevenAMrow = $('#elevenAMrow')
var twelvePMrow = $('#twelvePMrow')
var onePMrow = $('#onePMrow')
var twoPMrow = $('#twoPMrow')
var threePMrow = $('#threePMrow')
var fourPMrow = $('#fourPMrow')
var fivePMrow = $('#fivePMrow')
// --------------------------------------------------------------------


var savedNineEvent = localStorage.getItem('eventNineAM')
var eventNineAM = $( '#9amEvent' )
var buttonNineAM = $( '#buttonNineAM' )
console.log(eventNineAM)

$( '#buttonNineAM' ).click( function() {
    console.log(localStorage)
    var inputValue = eventNine
    console.log(eventNineAM.val())
    localStorage.setItem('eventNineAM', eventNineAM.val())
    eventNineAM = localStorage.getItem('eventNineAM')
});

// --------------------------------------------------------------------

// ------------------- created if else conditionals in order to change blocks to match current time event. --------------------------------//

if (currentHour === 9 ) {
    nineAMrow.addClass("p-3 mb-2 bg-danger text-white" )
} else if (currentHour > 9) {
    nineAMrow.addClass("p-3 mb-2 bg-secondary text-white")
} else {
    nineAMrow.addClass("p-3 mb-2 bg-success text-white")
}

if (currentHour === 10 ) {
    tenAMrow.addClass("p-3 mb-2 bg-danger text-white" )
} else if (currentHour > 10) {
    tenAMrow.addClass("p-3 mb-2 bg-secondary text-white")
} else {
    tenAMrow.addClass("p-3 mb-2 bg-success text-white")
}

if (currentHour === 11 ) {
    elevenAMrow.addClass("p-3 mb-2 bg-danger text-white" )
} else if (currentHour > 11) {
    elevenAMrow.addClass("p-3 mb-2 bg-secondary text-white")
} else {
    elevenAMrow.addClass("p-3 mb-2 bg-success text-white")
}

if (currentHour === 12 ) {
    twelvePMrow.addClass("p-3 mb-2 bg-danger text-white" )
} else if (currentHour > 12) {
    twelvePMrow.addClass("p-3 mb-2 bg-secondary text-white")
} else {
    twelvePMrow.addClass("p-3 mb-2 bg-success text-white")
}

if (currentHour === 13 ) {
    onePMrow.addClass("p-3 mb-2 bg-danger text-white" )
} else if (currentHour > 13) {
    onePMrow.addClass("p-3 mb-2 bg-secondary text-white")
} else {
    onePMrow.addClass("p-3 mb-2 bg-success text-white")
}

if (currentHour === 14 ) {
    twoPMrow.addClass("p-3 mb-2 bg-danger text-white" )
} else if (currentHour > 14) {
    twoPMrow.addClass("p-3 mb-2 bg-secondary text-white")
} else {
    twoPMrow.addClass("p-3 mb-2 bg-success text-white")
}

if (currentHour === 15 ) {
    threePMrow.addClass("p-3 mb-2 bg-danger text-white" )
} else if (currentHour > 15) {
    threePMrow.addClass("p-3 mb-2 bg-secondary text-white")
} else {
    threePMrow.addClass("p-3 mb-2 bg-success text-white")
}

if (currentHour === 16 ) {
    fourPMrow.addClass("p-3 mb-2 bg-danger text-white" )
} else if (currentHour > 16) {
    fourPMrow.addClass("p-3 mb-2 bg-secondary text-white")
} else {
    fourPMrow.addClass("p-3 mb-2 bg-success text-white")
}

if (currentHour === 17 ) {
    fivePMrow.addClass("p-3 mb-2 bg-danger text-white" )
} else if (currentHour > 17) {
    fivePMrow.addClass("p-3 mb-2 bg-secondary text-white")
} else {
    fivePMrow.addClass("p-3 mb-2 bg-success text-white")
}


// ------------------------------------------------------------------