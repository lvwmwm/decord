// Module ID: 8844
// Function ID: 8845
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8844 (getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
