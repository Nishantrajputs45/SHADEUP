function randompickerbtn() {}

function hexFindbtn() {}

function RGBFindbtn() {}

function RangeSelector() {}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  var aRgbHex = this.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return aRgb;
};

function hexConvbtn() {
  const hexCInp = document.querySelector("#hexCInp");
  const hexCOut = document.querySelector("#hexCOut");

  const rgb = hexCInp.value.convertToRGB();

  hexCOut.innerText = rgb;
}

function rgbConvbtn() {}
