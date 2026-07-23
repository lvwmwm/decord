// Module ID: 10161
// Function ID: 78544
// Name: getNavigationModalPresentation
// Dependencies: [477, 8133, 4110, 8303, 2]
// Exports: default

// Module 10161 (getNavigationModalPresentation)
import set from "set";
import set from "set";
import set from "getSystemVersion";

let obj = {};
if (set.isAndroid()) {
  const _module1 = require("useIsWindowLarge");
  let str2 = "modal";
  if (_module1.getIsWindowLarge()) {
    str2 = "fullScreenModal";
  }
  let str = str2;
} else {
  const _module2 = require("getSystemVersion");
  str = "modal";
  if (_module2.isIpadOS()) {
    str = "fullScreenModal";
  }
}
obj.presentation = str;
obj.lockOrientation = !set.isAndroid();
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx");

export default function getNavigationModalPresentation() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = obj;
  }
  let presentation = tmp.presentation;
  if (presentation === undefined) {
    presentation = obj.presentation;
  }
  let lockOrientation = tmp.lockOrientation;
  if (lockOrientation === undefined) {
    let lockOrientation2 = obj.lockOrientation;
    if (lockOrientation2) {
      lockOrientation2 = "transparentModal" !== presentation;
    }
    lockOrientation = lockOrientation2;
  }
  obj = { presentation };
  let tmp4;
  if (lockOrientation) {
    const orientationLock = require(8303) /* handleOrientationChange */.getOrientationLock();
    let str2 = "landscape";
    let str4 = "landscape";
    if ("LANDSCAPE" !== orientationLock) {
      if (null != orientationLock) {
        str2 = "portrait";
      } else {
        const orientation = require(8303) /* handleOrientationChange */.getOrientation();
        const obj3 = require(8303) /* handleOrientationChange */;
      }
      str4 = str2;
    }
    tmp4 = str4;
    const obj2 = require(8303) /* handleOrientationChange */;
  }
  obj.orientation = tmp4;
  return obj;
};
