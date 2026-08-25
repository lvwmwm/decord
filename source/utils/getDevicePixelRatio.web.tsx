// Module ID: 9405
// Function ID: 9406
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9405 (getDevicePixelRatio)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
