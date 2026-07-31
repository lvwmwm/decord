// Module ID: 8467
// Function ID: 8468
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8467 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
