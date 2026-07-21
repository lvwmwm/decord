// Module ID: 254
// Function ID: 3318
// Name: setStyleAttributePreprocessor
// Dependencies: []

// Module 254 (setStyleAttributePreprocessor)
let roundToNearestPixelResult = require(dependencyMap[0]).default.roundToNearestPixel(0.4);
if (0 === roundToNearestPixelResult) {
  roundToNearestPixelResult = 1 / require(dependencyMap[0]).default.get();
  const _default2 = require(dependencyMap[0]).default;
}
let obj = { "Bool(true)": "center", "Bool(true)": null, "Bool(true)": 4, "Bool(true)": 4, "Bool(true)": "rgba(0, 0, 0, 0.75)" };
obj = { hairlineWidth: roundToNearestPixelResult };
obj.absoluteFill = obj;
obj.absoluteFillObject = obj;
obj.compose = importDefault(dependencyMap[1]);
obj.flatten = importDefault(dependencyMap[2]);
obj.setStyleAttributePreprocessor = function setStyleAttributePreprocessor(arg0, process) {
  if (true === require(dependencyMap[3]).default[arg0]) {
    let obj = { process };
    let merged = obj;
  } else if ("object" !== typeof require(dependencyMap[3]).default[arg0]) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.error("" + arg0 + " is not a valid style attribute");
  } else {
    const _Object = Object;
    obj = { process };
    merged = Object.assign({}, require(dependencyMap[3]).default[arg0], obj);
  }
  require(dependencyMap[3]).default[arg0] = merged;
};
obj.create = function create(arg0) {
  return arg0;
};

export default obj;
