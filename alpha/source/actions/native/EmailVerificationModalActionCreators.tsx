// Module ID: 6919
// Function ID: 6920
// Name: EmailVerificationModalActionCreators
// Dependencies: [1087, 1267, 6670, 6920, 2002, 2]

// Module 6919 (EmailVerificationModalActionCreators)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
let obj = {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
    }
    const obj2 = ModalActionCreatorsDefault;
    obj2.pushLazy(asyncRequire(6920, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(EMAIL_VERIFICATION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default obj;
