// Module ID: 1825
// Function ID: 20015
// Name: getDevicePixelRatio
// Dependencies: [27, 2]
// Exports: default

// Module 1825 (getDevicePixelRatio)
import { PixelRatio } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  const value = PixelRatio.get();
  let num = 1;
  if (null != value) {
    num = value;
  }
  return num;
};
