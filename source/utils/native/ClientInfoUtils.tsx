// Module ID: 1554
// Function ID: 17588
// Name: getConstants
// Dependencies: []
// Exports: getBuildNumberLabel, getConstants

// Module 1554 (getConstants)
const NativeModules = require(dependencyMap[0]).NativeModules;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("utils/native/ClientInfoUtils.tsx");

export const getConstants = function getConstants() {
  if (obj.isAndroid()) {
    if (null === importDefault(dependencyMap[2])) {
      const _Error = Error;
      const error = new Error("Turbo module RTNClientInfoManager is undefined for Android");
      throw error;
    } else {
      return importDefault(dependencyMap[2]).getConstants();
    }
  } else {
    const InfoDictionaryManager = NativeModules.InfoDictionaryManager;
    return InfoDictionaryManager.getConstants();
  }
  const obj = require(dependencyMap[1]);
};
export const getBuildNumberLabel = function getBuildNumberLabel() {
  const items = [];
  let str = "6039";
  if (items.includes("6039")) {
    const _HermesInternal = HermesInternal;
    str = "dev (" + "6039" + ")";
  }
  return str;
};
