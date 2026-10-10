// Module ID: 14390
// Function ID: 14391
// Name: getStatusContainerStyle
// Dependencies: [17, 1201, 2]
// Exports: default

// Module 14390 (getStatusContainerStyle)
import react_native from "react-native" /* 17 */;
import StatusConstants from "StatusConstants" /* 1201 */;
import size_mod from "module_2" /* 2 */;

let size;
let size1;
let size10;
let size11;
let size12;
let size13;
let size14;
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
let sum2;
let sum3;
let sum4;
let sum5;
let sum6;
let sum7;
let sum8;
let sum9;
const PixelRatio = react_native.PixelRatio;
const STATUS_PADDING = StatusConstants.STATUS_PADDING;
const StatusSizes = StatusConstants.StatusSizes;
const VR_STATUS_SCALE = StatusConstants.VR_STATUS_SCALE;
const VR_STATUS_WIDTH_RATIO = StatusConstants.VR_STATUS_WIDTH_RATIO;
const obj = { containerSmall: size, containerRefreshMedium: size1, containerMedium: size2, containerLarge: size3, containerXLarge: size4, containerMobileOnlineSmall: size5, containerMobileOnlineRefreshMedium: size6, containerMobileOnlineMedium: size7, containerMobileOnlineLarge: size8, containerMobileOnlineXLarge: size9, containerVRSmall: size10, containerVRRefreshMedium: size11, containerVRMedium: size12, containerVRLarge: size13, containerVRXLarge: size14 };
size = { width: sum, height: sum, borderRadius: sum / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum = PixelRatio.roundToNearestPixel(StatusSizes.SMALL) + 2 * STATUS_PADDING;
size1 = { width: sum1, height: sum1, borderRadius: sum1 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum1 = PixelRatio.roundToNearestPixel(StatusSizes.REFRESH_MEDIUM_10) + 2 * STATUS_PADDING;
size2 = { width: sum2, height: sum2, borderRadius: sum2 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum2 = PixelRatio.roundToNearestPixel(StatusSizes.MEDIUM) + 2 * STATUS_PADDING;
size3 = { width: sum3, height: sum3, borderRadius: sum3 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum3 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE) + 2 * STATUS_PADDING;
size4 = { width: sum4, height: sum4, borderRadius: sum4 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
sum4 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE) + 2 * STATUS_PADDING;
size5 = { width: sum5, height: sum5 + sum5 / 2.5, borderRadius: sum5 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 };
sum5 = PixelRatio.roundToNearestPixel(StatusSizes.SMALL) + 2 * STATUS_PADDING;
size6 = { width: sum6, height: sum6 + sum6 / 2.5, borderRadius: sum6 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 };
sum6 = PixelRatio.roundToNearestPixel(StatusSizes.REFRESH_MEDIUM_10) + 2 * STATUS_PADDING;
size7 = { width: sum7, height: sum7 + sum7 / 2.5, borderRadius: sum7 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 };
sum7 = PixelRatio.roundToNearestPixel(StatusSizes.MEDIUM) + 2 * STATUS_PADDING;
size8 = { width: sum8, height: sum8 + sum8 / 2.5, borderRadius: sum8 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 };
sum8 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE) + 2 * STATUS_PADDING;
size9 = { width: sum9, height: sum9 + sum9 / 2.5, borderRadius: sum9 / 4, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + 1, paddingBottom: STATUS_PADDING + 1 };
sum9 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE) + 2 * STATUS_PADDING;
let roundToNearestPixelResult = PixelRatio.roundToNearestPixel(StatusSizes.SMALL * VR_STATUS_SCALE);
const sum10 = roundToNearestPixelResult + 2 * STATUS_PADDING;
size10 = { width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING, height: sum10, borderRadius: sum10 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
const roundToNearestPixelResult1 = PixelRatio.roundToNearestPixel(StatusSizes.REFRESH_MEDIUM_10 * VR_STATUS_SCALE);
const sum11 = roundToNearestPixelResult1 + 2 * STATUS_PADDING;
size11 = { width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult1 * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING, height: sum11, borderRadius: sum11 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
const roundToNearestPixelResult2 = PixelRatio.roundToNearestPixel(StatusSizes.MEDIUM * VR_STATUS_SCALE);
const sum12 = roundToNearestPixelResult2 + 2 * STATUS_PADDING;
size12 = { width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult2 * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING, height: sum12, borderRadius: sum12 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
const roundToNearestPixelResult3 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE * VR_STATUS_SCALE);
const sum13 = roundToNearestPixelResult3 + 2 * STATUS_PADDING;
size13 = { width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult3 * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING, height: sum13, borderRadius: sum13 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
const roundToNearestPixelResult4 = PixelRatio.roundToNearestPixel(StatusSizes.LARGE * VR_STATUS_SCALE);
const sum14 = roundToNearestPixelResult4 + 2 * STATUS_PADDING;
size14 = { width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult4 * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING, height: sum14, borderRadius: sum14 / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
size = size_mod;
let result = size.fileFinishedImporting("design/void/Status/native/getStatusContainerStyle.tsx");

export default function getStatusContainerStyle(arg0, arg1) {
  let num2;
  let num4;
  let num5;
  let result;
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
      const roundToNearestPixelResult = PixelRatio.roundToNearestPixel(arg0 * VR_STATUS_SCALE);
      const sum = roundToNearestPixelResult + 2 * STATUS_PADDING;
      size = { width: PixelRatio.roundToNearestPixel(roundToNearestPixelResult * VR_STATUS_WIDTH_RATIO) + 2 * STATUS_PADDING, height: sum, borderRadius: sum / 2, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING, paddingBottom: STATUS_PADDING };
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
    const size1 = { width: sum1, height: sum1 + num2, borderRadius: result, paddingLeft: STATUS_PADDING, paddingRight: STATUS_PADDING, paddingTop: STATUS_PADDING + num4, paddingBottom: STATUS_PADDING + num5 };
    sum1 = PixelRatio.roundToNearestPixel(arg0) + 2 * STATUS_PADDING;
    num2 = 0;
    if (arg1) {
      num2 = sum1 / 2.5;
    }
    if (arg1) {
      result = sum1 / 4;
    } else {
      result = sum1 / 2;
    }
    num4 = 0;
    if (arg1) {
      num4 = 1;
    }
    num5 = 0;
    if (arg1) {
      num5 = 1;
    }
    return size1;
  }
};
