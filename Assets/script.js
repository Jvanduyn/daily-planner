var timeDisplayEl = $('#currentDay');
var past = $('.past');
var present = $('.present');
var future = $('.future');
var tableDiv = document.querySelectorAll("div");
var saveButton = document.querySelectorAll("button");

$(function () {
  setTimeState();
  setInterval(displayTime, 1000);
});

//displaying the time at the top of the page
var displayTime = function () {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

//this is how we are able to determine what time state the block of hour
//is compared to the current time
var setTimeState = function () {
  for (let i = 0; i < tableDiv.length; i++) {
    if (dayjs().hour() == tableDiv[i].id) {
      tableDiv[i].classList.add('present');
    } else if (dayjs().hour() < tableDiv[i].id) {
      tableDiv[i].classList.add('future');
    } else {
      tableDiv[i].classList.add('past');
    }
  }
}

//this is how we are logging the local storage in each time block
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, text);
  })
});

//this is how we are able to get the data out of local storage for each time block
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))