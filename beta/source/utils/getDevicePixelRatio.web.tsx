// Module ID: 8864
// Function ID: 8865
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8864 (getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
