// Module ID: 8582
// Function ID: 68171
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 8582 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = 1;
  if (null != devicePixelRatio) {
    num = devicePixelRatio;
  }
  return num;
};
