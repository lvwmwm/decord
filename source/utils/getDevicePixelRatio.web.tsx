// Module ID: 9263
// Function ID: 9264
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9263 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
