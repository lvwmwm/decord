// Module ID: 8574
// Function ID: 68108
// Name: getDevicePixelRatio
// Dependencies: [284214097]
// Exports: default

// Module 8574 (getDevicePixelRatio)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = 1;
  if (null != devicePixelRatio) {
    num = devicePixelRatio;
  }
  return num;
};
