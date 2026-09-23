// Module ID: 14337
// Function ID: 14338
// Name: AgeKeyReturnHandler
// Dependencies: [8758, 8771, 4684, 5030, 2]
// Exports: handleAgeKeyReturn

// Module 14337 (AgeKeyReturnHandler)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4684 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import AgeVerificationCustomTab from "AgeVerificationCustomTab" /* 8771 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 8758 */;
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
      const result1 = tmp3(8771).releaseAgeVerificationCustomTab();
      const tmp3Result = tmp3(8771);
      if (tmp3Result3.isModalOpen(React3)) {
        ModalActionCreatorsDefault.pop();
      }
      tmp3Result3 = tmp3(4684);
    }
    obj2 = AgeVerificationCustomTab;
    if (tmp3Result4.isModalOpen(React4)) {
      ModalActionCreatorsDefault.pop();
      ModalActionCreatorsDefault.pop();
    }
    tmp3Result4 = NavigationRouteUtils;
  }
};
