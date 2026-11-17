// Module ID: 10369
// Function ID: 10370
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 10369 (getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
