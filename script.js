(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let christmas = "Dec 25, 2022 00:00:00",
    countDown = new Date(christmas).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
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
        let title = document.getElementById("title"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        title.innerText = "Merry Christmas!";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
    }, 0);
})();
