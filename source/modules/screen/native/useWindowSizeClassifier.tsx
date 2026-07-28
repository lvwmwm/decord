// Module ID: 4020
// Function ID: 33201
// Name: calculateFromWidth
// Dependencies: [4021, 2]
// Exports: default, getWindowSizeClassifier

// Module 4020 (calculateFromWidth)
function calculateFromWidth(width) {
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
}
const obj = { SMALL: 0, [0]: "SMALL", NORMAL: 1, [1]: "NORMAL", LARGE: 2, [2]: "LARGE", XLARGE: 3, [3]: "XLARGE" };
const result = require("set").fileFinishedImporting("modules/screen/native/useWindowSizeClassifier.tsx");

export default function useWindowSizeClassifier() {
  return calculateFromWidth(importDefault(4021)().width);
};
export const WindowSizeClassifier = obj;
export const getWindowSizeClassifier = function getWindowSizeClassifier() {
  return calculateFromWidth(require(4021) /* useBaseAppContainerDimensions */.getBaseAppContainerDimensions().width);
};
