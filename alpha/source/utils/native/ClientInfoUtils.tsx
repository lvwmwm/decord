// Module ID: 1374
// Function ID: 1375
// Name: react-native
// Dependencies: [1354, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1374 (react-native)
import react_nativeDefault from "react-native" /* 1354 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export function getConstants() {
  const obj = react_nativeDefault;
  return obj.getConstants();
}
export function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "35320500000000";
  if (items.includes("35320500000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35320500000000" + ")";
  }
  return str;
}
