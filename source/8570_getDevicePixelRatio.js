// Module ID: 8570
// Function ID: 68096
// Name: getDevicePixelRatio
// Dependencies: []
// Exports: default

// Module 8570 (getDevicePixelRatio)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/getDevicePixelRatio.web.tsx");

export default function getDevicePixelRatio() {
  let num = 1;
  if (null != devicePixelRatio) {
    num = devicePixelRatio;
  }
  return num;
};
