// Module ID: 1369
// Function ID: 1370
// Name: react-native
// Dependencies: [1355, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1369 (react-native)
import react_nativeDefault from "react-native" /* 1355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  const obj = react_nativeDefault;
  return obj.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6563";
  if (items.includes("6563")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6563" + ")";
  }
  return str;
};
