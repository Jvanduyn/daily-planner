var timeDisplayEl = $('#currentDay');
var past = $('.past');
var present = $('.present');
var future = $('.future');
var tableDiv = document.querySelectorAll("div");
var saveButton = document.querySelectorAll("button");

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  setTimeState();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  setInterval(displayTime, 1000);
});

var displayTime = function () {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

var setTimeState = function () {
  for (let i = 0; i < tableDiv.length; i++) {
    // console.log(dayjs().hour())
    // console.log(tableDiv[i].id);
    if (dayjs().hour() == tableDiv[i].id) {
      tableDiv[i].classList.add('present');
    } else if (dayjs().hour() < tableDiv[i].id) {
      tableDiv[i].classList.add('future');
    } else {
      tableDiv[i].classList.add('past');
    }
  }
}

renderLastRegistered();

function renderLastRegistered() {
  var message = localStorage.getItem("fa-save");

  message.textContent = message;
}

saveButton.forEach(box => {
  box.addEventListener("click", function (event) {
    event.preventDefault();

    var message = document.querySelector("fa-save");

    localStorage.setItem("fa-save", message);
    renderLastRegistered();
  });
});