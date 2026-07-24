// Module ID: 1554
// Function ID: 17595
// Name: getConstants
// Dependencies: [27, 477, 649, 2]
// Exports: getBuildNumberLabel, getConstants

// Module 1554 (getConstants)
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  if (obj.isAndroid()) {
    if (null === importDefault(649)) {
      const _Error = Error;
      const error = new Error("Turbo module RTNClientInfoManager is undefined for Android");
      throw error;
    } else {
      return importDefault(649).getConstants();
    }
  } else {
    const InfoDictionaryManager = NativeModules.InfoDictionaryManager;
    return InfoDictionaryManager.getConstants();
  }
  obj = require(477) /* set */;
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = ["0", "123456", "1234567890"];
  let str = "6065";
  if (items.includes("6065")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6065" + ")";
  }
  return str;
};
