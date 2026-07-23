// Module ID: 13015
// Function ID: 100623
// Name: getAnimatedTypingTranslateX
// Dependencies: [1274, 13016, 2]
// Exports: getAnimatedTypingTranslateX, getMobileStatusContainerRect, getStatusTypingDimensions, getVRStatusContainerRect

// Module 13015 (getAnimatedTypingTranslateX)
import STATUS_PADDING from "STATUS_PADDING";

let closure_2;
let closure_3;
({ STATUS_PADDING: closure_2, StatusSizes: closure_3 } = STATUS_PADDING);
const result = require("set").fileFinishedImporting("design/void/Status/native/StatusUtils.tsx");

export const getAnimatedTypingTranslateX = function getAnimatedTypingTranslateX(width) {
  return width / 2 - 6;
};
export const getMobileStatusContainerRect = function getMobileStatusContainerRect(arg0) {
  const sum = arg0 + 2 * closure_2;
  return { width: sum, height: 1.4 * sum, cornerRadius: sum / 4 };
};
export const getVRStatusContainerRect = function getVRStatusContainerRect(arg0) {
  const size = importDefault(13016)(arg0, false, true);
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
