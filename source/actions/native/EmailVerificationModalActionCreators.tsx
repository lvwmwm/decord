// Module ID: 8522
// Function ID: 8523
// Dependencies: [676, 698, 4572, 8523, 2007, 709, 2]

// Module 8522
import { AnalyticEvents } from "ME";

const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
const result = require("module_4572").fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      importDefault(698).track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
      const obj = importDefault(698);
    }
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(8523, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    importDefault(709).wait(() => {
      callback(table[2]).popWithKey(closure_4);
    });
  }
};
