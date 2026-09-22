// Module ID: 9320
// Function ID: 9321
// Name: utils/getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9320 (utils/getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
