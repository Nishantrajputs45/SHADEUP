function randompickerbtn() {}

function hexFindbtn() {}

function RGBFindbtn() {}

function RangeSelector() {
  const RrInput = document.querySelector("#RrInput").value;
  const GrInput = document.querySelector("#GrInput").value;
  const BrInput = document.querySelector("#BrInput").value;
  const range_color_box = document.querySelector("#range-color-box");

  range_color_box.innerText =
    "RGB" + "(" + RrInput + "," + GrInput + "," + BrInput + ")";
}

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

function rgbConvbtn() {
  const RCInput = Number(document.querySelector("#RCInput").value);
  const GCInput = Number(document.querySelector("#GCInput").value);
  const BCInput = Number(document.querySelector("#BCInput").value);
  const rgbCOut = document.querySelector("#rgbCOut");

  rgbCOut.innerText = toHex(RCInput) + toHex(GCInput) + toHex(BCInput);
}

function toHex(rgbCVal) {
  let hexValue = rgbCVal.toString(16);
  return hexValue;
}
