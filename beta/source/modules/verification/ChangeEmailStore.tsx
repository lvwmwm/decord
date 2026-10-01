// Module ID: 5935
// Function ID: 5936
// Name: ChangeEmailStore
// Dependencies: [560, 1248, 2]
// Exports: resetChangeEmailStore, setChangeEmailError, setEmailToken, useChangeEmailError

// Module 5935 (ChangeEmailStore)
import react_native from "react-native" /* 1248 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, errors;

const f81205 = () => state.setState((errors) => {
  let obj2;
  const obj = { errors: obj2 };
  obj2 = {};
  const merged = Object.assign(errors.errors);
  obj2[closure_1_0] = closure_1_1;
  return obj;
});
let closure_2 = { errors: null, emailToken: null };
const useChangeEmailStore = module_560.create(() => closure_2);
const result = size.fileFinishedImporting("modules/verification/ChangeEmailStore.tsx");

export const ChangeEmailFields = { EMAIL: "email", EMAIL_TOKEN: "email_token", PASSWORD: "password" };
export { useChangeEmailStore };
export const setChangeEmailError = function setChangeEmailError(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react-native");
  obj.batchUpdates(f81205);
};
export const useChangeEmailError = function useChangeEmailError(arg0) {
  let obj;
  let closure_0 = arg0;
  const items = [
    obj((errors) => {
      errors = errors.errors;
      let tmp;
      if (errors != null) {
        tmp = errors[closure_0];
      }
      return tmp;
    }),
    (arg0) => {
      let state;
      let closure_1 = arg0;
      let obj = react_native;
      obj.batchUpdates(f81205);
    }
  ];
  return items;
};
export const setEmailToken = function setEmailToken(emailToken) {
  _require = emailToken;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { emailToken };
    return obj.setState(obj);
  });
};
export const resetChangeEmailStore = function resetChangeEmailStore() {
  let state;
  const obj = react_native;
  obj.batchUpdates(() => state.setState(closure_1_2, true));
};
