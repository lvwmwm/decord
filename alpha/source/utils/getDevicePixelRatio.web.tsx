// Module ID: 9190
// Function ID: 9191
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9190 (getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
