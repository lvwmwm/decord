// Module ID: 9219
// Function ID: 72135
// Name: setChangeEmailError
// Dependencies: [621, 682, 2]
// Exports: resetChangeEmailStore, setEmailToken, useChangeEmailError

// Module 9219 (setChangeEmailError)
import keys from "keys";

function setChangeEmailError(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  _require(682).batchUpdates(() => outer1_3.setState((errors) => {
    let obj = {};
    obj = {};
    const merged = Object.assign(errors.errors);
    obj[outer1_0] = outer1_1;
    obj.errors = obj;
    return obj;
  }));
}
let closure_2 = { errors: null, emailToken: null };
let obj = keys.create(() => closure_2);
const result = require("set").fileFinishedImporting("modules/verification/ChangeEmailStore.tsx");

export const ChangeEmailFields = { EMAIL: "email", EMAIL_TOKEN: "email_token", PASSWORD: "password" };
export const useChangeEmailStore = obj;
export { setChangeEmailError };
export const useChangeEmailError = function useChangeEmailError(arg0) {
  let closure_0 = arg0;
  const items = [
    obj((errors) => {
      errors = errors.errors;
      let tmp;
      if (null != errors) {
        tmp = errors[closure_0];
      }
      return tmp;
    }),
    (arg0) => {
      outer1_4(closure_0, arg0);
    }
  ];
  return items;
};
export const setEmailToken = function setEmailToken(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_3.setState({ emailToken: closure_0 }));
};
export const resetChangeEmailStore = function resetChangeEmailStore() {
  require(682) /* batchUpdates */.batchUpdates(() => outer1_3.setState(outer1_2, true));
};
