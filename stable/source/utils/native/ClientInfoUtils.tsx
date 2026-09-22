// Module ID: 1362
// Function ID: 1363
// Name: ClientInfoUtils
// Dependencies: [1342, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1362 (ClientInfoUtils)
import NativeClientInfoModuleDefault from "NativeClientInfoModule" /* 1342 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6461";
  if (items.includes("6461")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6461" + ")";
  }
  return str;
};
