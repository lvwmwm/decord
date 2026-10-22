// Module ID: 15170
// Function ID: 15171
// Name: AgeKeyReturnHandler
// Dependencies: [6642, 7900, 5136, 6658, 2]
// Exports: handleAgeKeyReturn

// Module 15170 (AgeKeyReturnHandler)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5136 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import AgeVerificationCustomTab from "AgeVerificationCustomTab" /* 7900 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 6642 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ AGE_VERIFICATION_GET_STARTED_MODAL_KEY: c3, AGE_VERIFICATION_MODAL_KEY: closure_4 } = AgeVerificationConstants);
const set = new Set();
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeKeyReturnHandler.tsx");

export const handleAgeKeyReturn = function handleAgeKeyReturn(arg0) {
  let ageKeySaved;
  let result;
  let verificationId;
  ({ result, ageKeySaved, verificationId } = arg0);
  if (verificationId == null) {
    verificationId = "";
  }
  if (result == null) {
    result = "";
  }
  if (ageKeySaved == null) {
    ageKeySaved = "";
  }
  const combined = "" + verificationId + ":" + result + ":" + ageKeySaved;
  const obj = set;
  if (!set.has(combined)) {
    obj.add(combined);
    const obj2 = AgeVerificationCustomTab;
    if (obj2.getIsAgeVerificationCustomTabOpen()) {
      const tmp3Result = AgeVerificationCustomTab;
      const result1 = tmp3Result.releaseAgeVerificationCustomTab();
      const tmp3Result3 = NavigationRouteUtils;
      if (tmp3Result3.isModalOpen(_false)) {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
    const tmp3Result4 = NavigationRouteUtils;
    if (tmp3Result4.isModalOpen(React3)) {
      const arr2 = ModalActionCreatorsDefault;
      arr2.pop();
      const arr3 = ModalActionCreatorsDefault;
      arr3.pop();
    }
  }
};
