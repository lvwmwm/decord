// Module ID: 1892
// Function ID: 1893
// Name: react-native
// Dependencies: [17, 2]
// Exports: default

// Module 1892 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const PixelRatio = react_native.PixelRatio;
const result = size.fileFinishedImporting("utils/getDevicePixelRatio.native.tsx");

export default function getDevicePixelRatio() {
  let num = PixelRatio.get();
  if (num == null) {
    num = 1;
  }
  return num;
};
