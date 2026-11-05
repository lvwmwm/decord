// Module ID: 9453
// Function ID: 9454
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9453 (getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
