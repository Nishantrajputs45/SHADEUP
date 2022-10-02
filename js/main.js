function randompickerbtn() {}

function hexFindbtn() {
  const hexInput = document.querySelector("#hexInput");
  const color_box = document.querySelector("#color-box");

  color_box.style.backgroundColor = hexInput.value;
}

function RGBFindbtn() {
  const RInput = document.querySelector("#RInput").value;
  const GInput = document.querySelector("#GInput").value;
  const BInput = document.querySelector("#BInput").value;
  const rgb_color_box = document.querySelector("#rgb-color-box");

  rgb_color_box.style.backgroundColor =
    "rgb" + "(" + RInput + "," + GInput + "," + BInput + ")".toString();
}

function RangeSelector() {
  const RrInput = document.querySelector("#RrInput").value;
  const GrInput = document.querySelector("#GrInput").value;
  const BrInput = document.querySelector("#BrInput").value;
  const range_color_box = document.querySelector("#range-color-box");

  range_color_box.style.backgroundColor =
    "rgb" + "(" + RrInput + "," + GrInput + "," + BrInput + ")".toString();
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
