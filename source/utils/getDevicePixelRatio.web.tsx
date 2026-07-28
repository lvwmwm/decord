// Module ID: 8433
// Function ID: 67255
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8433 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = 1;
  if (null != devicePixelRatio) {
    num = devicePixelRatio;
  }
  return num;
};
