// ? This Is My Code
$("input.otp").each(function (index) {
  $(this).attr("data-position", index);
});

$("input.otp:first").focus();

$(document).on("keyup", "input.otp", function () {
  const position = parseInt($(this).attr("data-position"));

  if ($(this).val()) {
    $(`input.otp[data-position='${position + 1}']`).focus();
  } else {
    $(`input.otp[data-position='${position - 1}']`).focus();
  }
});

$(document).on("input", "input.otp", function () {
  $(this).val(
    $(this)
      .val()
      .replace(/[^0-9]/g, "")
  );
});

$(document).on("click", ".resend", function () {
  countdown({ $container: $(".resend"), time: 10 });
});

// *---------------------------------------------------*
// *---------------------------------------------------*
// *-------------------- END --------------------------*
// *---------------------------------------------------*
// *---------------------------------------------------*

// ? This Block Of Code Came From Codepen

// let digitValidate = function (ele) {
//   console.log(ele.value);
//   ele.value = ele.value.replace(/[^0-9]/g, "");
// };

// let tabChange = function (val) {
//   let ele = document.querySelectorAll("input");
//   if (ele[val - 1].value != "") {
//     ele[val].focus();
//   } else if (ele[val - 1].value == "") {
//     ele[val - 2].focus();
//   }
// };

// *---------------------------------------------------*
// *---------------------------------------------------*
// *-------------------- END --------------------------*
// *---------------------------------------------------*
// *---------------------------------------------------*
