var timeClock = function() {
    var date = new Date();
    var hh = toDoubleDigits(date.getHours());
    var mi = toDoubleDigits(date.getMinutes());
    var ss = toDoubleDigits(date.getSeconds());
    var element = document.getElementById("date");
    element.innerHTML = hh + ':' + mi + ':' + ss;
  };
  var toDoubleDigits = function(num) {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
   return num;
  };
  setInterval(timeClock, 1000);