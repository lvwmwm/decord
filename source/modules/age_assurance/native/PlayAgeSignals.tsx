// Module ID: 16191
// Function ID: 125490
// Name: _getAgeSignals
// Dependencies: [5, 16192, 2]
// Exports: getAgeSignals, isConsideredOlderThan

// Module 16191 (_getAgeSignals)
import asyncGeneratorStep from "asyncGeneratorStep";

function _getAgeSignals() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let obj = { VERIFIED: 0, SUPERVISED: 1, SUPERVISED_APPROVAL_PENDING: 2, SUPERVISED_APPROVAL_DENIED: 3, UNKNOWN: 4, DECLARED: 5 };
const result = require("set").fileFinishedImporting("modules/age_assurance/native/PlayAgeSignals.tsx");

export const AgeSignalsVerificationStatus = obj;
export const getAgeSignals = function getAgeSignals() {
  return _getAgeSignals(...arguments);
};
export const isConsideredOlderThan = function isConsideredOlderThan(userStatus, arg1) {
  if (null == userStatus.userStatus) {
    return true;
  } else {
    userStatus = userStatus.userStatus;
    if (obj.VERIFIED === userStatus) {
      return true;
    } else {
      if (obj.SUPERVISED !== userStatus) {
        if (obj.SUPERVISED_APPROVAL_PENDING !== userStatus) {
          if (obj.SUPERVISED_APPROVAL_DENIED !== userStatus) {
            return false;
          }
        }
      }
      let tmp5 = null != userStatus.ageLower;
      if (tmp5) {
        tmp5 = userStatus.ageLower >= arg1;
      }
      return tmp5;
    }
  }
};
