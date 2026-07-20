// Module ID: 3983
// Function ID: 33074
// Name: calculateFromWidth
// Dependencies: []
// Exports: default, getWindowSizeClassifier

// Module 3983 (calculateFromWidth)
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
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/screen/native/useWindowSizeClassifier.tsx");

export default function useWindowSizeClassifier() {
  return calculateFromWidth(importDefault(dependencyMap[0])().width);
};
export const WindowSizeClassifier = obj;
export const getWindowSizeClassifier = function getWindowSizeClassifier() {
  return calculateFromWidth(require(dependencyMap[0]).getBaseAppContainerDimensions().width);
};
