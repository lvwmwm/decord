// Module ID: 13645
// Function ID: 13646
// Name: Status/StatusUtils
// Dependencies: [1178, 13646, 2]
// Exports: getAnimatedTypingTranslateX, getMobileStatusContainerRect, getStatusTypingDimensions, getVRStatusContainerRect

// Module 13645 (Status/StatusUtils)
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 13646 */;
import StatusConstants from "StatusConstants" /* 1178 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
({ STATUS_PADDING: c2, StatusSizes: c3 } = StatusConstants);
let size = size_mod;
const result = size.fileFinishedImporting("design/void/Status/native/StatusUtils.tsx");

export const getAnimatedTypingTranslateX = function getAnimatedTypingTranslateX(width) {
  return width / 2 - 6;
};
export const getMobileStatusContainerRect = function getMobileStatusContainerRect(arg0) {
  let sum;
  size = { width: sum, height: 1.4 * sum, cornerRadius: sum / 4 };
  sum = arg0 + 2 * React2;
  return size;
};
export const getVRStatusContainerRect = function getVRStatusContainerRect(arg0) {
  size = getStatusContainerStyleDefault(arg0, false, true);
  const size1 = { width: size.width, height: size.height, cornerRadius: size.borderRadius };
  return size1;
};
export const getStatusTypingDimensions = function getStatusTypingDimensions(arg0) {
  if (constants.SMALL !== arg0) {
    let num;
    let num2;
    if (constants.XSMALL !== arg0) {
      num = 6;
      num2 = 28;
    }
    size = { width: num2, height: Math.floor(num2 / 2.33), dotSize: num };
    const _Math = Math;
    return size;
  }
  num = 4;
  num2 = 22;
};
