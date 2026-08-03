// Module ID: 8768
// Function ID: 8769
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8768 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
