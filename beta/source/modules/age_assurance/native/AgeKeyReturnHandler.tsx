// Module ID: 14288
// Function ID: 14289
// Name: AgeKeyReturnHandler
// Dependencies: [8720, 8733, 4648, 4993, 2]
// Exports: handleAgeKeyReturn

// Module 14288 (AgeKeyReturnHandler)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4648 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import AgeVerificationCustomTab from "AgeVerificationCustomTab" /* 8733 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 8720 */;
import size from "module_2" /* 2 */;

({ AGE_VERIFICATION_GET_STARTED_MODAL_KEY: c3, AGE_VERIFICATION_MODAL_KEY: closure_4 } = AgeVerificationConstants);
const set = new Set();
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeKeyReturnHandler.tsx");

export const handleAgeKeyReturn = function handleAgeKeyReturn(arg0) {
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
  if (!set.has(combined)) {
    set.add(combined);
    if (obj2.getIsAgeVerificationCustomTabOpen()) {
      const result1 = tmp3(8733).releaseAgeVerificationCustomTab();
      const tmp3Result = tmp3(8733);
      if (tmp3Result3.isModalOpen(React3)) {
        ModalActionCreatorsDefault.pop();
      }
      tmp3Result3 = tmp3(4648);
    }
    obj2 = AgeVerificationCustomTab;
    if (tmp3Result4.isModalOpen(React4)) {
      ModalActionCreatorsDefault.pop();
      ModalActionCreatorsDefault.pop();
    }
    tmp3Result4 = NavigationRouteUtils;
  }
};
