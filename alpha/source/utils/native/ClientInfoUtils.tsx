// Module ID: 1377
// Function ID: 1378
// Name: react-native
// Dependencies: [1356, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1377 (react-native)
import react_nativeDefault from "react-native" /* 1356 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export function getConstants() {
  const obj = react_nativeDefault;
  return obj.getConstants();
}
export function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "35720200000000";
  if (items.includes("35720200000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35720200000000" + ")";
  }
  return str;
}
