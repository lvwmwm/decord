// Module ID: 9217
// Function ID: 72117
// Dependencies: [653, 675, 4337, 9218, 1934, 686, 2]

// Module 9217
import { AnalyticEvents } from "ME";

const result = require("module_4337").fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      let obj = importDefault(675);
      obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
    }
    obj = { isChangeEmail: flag };
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(9218, dependencyMap.paths), obj, "EMAIL_VERIFICATION_MODAL_KEY");
  },
  close() {
    importDefault(686).wait(() => {
      outer1_1(outer1_2[2]).popWithKey("EMAIL_VERIFICATION_MODAL_KEY");
    });
  }
};
