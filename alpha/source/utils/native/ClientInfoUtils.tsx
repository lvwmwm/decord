// Module ID: 1376
// Function ID: 1377
// Name: react-native
// Dependencies: [1355, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1376 (react-native)
import react_nativeDefault from "react-native" /* 1355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export function getConstants() {
  const obj = react_nativeDefault;
  return obj.getConstants();
}
export function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "35420300000000";
  if (items.includes("35420300000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35420300000000" + ")";
  }
  return str;
}
