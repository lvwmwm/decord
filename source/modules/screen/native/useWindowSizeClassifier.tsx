// Module ID: 4203
// Function ID: 4204
// Name: useWindowSizeClassifier
// Dependencies: [4204, 2]
// Exports: default, getWindowSizeClassifier

// Module 4203 (useWindowSizeClassifier)
let obj = { SMALL: 0, [0]: "SMALL", NORMAL: 1, [1]: "NORMAL", LARGE: 2, [2]: "LARGE", XLARGE: 3, [3]: "XLARGE" };
const result = require("set").fileFinishedImporting("modules/screen/native/useWindowSizeClassifier.tsx");

export default function useWindowSizeClassifier() {
  const width = importDefault(4204)().width;
  if (width <= 360) {
    let XLARGE = obj.SMALL;
  } else if (width <= 600) {
    XLARGE = obj.NORMAL;
  } else if (width <= 840) {
    XLARGE = obj.LARGE;
  } else {
    XLARGE = obj.XLARGE;
  }
  return XLARGE;
};
export const WindowSizeClassifier = obj;
export const getWindowSizeClassifier = function getWindowSizeClassifier() {
  const obj = require(4204) /* useBaseAppContainerDimensions */;
  const width = obj.getBaseAppContainerDimensions().width;
  if (width <= 360) {
    let XLARGE = obj.SMALL;
  } else if (width <= 600) {
    XLARGE = obj.NORMAL;
  } else if (width <= 840) {
    XLARGE = obj.LARGE;
  } else {
    XLARGE = obj.XLARGE;
  }
  return XLARGE;
};
