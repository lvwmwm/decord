// Module ID: 8457
// Function ID: 8458
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8457 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
