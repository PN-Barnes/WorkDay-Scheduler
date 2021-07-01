var currentDay = moment().format('MMMM Do YYYY, h:mm A');
console.log(currentDay)
var HeaderTimeEl = $('#currentDay');
var timeBlockContainerEl = $('.container')


HeaderTimeEl.text(currentDay);