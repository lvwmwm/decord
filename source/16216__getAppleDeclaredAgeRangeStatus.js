// Module ID: 16216
// Function ID: 125712
// Name: _getAppleDeclaredAgeRangeStatus
// Dependencies: [5, 27, 3863, 16217, 16218, 16219]
// Exports: getAppleDeclaredAgeRangeStatus, setAgeRangeThresholds

// Module 16216 (_getAppleDeclaredAgeRangeStatus)
import PlayAgeRangeDeclarationUserStatus from "PlayAgeRangeDeclarationUserStatus";
import { Platform } from "get ActivityIndicator";
import { NitroModules } from "module_3863";

const require = arg1;
function _getAppleDeclaredAgeRangeStatus() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function getAndroidPlayAgeRangeStatus() {
  return _getAndroidPlayAgeRangeStatus(...arguments);
}
function _getAndroidPlayAgeRangeStatus() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let closure_3 = NitroModules.createHybridObject("PlayAgeRangeDeclaration");

export const getAppleDeclaredAgeRangeStatus = function getAppleDeclaredAgeRangeStatus() {
  return _getAppleDeclaredAgeRangeStatus(...arguments);
};
export { getAndroidPlayAgeRangeStatus };
export const setAgeRangeThresholds = function setAgeRangeThresholds(arg0) {
  const ageRangeThresholdManager = require(16217) /* AgeRangeThresholdManager */.ageRangeThresholdManager;
  const result = ageRangeThresholdManager.setAgeRangeThresholds(arg0);
};
export const getIsConsideredOlderThan = (() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function getIsConsideredOlderThan(arg0) {
    return callback(...arguments);
  };
})();
export const PlayAgeRangeDeclarationUserStatus = require("PlayAgeRangeDeclarationUserStatus").PlayAgeRangeDeclarationUserStatus;
export const PlayAgeRangeDeclarationUserStatusString = require("PlayAgeRangeDeclarationUserStatus").PlayAgeRangeDeclarationUserStatusString;
