// Module ID: 9192
// Function ID: 9193
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9192 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
