// Module ID: 9163
// Function ID: 9164
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9163 (getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
