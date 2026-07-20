// Module ID: 10146
// Function ID: 78462
// Name: getNavigationModalPresentation
// Dependencies: []
// Exports: default

// Module 10146 (getNavigationModalPresentation)
const obj = {};
const _module = require(dependencyMap[0]);
if (_module.isAndroid()) {
  const _module1 = require(dependencyMap[1]);
  let str2 = "modal";
  if (_module1.getIsWindowLarge()) {
    str2 = "fullScreenModal";
  }
  let str = str2;
} else {
  const _module2 = require(dependencyMap[2]);
  str = "modal";
  if (_module2.isIpadOS()) {
    str = "fullScreenModal";
  }
}
obj.presentation = str;
const _module3 = require(dependencyMap[0]);
obj.lockOrientation = !_module3.isAndroid();
const _module4 = require(dependencyMap[4]);
const result = _module4.fileFinishedImporting("modules/main_tabs_v2/native/utils/getNavigationModalPresentation.tsx");

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
  const obj = { presentation };
  let tmp4;
  if (lockOrientation) {
    const orientation = require(dependencyMap[3]).getOrientation();
    let str2 = "landscape";
    if (orientation === require(dependencyMap[3]).OrientationType.PORTRAIT) {
      str2 = "portrait";
    }
    tmp4 = str2;
    const obj2 = require(dependencyMap[3]);
  }
  obj.orientation = tmp4;
  return obj;
};
