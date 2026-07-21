// Module ID: 1825
// Function ID: 20013
// Name: getDevicePixelRatio
// Dependencies: []
// Exports: default

// Module 1825 (getDevicePixelRatio)
const PixelRatio = require(dependencyMap[0]).PixelRatio;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  const value = PixelRatio.get();
  let num = 1;
  if (null != value) {
    num = value;
  }
  return num;
};
