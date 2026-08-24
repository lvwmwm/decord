// Module ID: 9551
// Function ID: 9552
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9551 (getDevicePixelRatio)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
