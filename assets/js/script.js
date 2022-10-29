var today = moment();
$("#1a").text(today.format("MMM Do, YYYY"));

var dayWeek = today.format("[Today is] dddd");
$("#2a").text(dayWeek);

var reformatDate = moment("11/3/20", "MM-DD-YY").format(
  "dddd, MMMM Do YYYY, h:mm:ss a"
);
$("#3a").text(reformatDate);

var weekNum = today.format("w");
var takeOut;

if (weekNum % 2) {
  takeOut = true;
} else {
  takeOut = false;
}

$("#4a").text(takeOut + ", because it's currently week " + weekNum);
