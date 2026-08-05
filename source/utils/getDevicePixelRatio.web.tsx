// Module ID: 9146
// Function ID: 9147
// Name: getDevicePixelRatio
// Dependencies: [2]
// Exports: default

// Module 9146 (getDevicePixelRatio)
const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = window.devicePixelRatio;
  if (num == null) {
    num = 1;
  }
  return num;
};
