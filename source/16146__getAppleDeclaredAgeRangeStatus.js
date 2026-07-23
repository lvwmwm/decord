// Module ID: 16146
// Function ID: 125173
// Name: _getAppleDeclaredAgeRangeStatus
// Dependencies: [5, 27, 3862, 16147, 16148, 16149]
// Exports: getAppleDeclaredAgeRangeStatus, setAgeRangeThresholds

// Module 16146 (_getAppleDeclaredAgeRangeStatus)
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
  const ageRangeThresholdManager = require(16147) /* AgeRangeThresholdManager */.ageRangeThresholdManager;
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
