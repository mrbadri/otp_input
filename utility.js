function countdown({ $container, time }) {
  const $beforContainer = $container.html();
  let minutes = 0,
    seconds = 0;

  $container.prop("disabled", true);

  let countdown = setInterval(() => {
    minutes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    $container.html(`<span>${minutes}:${seconds}</span>`);

    if (time > 0) {
      --time;
    } else {
      time = time;
      clearInterval(countdown);
      $container.html($beforContainer).prop("disabled", false);
    }
  }, 1000);
}
