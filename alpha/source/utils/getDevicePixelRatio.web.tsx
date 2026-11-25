// Module ID: 8687
// Function ID: 8688
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8687 (getDevicePixelRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
