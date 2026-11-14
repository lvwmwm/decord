// Module ID: 18648
// Function ID: 18649
// Name: RegistrationUIStore
// Dependencies: [560, 1263, 2]
// Exports: clearRegistrationErrorMessage, doesRegistrationHaveIdentityType, resetRegistration, setRegistrationErrors, setSubmitting, updateRegistrationOptions

// Module 18648 (RegistrationUIStore)
import react_native from "react-native" /* 1263 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useRegistrationUIStore = module_560.create(() => ({ errors: {}, registrationOptions: {}, submitting: false, registrationVariant: "disabled" }));
const result = size.fileFinishedImporting("modules/auth/native/RegistrationUIStore.tsx");

export { useRegistrationUIStore };
export function setRegistrationErrors(errors) {
  _require = errors;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { errors };
    obj.setState(obj);
  });
}
export function clearRegistrationErrorMessage() {
  errors = {};
  const merged = Object.assign(errors.getState().errors);
  delete errors["message"];
  const obj2 = errors(1263);
  obj2.batchUpdates(() => {
    errors = { errors };
    errors.setState(errors);
  });
}
export function updateRegistrationOptions(arg0) {
  let closure_0;
  let obj;
  _require = arg0;
  const registrationOptions = obj.getState().registrationOptions;
  obj = require("react-native");
  obj.batchUpdates(() => {
    let obj2;
    const obj = { registrationOptions: obj2 };
    const setState = obj.setState;
    obj2 = {};
    const merged = Object.assign(registrationOptions);
    const merged1 = Object.assign(closure_0);
    setState(obj);
  });
}
export function resetRegistration() {
  let state;
  const obj = react_native;
  obj.batchUpdates(() => {
    state.setState({ errors: {}, registrationOptions: {}, submitting: false });
  });
}
export function setSubmitting(submitting) {
  _require = submitting;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { errors: {}, submitting };
    obj.setState(obj);
  });
}
export function doesRegistrationHaveIdentityType() {
  const registrationOptions = obj.getState().registrationOptions;
  return null != registrationOptions.email || null != registrationOptions.phone;
}
