// Module ID: 2023
// Function ID: 2024
// Name: react-native
// Dependencies: [17, 2]
// Exports: default

// Module 2023 (react-native)
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
