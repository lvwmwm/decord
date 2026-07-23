// Module ID: 11170
// Function ID: 86834
// Name: ApplicationsImage
// Dependencies: [31, 27, 33, 4130, 689, 11171, 5085, 2]
// Exports: default

// Module 11170 (ApplicationsImage)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm + 3, position: "absolute", padding: 3 };
_createForOfIteratorHelperLoose.appIconContainer = _createForOfIteratorHelperLoose;
let items = [{ rotate: "-10deg" }];
_createForOfIteratorHelperLoose.appIconLeftContainer = { transform: items };
let items1 = [{ rotate: "15deg" }];
_createForOfIteratorHelperLoose.appIconRightContainer = { left: require("_createForOfIteratorHelperLoose").space.PX_32, transform: items1 };
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, width: 36, height: 36 };
_createForOfIteratorHelperLoose.appIcon = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { left: require("_createForOfIteratorHelperLoose").space.PX_32, transform: items1 };
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx");

export default function ApplicationsImage(arg0) {
  let firstApplication;
  let secondApplication;
  ({ firstApplication, secondApplication } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let appLauncherIconSource = null;
  if (null != firstApplication) {
    let obj = require(11171) /* handleApplicationSelected */;
    appLauncherIconSource = obj.getAppLauncherIconSource(firstApplication);
  }
  let appLauncherIconSource1 = null;
  if (null != secondApplication) {
    let obj1 = require(11171) /* handleApplicationSelected */;
    appLauncherIconSource1 = obj1.getAppLauncherIconSource(secondApplication);
  }
  let tmp8 = null != appLauncherIconSource;
  if (tmp8) {
    obj = { style: tmp.appIcon, source: appLauncherIconSource };
    tmp8 = callback(importDefault(5085), obj);
  }
  let tmp12 = null != appLauncherIconSource1;
  if (tmp12) {
    obj = { style: tmp.appIcon, source: appLauncherIconSource1 };
    tmp12 = callback(importDefault(5085), obj);
  }
  obj1 = {};
  const obj2 = { style: items };
  items = [, ];
  ({ appIconContainer: arr[0], appIconLeftContainer: arr[1] } = tmp);
  obj2.children = tmp12;
  const items1 = [callback(View, obj2), ];
  const obj3 = { style: items2 };
  items2 = [, ];
  ({ appIconContainer: arr3[0], appIconRightContainer: arr3[1] } = tmp);
  obj3.children = tmp8;
  items1[1] = callback(View, obj3);
  obj1.children = items1;
  return callback2(closure_5, obj1);
};
export const APP_ICON_SIZE = 36;
