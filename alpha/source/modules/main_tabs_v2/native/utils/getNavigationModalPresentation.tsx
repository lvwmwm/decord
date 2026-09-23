// Module ID: 11271
// Function ID: 11272
// Name: getNavigationModalPresentation
// Dependencies: [1364, 7274, 4806, 8678, 2]
// Exports: default

// Module 11271 (getNavigationModalPresentation)
import DeviceUtils from "DeviceUtils" /* 4806 */;
import useIsWindowLarge from "useIsWindowLarge" /* 7274 */;
import DeviceOrientation from "DeviceOrientation" /* 8678 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isAndroid()) {
  const _module1 = useIsWindowLarge;
  let str2 = "modal";
  if (_module1.getIsWindowLarge()) {
    str2 = "fullScreenModal";
  }
  let str = str2;
} else {
  const _module2 = DeviceUtils;
  str = "modal";
  if (_module2.isIpadOS()) {
    str = "fullScreenModal";
  }
}
let obj = { presentation: str, lockOrientation: null };
let PlatformUtils = PlatformUtils_mod;
obj.lockOrientation = !PlatformUtils.isAndroid();
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx");

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
  obj = { presentation, orientation: null };
  let tmp4;
  if (lockOrientation) {
    const orientationLock = DeviceOrientation.getOrientationLock();
    let str2 = "landscape";
    let str4 = "landscape";
    if ("LANDSCAPE" !== orientationLock) {
      if (null != orientationLock) {
        str2 = "portrait";
      } else {
        const orientation = tmp5(8678).getOrientation();
        const tmp5Result = tmp5(8678);
      }
      str4 = str2;
    }
    tmp4 = str4;
  }
  obj.orientation = tmp4;
  return obj;
};
