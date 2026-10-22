// Module ID: 1383
// Function ID: 1384
// Name: react-native
// Dependencies: [1369, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1383 (react-native)
import react_nativeDefault from "react-native" /* 1369 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  const obj = react_nativeDefault;
  return obj.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "35220400000000";
  if (items.includes("35220400000000")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "35220400000000" + ")";
  }
  return str;
};
