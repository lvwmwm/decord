// Module ID: 9173
// Function ID: 71843
// Dependencies: []

// Module 9173
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("actions/native/EmailVerificationModalActionCreators.tsx");

export default {
  open() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    if (flag) {
      let obj = importDefault(dependencyMap[1]);
      obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED);
    }
    obj = { isChangeEmail: flag };
    importDefault(dependencyMap[2]).pushLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), obj, "EMAIL_VERIFICATION_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[5]).wait(() => {
      callback(closure_2[2]).popWithKey("EMAIL_VERIFICATION_MODAL_KEY");
    });
  }
};
