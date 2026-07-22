// Module ID: 9176
// Function ID: 71885
// Name: setChangeEmailError
// Dependencies: []
// Exports: resetChangeEmailStore, setEmailToken, useChangeEmailError

// Module 9176 (setChangeEmailError)
function setChangeEmailError(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  require(dependencyMap[1]).batchUpdates(() => state.setState((errors) => {
    let obj = {};
    obj = {};
    const merged = Object.assign(errors.errors);
    obj[closure_0] = closure_1;
    obj.errors = obj;
    return obj;
  }));
}
let closure_2 = { sectionsId: "o", sectionStart: "o" };
const _module = require(dependencyMap[0]);
const obj = _module.create(() => closure_2);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/verification/ChangeEmailStore.tsx");

export const ChangeEmailFields = { EMAIL: "email", EMAIL_TOKEN: "email_token", PASSWORD: "password" };
export const useChangeEmailStore = obj;
export { setChangeEmailError };
export const useChangeEmailError = function useChangeEmailError(arg0) {
  const require = arg0;
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
      callback(arg0, arg0);
    }
  ];
  return items;
};
export const setEmailToken = function setEmailToken(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => state.setState({ emailToken: arg0 }));
};
export const resetChangeEmailStore = function resetChangeEmailStore() {
  require(dependencyMap[1]).batchUpdates(() => state.setState(closure_2, true));
};
