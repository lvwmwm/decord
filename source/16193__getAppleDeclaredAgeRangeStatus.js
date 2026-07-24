// Module ID: 16193
// Function ID: 125497
// Name: _getAppleDeclaredAgeRangeStatus
// Dependencies: [5, 27, 3862, 16194, 16195, 16196]
// Exports: getAppleDeclaredAgeRangeStatus, setAgeRangeThresholds

// Module 16193 (_getAppleDeclaredAgeRangeStatus)
import PlayAgeRangeDeclarationUserStatus from "PlayAgeRangeDeclarationUserStatus";
import { Platform } from "get ActivityIndicator";
import { NitroModules } from "module_3862";

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
  const ageRangeThresholdManager = require(16194) /* AgeRangeThresholdManager */.ageRangeThresholdManager;
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
