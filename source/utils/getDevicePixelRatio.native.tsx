// Module ID: 1894
// Function ID: 1895
// Name: getDevicePixelRatio
// Dependencies: [17, 2]
// Exports: default

// Module 1894 (getDevicePixelRatio)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const PixelRatio = get_ActivityIndicator.PixelRatio;
const result = set.fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  let num = PixelRatio.get();
  if (num == null) {
    num = 1;
  }
  return num;
};
