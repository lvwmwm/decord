// Module ID: 1367
// Function ID: 1368
// Name: ClientInfoUtils
// Dependencies: [1347, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1367 (ClientInfoUtils)
import NativeClientInfoModuleDefault from "NativeClientInfoModule" /* 1347 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  return NativeClientInfoModuleDefault.getConstants();
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6505";
  if (items.includes("6505")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6505" + ")";
  }
  return str;
};
