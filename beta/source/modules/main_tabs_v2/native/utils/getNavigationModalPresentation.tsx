// Module ID: 10386
// Function ID: 10387
// Name: getNavigationModalPresentation
// Dependencies: [1364, 6364, 4812, 7780, 2]
// Exports: default

// Module 10386 (getNavigationModalPresentation)
import DeviceUtils from "DeviceUtils" /* 4812 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6364 */;
import DeviceOrientation from "DeviceOrientation" /* 7780 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let str;
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
let obj = { presentation: str, lockOrientation: !PlatformUtils.isAndroid() };
PlatformUtils = PlatformUtils_mod;
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
    let str2 = "landscape";
    let str4 = "landscape";
    if ("LANDSCAPE" !== orientationLock) {
      if (null != orientationLock) {
        str2 = "portrait";
      } else {
        const tmp5Result = DeviceOrientation;
        const orientation = tmp5Result.getOrientation();
      }
      str4 = str2;
    }
    tmp4 = str4;
  }
  return obj;
};
