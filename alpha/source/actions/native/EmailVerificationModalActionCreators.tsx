// Module ID: 7086
// Function ID: 7087
// Name: EmailVerificationModalActionCreators
// Dependencies: [1072, 1252, 6824, 7087, 2118, 2]

// Module 7086 (EmailVerificationModalActionCreators)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
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
    obj2.pushLazy(asyncRequire(7087, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(EMAIL_VERIFICATION_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default obj;
