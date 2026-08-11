// Module ID: 1896
// Function ID: 1897
// Name: getDevicePixelRatio
// Dependencies: [17, 2]
// Exports: default

// Module 1896 (getDevicePixelRatio)
import { PixelRatio } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  let num = PixelRatio.get();
  if (num == null) {
    num = 1;
  }
  return num;
};
