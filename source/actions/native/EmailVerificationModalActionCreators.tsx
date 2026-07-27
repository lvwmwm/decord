// Module ID: 9109
// Function ID: 71603
// Dependencies: [653, 675, 4338, 9110, 1935, 686, 2]

// Module 9109
import { AnalyticEvents } from "ME";

const result = require("module_4338").fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

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
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(9110, dependencyMap.paths), obj, "EMAIL_VERIFICATION_MODAL_KEY");
  },
  close() {
    importDefault(686).wait(() => {
      outer1_1(outer1_2[2]).popWithKey("EMAIL_VERIFICATION_MODAL_KEY");
    });
  }
};
