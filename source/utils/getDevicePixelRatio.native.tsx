// Module ID: 1849
// Function ID: 1850
// Name: getDevicePixelRatio
// Dependencies: [17, 2]
// Exports: default

// Module 1849 (getDevicePixelRatio)
import { PixelRatio } from "get ActivityIndicator";

const result = require("set").fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  let num = PixelRatio.get();
  if (num == null) {
    num = 1;
  }
  return num;
};
