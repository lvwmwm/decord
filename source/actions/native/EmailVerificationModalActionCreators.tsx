// Module ID: 8496
// Function ID: 8497
// Dependencies: [676, 698, 4549, 8497, 2007, 709, 2]

// Module 8496
import { AnalyticEvents } from "ME";

const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
const result = require("module_4549").fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

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
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(8497, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    importDefault(709).wait(() => {
      callback(table[2]).popWithKey(closure_4);
    });
  }
};
