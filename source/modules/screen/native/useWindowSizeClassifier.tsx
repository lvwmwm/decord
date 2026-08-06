// Module ID: 4139
// Function ID: 4140
// Name: useWindowSizeClassifier
// Dependencies: [4140, 2]
// Exports: default, getWindowSizeClassifier

// Module 4139 (useWindowSizeClassifier)
let obj = { SMALL: 0, [0]: "SMALL", NORMAL: 1, [1]: "NORMAL", LARGE: 2, [2]: "LARGE", XLARGE: 3, [3]: "XLARGE" };
const result = require("set").fileFinishedImporting("modules/screen/native/useWindowSizeClassifier.tsx");

export default function useWindowSizeClassifier() {
  const width = importDefault(4140)().width;
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
  const obj = require(4140) /* useBaseAppContainerDimensions */;
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
