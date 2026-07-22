// Module ID: 12901
// Function ID: 98467
// Name: getAnimatedTypingTranslateX
// Dependencies: []
// Exports: getAnimatedTypingTranslateX, getMobileStatusContainerRect, getStatusTypingDimensions, getVRStatusContainerRect

// Module 12901 (getAnimatedTypingTranslateX)
const _module = require(dependencyMap[0]);
({ STATUS_PADDING: closure_2, StatusSizes: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("design/void/Status/native/StatusUtils.tsx");

export const getAnimatedTypingTranslateX = function getAnimatedTypingTranslateX(width) {
  return width / 2 - 6;
};
export const getMobileStatusContainerRect = function getMobileStatusContainerRect(arg0) {
  const sum = arg0 + 2 * closure_2;
  return { width: sum, height: 1.4 * sum, cornerRadius: sum / 4 };
};
export const getVRStatusContainerRect = function getVRStatusContainerRect(arg0) {
  const size = importDefault(dependencyMap[1])(arg0, false, true);
  return { width: size.width, height: size.height, cornerRadius: size.borderRadius };
};
export const getStatusTypingDimensions = function getStatusTypingDimensions(arg0) {
  if (closure_3.SMALL !== arg0) {
    if (closure_3.XSMALL !== arg0) {
      let num = 28;
      let num2 = 6;
    }
    const obj = { width: num };
    const _Math = Math;
    obj.height = Math.floor(num / 2.33);
    obj.dotSize = num2;
    return obj;
  }
  num = 22;
  num2 = 4;
};
