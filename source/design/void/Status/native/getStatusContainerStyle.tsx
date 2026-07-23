// Module ID: 13016
// Function ID: 100628
// Name: createContainerStyle
// Dependencies: [1274, 2]
// Exports: default

// Module 13016 (createContainerStyle)
import STATUS_PADDING from "STATUS_PADDING";

let StatusSizes;
let closure_0;
let closure_2;
let closure_3;
function createContainerStyle(LARGE, arg1) {
  const obj = { width: sum };
  sum = LARGE + 2 * closure_0;
  let num = 0;
  if (arg1) {
    num = sum / 2.5;
  }
  obj.height = sum + num;
  if (arg1) {
    let result = sum / 4;
  } else {
    result = sum / 2;
  }
  obj.borderRadius = result;
  obj.paddingLeft = closure_0;
  obj.paddingRight = closure_0;
  let num4 = 0;
  if (arg1) {
    num4 = 1;
  }
  obj.paddingTop = closure_0 + num4;
  let num5 = 0;
  if (arg1) {
    num5 = 1;
  }
  obj.paddingBottom = closure_0 + num5;
  return obj;
}
function createVRContainerStyle(LARGE) {
  const result = LARGE * closure_2;
  const sum = result + 2 * closure_0;
  return { width: result * closure_3 + 2 * closure_0, height: sum, borderRadius: sum / 2, paddingLeft: closure_0, paddingRight: closure_0, paddingTop: closure_0, paddingBottom: closure_0 };
}
({ STATUS_PADDING: closure_0, StatusSizes } = STATUS_PADDING);
({ VR_STATUS_SCALE: closure_2, VR_STATUS_WIDTH_RATIO: closure_3 } = STATUS_PADDING);
let obj = { containerSmall: createContainerStyle(StatusSizes.SMALL, false), containerRefreshMedium: createContainerStyle(StatusSizes.REFRESH_MEDIUM_10, false), containerMedium: createContainerStyle(StatusSizes.MEDIUM, false), containerLarge: createContainerStyle(StatusSizes.LARGE, false), containerXLarge: createContainerStyle(StatusSizes.LARGE, false), containerMobileOnlineSmall: createContainerStyle(StatusSizes.SMALL, true), containerMobileOnlineRefreshMedium: createContainerStyle(StatusSizes.REFRESH_MEDIUM_10, true), containerMobileOnlineMedium: createContainerStyle(StatusSizes.MEDIUM, true), containerMobileOnlineLarge: createContainerStyle(StatusSizes.LARGE, true), containerMobileOnlineXLarge: createContainerStyle(StatusSizes.LARGE, true), containerVRSmall: createVRContainerStyle(StatusSizes.SMALL), containerVRRefreshMedium: createVRContainerStyle(StatusSizes.REFRESH_MEDIUM_10), containerVRMedium: createVRContainerStyle(StatusSizes.MEDIUM), containerVRLarge: createVRContainerStyle(StatusSizes.LARGE), containerVRXLarge: createVRContainerStyle(StatusSizes.LARGE) };
let result = require("set").fileFinishedImporting("design/void/Status/native/getStatusContainerStyle.tsx");

export default function getStatusContainerStyle(LARGE) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const SMALL = StatusSizes.SMALL;
  if (flag) {
    if (SMALL === LARGE) {
      return obj.containerVRSmall;
    } else if (StatusSizes.REFRESH_MEDIUM_10 === LARGE) {
      return obj.containerVRRefreshMedium;
    } else if (StatusSizes.MEDIUM === LARGE) {
      return obj.containerVRMedium;
    } else if (StatusSizes.LARGE === LARGE) {
      return obj.containerVRLarge;
    } else if (StatusSizes.XLARGE === LARGE) {
      return obj.containerVRXLarge;
    } else {
      return createVRContainerStyle(LARGE);
    }
  } else if (SMALL === LARGE) {
    return arg1 ? obj.containerMobileOnlineSmall : obj.containerSmall;
  } else if (StatusSizes.REFRESH_MEDIUM_10 === LARGE) {
    return arg1 ? obj.containerMobileOnlineRefreshMedium : obj.containerRefreshMedium;
  } else if (StatusSizes.MEDIUM === LARGE) {
    return arg1 ? obj.containerMobileOnlineMedium : obj.containerMedium;
  } else if (StatusSizes.LARGE === LARGE) {
    return arg1 ? obj.containerMobileOnlineLarge : obj.containerLarge;
  } else if (StatusSizes.XLARGE === LARGE) {
    return arg1 ? obj.containerMobileOnlineXLarge : obj.containerXLarge;
  } else {
    return createContainerStyle(LARGE, arg1);
  }
};
