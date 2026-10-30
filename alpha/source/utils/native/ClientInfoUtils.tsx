// Module ID: 1375
// Function ID: 1376
// Name: react-native
// Dependencies: [1355, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1375 (react-native)
import react_nativeDefault from "react-native" /* 1355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export function getConstants() {
  const obj = react_nativeDefault;
  return obj.getConstants();
}
export function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "35320400000000";
  if (items.includes("35320400000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35320400000000" + ")";
  }
  return str;
}
