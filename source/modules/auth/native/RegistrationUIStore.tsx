// Module ID: 14608
// Function ID: 110148
// Name: useRegistrationUIStore
// Dependencies: []
// Exports: clearRegistrationErrorMessage, doesRegistrationHaveIdentityType, resetRegistration, setRegistrationErrors, setSubmitting, updateRegistrationOptions

// Module 14608 (useRegistrationUIStore)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({ errors: {}, registrationOptions: {}, submitting: false, registrationVariant: undefined }));
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/auth/native/RegistrationUIStore.tsx");

export const useRegistrationUIStore = obj;
export const setRegistrationErrors = function setRegistrationErrors(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState({ errors: arg0 });
  });
};
export const clearRegistrationErrorMessage = function clearRegistrationErrorMessage() {
  const obj = {};
  const merged = Object.assign(obj.getState().errors);
  const require = obj;
  delete r2.message;
  require(dependencyMap[1]).batchUpdates(() => {
    const obj = { errors: obj };
    state.setState(obj);
  });
};
export const updateRegistrationOptions = function updateRegistrationOptions(arg0) {
  const require = arg0;
  const dependencyMap = obj.getState().registrationOptions;
  const obj = require(dependencyMap[1]);
  obj.batchUpdates(() => {
    let obj = {};
    obj = {};
    const merged = Object.assign(registrationOptions);
    const merged1 = Object.assign(arg0);
    obj.registrationOptions = obj;
    state.setState(obj);
  });
};
export const resetRegistration = function resetRegistration() {
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState({ errors: {}, registrationOptions: {}, submitting: false });
  });
};
export const setSubmitting = function setSubmitting(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState({ errors: {}, submitting: arg0 });
  });
};
export const doesRegistrationHaveIdentityType = function doesRegistrationHaveIdentityType() {
  const registrationOptions = obj.getState().registrationOptions;
  return null != registrationOptions.email || null != registrationOptions.phone;
};
