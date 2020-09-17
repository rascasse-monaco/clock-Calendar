var calendar = function() {
    var date = new Date();
    var yy = toDoubleDigits(date.getFullYear());
    var mm = toDoubleDigits(date.getMonth() + 1);
    var dd = toDoubleDigits(date.getDate());
    var element = document.getElementById("calendar");
    var dayText = [ "Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat." ];
  
    element.innerHTML = yy + '. ' + mm + '. ' + dd + '. ' + dayText[date.getDay()];
  };

  var toDoubleDigits = function(num) {
    num += "";
    if (num.length === 1) {
      num = "0" + num;
    }
   return num;
  };
 
  setInterval(calendar, 1000);