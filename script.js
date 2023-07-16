// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var rootEl = $('#root'); 
var dateEl = $('#date'); 

 //saveBtn click listener for user input and time stamp
 $(".saveBtn").on("click", function () {
  //get nearby values.
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  //set items in local storage.
  localStorage.setItem(time, text);
  })

  var dt = dayjs();

  $('#date-time').text(dt.format('dddd, MMMM D YYYY'));


var slot = dayjs().hour()
// var nineAm = $("#hour-9")

function getTime() {

console.log(slot)

$('.time-block').each(function () {
  var blockHour = parseInt($(this).attr('id').split('-')[1]);

  // check if we've moved past this time
  if (blockHour < slot) {
    $(this).addClass('past');
  } else if (blockHour === slot) {
    $(this).removeClass('past');
    $(this).addClass('present');
  } else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});
}
  // if (slot == 9) { nineAm.className="present"
  // } else if (slot >9) { nineAm.className="future"}
  // else {
  //   nineAm.className="past"
  // }}
  // console.log(slot)
  getTime()

// $('#date-time').text(dt.format('dddd, MMMM D YYYY, h:mm:ss a'));
// var slot=dayjs().hour()
// var nineAm = $("#hour-9")
// function getTime() {
//   if (slot == 9) { nineAm.className="present"
//   } else if (slot >9) { nineAm.className="future"}
//   else {
//     nineAm.className="past"
//   }}
//   console.log(slot)
//   getTime()

//   $('#date-time').text(dt.format('dddd, MMMM D YYYY, h:mm:ss a'));
// var slot=dayjs().hour()
// var tenAm = $("#hour-10")
// function getTime() {
//   if (slot == 10) { nineAm.className="present"
//   } else if (slot >10) { nineAm.className="future"}
//   else {
//     tenAm.className="past"
//   }}
//   console.log(slot)
//   getTime()

//   $('#date-time').text(dt.format('dddd, MMMM D YYYY, h:mm:ss a'));
// var slot=dayjs().hour()
// var elevenAm = $("#hour-11")
// function getTime() {
//   if (slot == 11) { elevenAm.className="present"
//   } else if (slot >11) { elevenAm.className="future"}
//   else {
//     elevenAmAm.className="past"
//   }}
//   console.log(slot)
//   getTime()

//   $('#date-time').text(dt.format('dddd, MMMM D YYYY, h:mm:ss a'));
// var slot=dayjs().hour()
// var twelvePm = $("#hour-12")
// function getTime() {
//   if (slot == 12) { twelvePm.className="present"
//   } else if (slot >12) { twelvePm.className="future"}
//   else {
//     twelvePm.className="past"
//   }}
//   console.log(slot)
//   getTime()

//   $('#date-time').text(dt.format('dddd, MMMM D YYYY, h:mm:ss a'));
// var slot=dayjs().hour()
// var onePm = $("#hour-13")
// function getTime() {
//   if (slot == 13) { onePm.className="present"
//   } else if (slot >13) { onePm.className="future"}
//   else {
//     onePm.className="past"
//   }}
//   console.log(slot)
//   getTime()

//   $('#date-time').text(dt.format('dddd, MMMM D YYYY, h:mm:ss a'));
// var slot=dayjs().hour()
// var twoPm = $("#hour-14")
// function getTime() {
//   if (slot == 14) { twoPm.className="present"
//   } else if (slot >14) { twoPm.className="future"}
//   else {
//     twoPm.className="past"
//   }}
//   console.log(slot)
//   getTime()

//   $('#date-time').text(dt.format('dddd, MMMM D YYYY, h:mm:ss a'));
// var slot=dayjs().hour()
// var threePm = $("#hour-15")
// function getTime() {
//   if (slot == 15) { threePm.className="present"
//   } else if (slot >15) { threePm.className="future"}
//   else {
//     threePm.className="past"
//   }}
//   console.log(slot)
//   getTime()

//   $('#date-time').text(dt.format('dddd, MMMM D YYYY, h:mm:ss a'));
// var slot=dayjs().hour()
// var fourPm = $("#hour-16")
// function getTime() {
//   if (slot == 16) { fourPm.className="present"
//   } else if (slot >16) { fourPm.className="future"}
//   else {
//     fourPm.className="past"
//   }}
//   console.log(slot)
//   getTime()

//   $('#date-time').text(dt.format('dddd, MMMM D YYYY, h:mm:ss a'));
// var slot=dayjs().hour()
// var fivePm = $("#hour-17")
// function getTime() {
//   if (slot == 17) { fivePm.className="present"
//   } else if (slot >17) { fivePm.className="future"}
//   else {
//     fivePm.className="past"
//   }}
//   console.log(slot)
//   getTime()

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

