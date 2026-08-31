// Module ID: 8978
// Function ID: 8979
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8978 (getDevicePixelRatio)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
