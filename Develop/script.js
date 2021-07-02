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
// ------------------------------------------------------------------------------------

// ---------------------- Variables for selecting TextBoxes -------------------------------
var eventNineAM = $( '#9amEvent' )
var eventTenAM = $( '#10amEvent')
var eventElevenAM = $( '#11amEvent')
var eventTwelvePM = $( '#12pmEvent')
var eventOnePM = $( '#1pmEvent')
var eventTwoPM = $( '#2pmEvent')
var eventThreePM = $( '#3pmEvent')
var eventFourPM = $( '#4pmEvent')
var eventFivePM = $( '#5pmEvent')

// ----------------------------------------------------------------------------------------

// -------------------------- event listeners for textboxes------------------------------

// 9AM
var savedNineEvent = localStorage.getItem('eventNineAM')
eventNineAM.val(localStorage.getItem('eventNineAM'))
var buttonNineAM = $( '#buttonNineAM' )
console.log(eventNineAM)

$( '#buttonNineAM' ).click( function() {
    console.log(localStorage)
    
    var inputvalue = eventNineAM.val()

    localStorage.setItem('eventNineAM', inputvalue)
});

// 10AM
var savedTenEvent = localStorage.getItem('eventTenAM')
eventTenAM.val(localStorage.getItem('eventTenAM'))
var buttonTenAM = $( '#buttonTenAM' )
console.log(eventTenAM)

$( '#buttonTenAM' ).click( function() {
    console.log(localStorage)
    
    var inputvalueTen = eventTenAM.val()

    localStorage.setItem('eventTenAM', inputvalueTen)
});

// 11AM
var savedElevenEvent = localStorage.getItem('eventElevenAM')
eventElevenAM.val(localStorage.getItem('eventElevenAM'))
var buttonElevenAM = $( '#buttonElevenAM' )
console.log(eventElevenAM)

$( '#buttonElevenAM' ).click( function() {
    console.log(localStorage)
    
    var inputvalueEleven = eventElevenAM.val()

    localStorage.setItem('eventElevenAM', inputvalueEleven)
});

// 12PM 
var savedTwelveEvent = localStorage.getItem('eventTwelvePM')
eventTwelvePM.val(localStorage.getItem('eventTwelvePM'))
var buttonTwelvePM = $( '#buttonTwelvePM' )
console.log(eventTwelvePM)

$( '#buttonTwelvePM' ).click( function() {
    console.log(localStorage)
    
    var inputvalueTwelve = eventTwelvePM.val()

    localStorage.setItem('eventTwelvePM', inputvalueTwelve)
});

// 1PM
var savedOneEvent = localStorage.getItem('eventOnePM')
eventOnePM.val(localStorage.getItem('eventOnePM'))
var buttonOnePM = $( '#buttonOnePM' )
console.log(eventOnePM)

$( '#buttonOnePM' ).click( function() {
    console.log(localStorage)
    
    var inputvalueOne = eventOnePM.val()

    localStorage.setItem('eventOnePM', inputvalueOne)
});

// 2PM
var savedTwoEvent = localStorage.getItem('eventTwoPM')
eventTwoPM.val(localStorage.getItem('eventTwoPM'))
var buttonTwoPM = $( '#buttonTwoPM' )
console.log(eventTwoPM)

$( '#buttonTwoPM' ).click( function() {
    console.log(localStorage)
    
    var inputvalueTwo = eventTwoPM.val()

    localStorage.setItem('eventTwoPM', inputvalueTwo)
});

// 3PM
var savedThreeEvent = localStorage.getItem('eventThreePM')
eventThreePM.val(localStorage.getItem('eventThreePM'))
var buttonThreePM = $( '#buttonThreePM' )
console.log(eventThreePM)

$( '#buttonThreePM' ).click( function() {
    console.log(localStorage)
    
    var inputvalueThree = eventThreePM.val()

    localStorage.setItem('eventThreePM', inputvalueThree)
});

// 4PM
var savedFourEvent = localStorage.getItem('eventFourPM')
eventFourPM.val(localStorage.getItem('eventFourPM'))
var buttonFourPM = $( '#buttonFourPM' )
console.log(eventFourPM)

$( '#buttonFourPM' ).click( function() {
    console.log(localStorage)
    
    var inputvalueFour = eventFourPM.val()

    localStorage.setItem('eventFourPM', inputvalueFour)
});

// 5PM
var savedFiveEvent = localStorage.getItem('eventFivePM')
eventFivePM.val(localStorage.getItem('eventFivePM'))
var buttonFivePM = $( '#buttonFivePM' )
console.log(eventFivePM)

$( '#buttonFivePM' ).click( function() {
    console.log(localStorage)
    
    var inputvalueFive = eventFivePM.val()

    localStorage.setItem('eventFivePM', inputvalueFive)
});

// ----------------------------- END OF EVENT LISTENERS ---------------------------------------

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