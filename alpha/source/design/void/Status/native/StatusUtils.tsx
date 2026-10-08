// Module ID: 14239
// Function ID: 14240
// Name: Status/StatusUtils
// Dependencies: [1201, 14240, 2]
// Exports: getAnimatedTypingTranslateX, getMobileStatusContainerRect, getStatusTypingDimensions, getVRStatusContainerRect

// Module 14239 (Status/StatusUtils)
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 14240 */;
import StatusConstants from "StatusConstants" /* 1201 */;
import size_mod from "module_2" /* 2 */;

let c2;
let c3;
({ STATUS_PADDING: c2, StatusSizes: c3 } = StatusConstants);
let size = size_mod;
const result = size.fileFinishedImporting("design/void/Status/native/StatusUtils.tsx");

export const getAnimatedTypingTranslateX = function getAnimatedTypingTranslateX(width) {
  return width / 2 - 6;
};
export const getMobileStatusContainerRect = function getMobileStatusContainerRect(statusSizeOverride) {
  let sum;
  size = { width: sum, height: 1.4 * sum, cornerRadius: sum / 4 };
  sum = statusSizeOverride + 2 * React2;
  return size;
};
export const getVRStatusContainerRect = function getVRStatusContainerRect(statusSizeOverride) {
  size = getStatusContainerStyleDefault(statusSizeOverride, false, true);
  const size1 = { width: size.width, height: size.height, cornerRadius: size.borderRadius };
  return size1;
};
export const getStatusTypingDimensions = function getStatusTypingDimensions(statusSizeOverride) {
  if (constants.SMALL !== statusSizeOverride) {
    let num;
    let num2;
    if (constants.XSMALL !== statusSizeOverride) {
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
