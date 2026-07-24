// Module ID: 8625
// Function ID: 68394
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8625 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = 1;
  if (null != devicePixelRatio) {
    num = devicePixelRatio;
  }
  return num;
};
