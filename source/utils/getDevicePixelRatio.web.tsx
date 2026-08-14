// Module ID: 9321
// Function ID: 9322
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9321 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
