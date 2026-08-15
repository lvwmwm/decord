// Module ID: 9514
// Function ID: 9515
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9514 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
