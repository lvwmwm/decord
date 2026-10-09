// Module ID: 1381
// Function ID: 1382
// Name: react-native
// Dependencies: [1367, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1381 (react-native)
import react_nativeDefault from "react-native" /* 1367 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  const obj = react_nativeDefault;
  return obj.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "35020300000000";
  if (items.includes("35020300000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35020300000000" + ")";
  }
  return str;
};
