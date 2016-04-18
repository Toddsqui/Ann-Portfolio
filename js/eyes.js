$(function () {
  var $eyeBackground = $("<div>", { "class": "eye-background" })
  $eyeBackground.append($("<div>", { "class": "eye-dot" }));

  var imgCoordinates = $(".main-content img[src='mainpic.png']").offset();

  var $leftEye = $eyeBackground.clone();
  var $rightEye = $eyeBackground.clone();

  $leftEye.css({
    top: imgCoordinates.top + 6,
    left: imgCoordinates.left + 10
  });

  $rightEye.css({
    top: imgCoordinates.top + 6,
    left: imgCoordinates.left + 20
  });

  $("body").append($leftEye, $rightEye);

  // TODO
  // - position absolute for the eye (CSS)
  //  - make themmove

  $(window).on("mousemove", function (e) {
    console.log(e.pageX, e.pageY);
  })
});
