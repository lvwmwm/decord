// Module ID: 9015
// Function ID: 9016
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9015 (getDevicePixelRatio)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
