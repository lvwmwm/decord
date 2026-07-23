// Module ID: 254
// Function ID: 3318
// Name: setStyleAttributePreprocessor
// Dependencies: [96, 255, 147, 73]

// Module 254 (setStyleAttributePreprocessor)
let roundToNearestPixelResult = require("PixelRatio").default.roundToNearestPixel(0.4);
if (0 === roundToNearestPixelResult) {
  roundToNearestPixelResult = 1 / require("PixelRatio").default.get();
  const _default2 = require("PixelRatio").default;
}
let obj = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 };
obj = { hairlineWidth: roundToNearestPixelResult };
obj.absoluteFill = obj;
obj.absoluteFillObject = obj;
obj.compose = require("composeStyles");
obj.flatten = require("flattenStyle");
obj.setStyleAttributePreprocessor = function setStyleAttributePreprocessor(arg0, process) {
  if (true === require(73).default[arg0]) {
    let obj = { process };
    let merged = obj;
  } else if ("object" !== typeof require(73).default[arg0]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.error("" + arg0 + " is not a valid style attribute");
  } else {
    const _Object = Object;
    obj = { process };
    merged = Object.assign({}, require(73).default[arg0], obj);
  }
  require(73).default[arg0] = merged;
};
obj.create = function create(arg0) {
  return arg0;
};

export default obj;
