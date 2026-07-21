// Module ID: 13635
// Function ID: 103312
// Name: handleRequestSuccess
// Dependencies: []
// Exports: fetchConsents, setConsents

// Module 13635 (handleRequestSuccess)
function handleRequestSuccess(body) {
  if (tmp) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "UPDATE_CONSENTS" };
    obj = {};
    const merged = Object.assign(body.body);
    obj.consents = obj;
    obj.dispatch(obj);
  }
  return body.body;
}
function handleRequestFailure(status) {
  if (status.status >= 500) {
    if (status.status <= 599) {
      const intl2 = require(dependencyMap[2]).intl;
      let message = intl2.string(require(dependencyMap[2]).t.cvJdtg);
    }
    const _Error = Error;
    const error = new Error(message);
    throw error;
  }
  if (null != status) {
    if (null != status.body) {
      if (null != status.body.message) {
        message = status.body.message;
      }
    }
  }
  const intl = require(dependencyMap[2]).intl;
  message = intl.string(require(dependencyMap[2]).t.cvJdtg);
}
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("actions/ConsentActionCreators.tsx");

export const fetchConsents = function fetchConsents() {
  const HTTP = require(dependencyMap[3]).HTTP;
  const obj = { url: Endpoints.SETTINGS_CONSENT, oldFormErrors: true, rejectWithError: require(dependencyMap[3]).rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then(handleRequestSuccess, (body) => {
    const error = new Error(body.body.message);
    return Promise.reject(error);
  });
};
export const setConsents = function setConsents(items, items2) {
  const HTTP = require(dependencyMap[3]).HTTP;
  let obj = { url: Endpoints.SETTINGS_CONSENT, body: obj, oldFormErrors: true };
  obj = { grant: items, revoke: items2, rejectWithError: require(dependencyMap[3]).rejectWithMigratedError() };
  const obj3 = require(dependencyMap[3]);
  return HTTP.post(obj).then(handleRequestSuccess, handleRequestFailure);
};
