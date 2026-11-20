// Module ID: 7222
// Function ID: 7223
// Name: EmailVerificationModalActionCreators
// Dependencies: [1071, 1255, 6310, 7223, 2119, 2]

// Module 7222 (EmailVerificationModalActionCreators)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
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
    obj2.pushLazy(asyncRequire(7223, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(EMAIL_VERIFICATION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default obj;
