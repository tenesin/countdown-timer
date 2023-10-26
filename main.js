(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let nextYear = yyyy + 1;
    let dayMonth = "01/01";
    let birthday = dayMonth + "/" + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    
    if (today > birthday) {
      birthday = dayMonth + "/" + nextYear;
    }
    
    console.log("Today: " + today);
    console.log("Birthday: " + birthday);
    

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 0);
})();
