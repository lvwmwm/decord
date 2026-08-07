// Module ID: 8391
// Function ID: 8392
// Dependencies: [676, 698, 4507, 8392, 1988, 709, 2]

// Module 8391
import { AnalyticEvents } from "ME";

const EMAIL_VERIFICATION_MODAL_KEY = "EMAIL_VERIFICATION_MODAL_KEY";
const result = require("module_4507").fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

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
    importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(8392, dependencyMap.paths), { isChangeEmail: flag }, EMAIL_VERIFICATION_MODAL_KEY);
  },
  close() {
    importDefault(709).wait(() => {
      callback(table[2]).popWithKey(closure_4);
    });
  }
};
