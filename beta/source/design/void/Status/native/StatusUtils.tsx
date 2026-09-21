// Module ID: 14375
// Function ID: 14376
// Name: Status/StatusUtils
// Dependencies: [1182, 14376, 2]
// Exports: getAnimatedTypingTranslateX, getMobileStatusContainerRect, getStatusTypingDimensions, getVRStatusContainerRect

// Module 14375 (Status/StatusUtils)
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 14376 */;
import StatusConstants from "StatusConstants" /* 1182 */;
import size from "module_2" /* 2 */;

({ STATUS_PADDING: c2, StatusSizes: c3 } = StatusConstants);
const result = size.fileFinishedImporting("design/void/Status/native/StatusUtils.tsx");

export const getAnimatedTypingTranslateX = function getAnimatedTypingTranslateX(width) {
  return width / 2 - 6;
};
export const getMobileStatusContainerRect = function getMobileStatusContainerRect(statusSizeOverride) {
  const size = { width: null, height: null, cornerRadius: null };
  const sum = statusSizeOverride + 2 * React2;
  size.width = sum;
  size.height = 1.4 * sum;
  size.cornerRadius = sum / 4;
  return size;
};
export const getVRStatusContainerRect = function getVRStatusContainerRect(statusSizeOverride) {
  const size = getStatusContainerStyleDefault(statusSizeOverride, false, true);
  const size1 = { width: size.width, height: size.height, cornerRadius: size.borderRadius };
  return size1;
};
export const getStatusTypingDimensions = function getStatusTypingDimensions(statusSizeOverride) {
  if (constants.SMALL !== statusSizeOverride) {
    if (tmp.XSMALL !== statusSizeOverride) {
      let num = 6;
      let num2 = 28;
    }
    const size = { width: num2, height: null, dotSize: null };
    const _Math = Math;
    size.height = Math.floor(num2 / 2.33);
    size.dotSize = num;
    return size;
  }
  num = 4;
  num2 = 22;
};
