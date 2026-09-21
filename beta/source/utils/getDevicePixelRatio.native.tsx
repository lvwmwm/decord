// Module ID: 1879
// Function ID: 1880
// Name: getDevicePixelRatio
// Dependencies: [17, 2]
// Exports: default

// Module 1879 (getDevicePixelRatio)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const PixelRatio = _mod17.PixelRatio;
const result = size.fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  let num = PixelRatio.get();
  if (num == null) {
    num = 1;
  }
  return num;
};
