// Module ID: 9177
// Function ID: 9178
// Dependencies: [676, 698, 4395, 9178, 1959, 709, 2]

// Module 9177
import { AnalyticEvents } from "ME";

const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
const result = require("module_4395").fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

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
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(9178, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    importDefault(709).wait(() => {
      callback(table[2]).popWithKey(closure_4);
    });
  }
};
