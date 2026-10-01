// Module ID: 1363
// Function ID: 1364
// Name: react-native
// Dependencies: [1343, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1363 (react-native)
import react_nativeDefault from "react-native" /* 1343 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  const obj = react_nativeDefault;
  return obj.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6550";
  if (items.includes("6550")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6550" + ")";
  }
  return str;
};
