// Module ID: 10102
// Function ID: 10103
// Name: utils/getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 10102 (utils/getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
