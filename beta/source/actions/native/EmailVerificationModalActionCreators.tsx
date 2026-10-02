// Module ID: 5930
// Function ID: 5931
// Name: EmailVerificationModalActionCreators
// Dependencies: [1086, 1253, 5040, 5931, 1987, 585, 2]

// Module 5930 (EmailVerificationModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
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
    obj2.pushLazy(asyncRequire(5931, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(EMAIL_VERIFICATION_MODAL_KEY);
    });
  }
};
const result = size.fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default obj;
