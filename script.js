// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var rootEl = $('#root'); 
var dateEl = $('#date'); 

 //saveBtn click listener for user input and time stamp
 $(".fas fa-save").on("click", function () {
  //get nearby values.
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  //set items in local storage.
  localStorage.setItem(time, text);
  })

  var dt = dayjs();

  $('#date-time').text(dt.format('dddd, MMMM D YYYY, h:mm'));


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


