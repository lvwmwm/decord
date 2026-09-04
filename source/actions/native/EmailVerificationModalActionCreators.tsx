// Module ID: 5576
// Function ID: 5577
// Dependencies: [673, 695, 4731, 5577, 2008, 706, 2]

// Module 5576
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const AnalyticEvents = ME.AnalyticEvents;
const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
const result = set.fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      expandEventPropertiesDefault.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
      const obj = expandEventPropertiesDefault;
    }
    _modDef4731.pushLazy(asyncRequireImpl(5577, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    dispatcherDefault.wait(() => {
      callback(table[2]).popWithKey(closure_4);
    });
  }
};
