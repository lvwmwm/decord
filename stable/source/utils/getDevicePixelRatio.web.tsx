// Module ID: 9400
// Function ID: 9401
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9400 (getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
