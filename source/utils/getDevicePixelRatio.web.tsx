// Module ID: 9175
// Function ID: 9176
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9175 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
