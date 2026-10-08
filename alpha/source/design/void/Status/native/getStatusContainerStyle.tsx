// Module ID: 14240
// Function ID: 14241
// Name: getStatusContainerStyle
// Dependencies: [1201, 2]
// Exports: default

// Module 14240 (getStatusContainerStyle)
import StatusConstants from "StatusConstants" /* 1201 */;
import size_mod from "module_2" /* 2 */;

let result;
let result1;
let result2;
let result3;
let result4;
let size;
let size1;
let size2;
let size3;
let size4;
let size5;
let size6;
let size7;
let size8;
let size9;
let sum;
let sum1;
let sum10;
let sum11;
let sum12;
let sum13;
let sum14;
let sum2;
let sum3;
let sum4;
let sum5;
let sum6;
let sum7;
let sum8;
let sum9;
const STATUS_PADDING = StatusConstants.STATUS_PADDING;
const StatusSizes = StatusConstants.StatusSizes;
const VR_STATUS_SCALE = StatusConstants.VR_STATUS_SCALE;
const VR_STATUS_WIDTH_RATIO = StatusConstants.VR_STATUS_WIDTH_RATIO;
const obj = { containerSmall: size, containerRefreshMedium: size1, containerMedium: size2, containerLarge: size3, containerXLarge: size4, containerMobileOnlineSmall: size5, containerMobileOnlineRefreshMedium: size6, containerMobileOnlineMedium: size7, containerMobileOnlineLarge: size8, containerMobileOnlineXLarge: size9, containerVRSmall: { width: result * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum10, borderRadius: sum10 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING }, containerVRRefreshMedium: { width: result1 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum11, borderRadius: sum11 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING }, containerVRMedium: { width: result2 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum12, borderRadius: sum12 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING }, containerVRLarge: { width: result3 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum13, borderRadius: sum13 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING }, containerVRXLarge: { width: result4 * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum14, borderRadius: sum14 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING } };
size = { width: sum, height: sum, borderRadius: sum / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum = StatusSizes.SMALL + 2 * STATUS_PADDING;
size1 = { width: sum1, height: sum1, borderRadius: sum1 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum1 = StatusSizes.REFRESH_MEDIUM_10 + 2 * STATUS_PADDING;
size2 = { width: sum2, height: sum2, borderRadius: sum2 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum2 = StatusSizes.MEDIUM + 2 * STATUS_PADDING;
size3 = { width: sum3, height: sum3, borderRadius: sum3 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum3 = StatusSizes.LARGE + 2 * STATUS_PADDING;
size4 = { width: sum4, height: sum4, borderRadius: sum4 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum4 = StatusSizes.LARGE + 2 * STATUS_PADDING;
size5 = { width: sum5, height: sum5 + sum5 / 2.5, borderRadius: sum5 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 };
sum5 = StatusSizes.SMALL + 2 * STATUS_PADDING;
size6 = { width: sum6, height: sum6 + sum6 / 2.5, borderRadius: sum6 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 };
sum6 = StatusSizes.REFRESH_MEDIUM_10 + 2 * STATUS_PADDING;
size7 = { width: sum7, height: sum7 + sum7 / 2.5, borderRadius: sum7 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 };
sum7 = StatusSizes.MEDIUM + 2 * STATUS_PADDING;
size8 = { width: sum8, height: sum8 + sum8 / 2.5, borderRadius: sum8 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 };
sum8 = StatusSizes.LARGE + 2 * STATUS_PADDING;
size9 = { width: sum9, height: sum9 + sum9 / 2.5, borderRadius: sum9 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 };
sum9 = StatusSizes.LARGE + 2 * STATUS_PADDING;
result = StatusSizes.SMALL * VR_STATUS_SCALE;
sum10 = result + 2 * STATUS_PADDING;
result1 = StatusSizes.REFRESH_MEDIUM_10 * VR_STATUS_SCALE;
sum11 = result1 + 2 * STATUS_PADDING;
result2 = StatusSizes.MEDIUM * VR_STATUS_SCALE;
sum12 = result2 + 2 * STATUS_PADDING;
result3 = StatusSizes.LARGE * VR_STATUS_SCALE;
sum13 = result3 + 2 * STATUS_PADDING;
result4 = StatusSizes.LARGE * VR_STATUS_SCALE;
sum14 = result4 + 2 * STATUS_PADDING;
size = size_mod;
const result5 = size.fileFinishedImporting("design/void/Status/native/getStatusContainerStyle.tsx");

export default function getStatusContainerStyle(arg0, arg1) {
  let num2;
  let num5;
  let num6;
  let result1;
  let sum1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const SMALL = StatusSizes.SMALL;
  if (flag) {
    if (SMALL === arg0) {
      return obj.containerVRSmall;
    } else if (StatusSizes.REFRESH_MEDIUM_10 === arg0) {
      return obj.containerVRRefreshMedium;
    } else if (StatusSizes.MEDIUM === arg0) {
      return obj.containerVRMedium;
    } else if (StatusSizes.LARGE === arg0) {
      return obj.containerVRLarge;
    } else if (StatusSizes.XLARGE === arg0) {
      return obj.containerVRXLarge;
    } else {
      const result = arg0 * VR_STATUS_SCALE;
      const sum = result + 2 * STATUS_PADDING;
      size = { width: result * VR_STATUS_WIDTH_RATIO + 2 * STATUS_PADDING, height: sum, borderRadius: sum / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
      return size;
    }
  } else if (SMALL === arg0) {
    return arg1 ? obj.containerMobileOnlineSmall : obj.containerSmall;
  } else if (StatusSizes.REFRESH_MEDIUM_10 === arg0) {
    return arg1 ? obj.containerMobileOnlineRefreshMedium : obj.containerRefreshMedium;
  } else if (StatusSizes.MEDIUM === arg0) {
    return arg1 ? obj.containerMobileOnlineMedium : obj.containerMedium;
  } else if (StatusSizes.LARGE === arg0) {
    return arg1 ? obj.containerMobileOnlineLarge : obj.containerLarge;
  } else if (StatusSizes.XLARGE === arg0) {
    return arg1 ? obj.containerMobileOnlineXLarge : obj.containerXLarge;
  } else {
    const size1 = { width: sum1, height: sum1 + num2, borderRadius: result1, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + num5, paddingBottom: STATUS_PADDING + num6 };
    sum1 = arg0 + 2 * STATUS_PADDING;
    num2 = 0;
    if (arg1) {
      num2 = sum1 / 2.5;
    }
    if (arg1) {
      result1 = sum1 / 4;
    } else {
      result1 = sum1 / 2;
    }
    num5 = 0;
    if (arg1) {
      num5 = 1;
    }
    num6 = 0;
    if (arg1) {
      num6 = 1;
    }
    return size1;
  }
};
