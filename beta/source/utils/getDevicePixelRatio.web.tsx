// Module ID: 9176
// Function ID: 9177
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9176 (getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
