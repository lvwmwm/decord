// Module ID: 8454
// Function ID: 8455
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8454 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
