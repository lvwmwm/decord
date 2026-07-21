// Module ID: 16019
// Function ID: 122951
// Name: _getAgeSignals
// Dependencies: []
// Exports: getAgeSignals, isConsideredOlderThan

// Module 16019 (_getAgeSignals)
function _getAgeSignals() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getAgeSignals = obj;
  return obj(...arguments);
}
let closure_2 = importDefault(dependencyMap[0]);
const obj = { variant: "center", size: "flex-start", text: "flex", icon: "row", iconPosition: 8, flexDirection: "wrap" };
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/age_assurance/native/PlayAgeSignals.tsx");

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
