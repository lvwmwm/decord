// Module ID: 13728
// Function ID: 13729
// Name: AgeKeyReturnHandler
// Dependencies: [8044, 8059, 4721, 5048, 2]
// Exports: handleAgeKeyReturn

// Module 13728 (AgeKeyReturnHandler)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4721 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import AgeVerificationCustomTab from "AgeVerificationCustomTab" /* 8059 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 8044 */;
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
      const result1 = tmp3(8059).releaseAgeVerificationCustomTab();
      const tmp3Result = tmp3(8059);
      if (tmp3Result3.isModalOpen(React3)) {
        ModalActionCreatorsDefault.pop();
      }
      tmp3Result3 = tmp3(4721);
    }
    obj2 = AgeVerificationCustomTab;
    if (tmp3Result4.isModalOpen(React4)) {
      ModalActionCreatorsDefault.pop();
      ModalActionCreatorsDefault.pop();
    }
    tmp3Result4 = NavigationRouteUtils;
  }
};
