// Module ID: 9989
// Function ID: 9990
// Name: getNavigationModalPresentation
// Dependencies: [1384, 7017, 4923, 8779, 1499, 2]
// Exports: default

// Module 9989 (getNavigationModalPresentation)
import DeviceUtils from "DeviceUtils" /* 4923 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7017 */;
import DeviceOrientation from "DeviceOrientation" /* 8779 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
import size_mod from "module_2" /* 2 */;

let str;
let tmp3;
let PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isAndroid()) {
  const _module1 = useIsWindowLarge;
  let str2 = "modal";
  if (_module1.getIsWindowLarge()) {
    str2 = "fullScreenModal";
  }
  str = str2;
} else {
  const _module2 = DeviceUtils;
  str = "modal";
  if (_module2.isIpadOS()) {
    str = "fullScreenModal";
  }
}
let obj = { presentation: str, lockOrientation: tmp3 };
PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
tmp3 = !PlatformUtils;
if (tmp3) {
  const _module4 = DeviceUtils;
  tmp3 = !_module4.isIpadOS();
}
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx");

export default function getNavigationModalPresentation() {
  let tmp4;
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
    const lockOrientation2 = obj.lockOrientation && "transparentModal" !== presentation;
    lockOrientation = lockOrientation2;
  }
  obj = { presentation, orientation: tmp4 };
  tmp4 = undefined;
  if (lockOrientation) {
    const obj2 = DeviceOrientation;
    const orientationLock = obj2.getOrientationLock();
    let str4 = "landscape";
    const tmp5 = require;
    if ("LANDSCAPE" !== orientationLock) {
      let str5 = "portrait";
      str4 = "portrait";
      if (null == orientationLock) {
        const tmp5Result = tmp5(1499);
        size = tmp5Result.getWindowDimensions({ ignoreKeyboard: true });
        if (size.width > size.height) {
          str5 = "landscape";
        }
        str4 = str5;
      }
    }
    tmp4 = str4;
  }
  return obj;
};
