// Module ID: 13809
// Function ID: 105847
// Name: handleRequestSuccess
// Dependencies: [653, 686, 1212, 507, 2]
// Exports: fetchConsents, setConsents

// Module 13809 (handleRequestSuccess)
import { Endpoints } from "ME";

function handleRequestSuccess(body) {
  if (tmp) {
    let obj = importDefault(686);
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
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let message = intl2.string(require(1212) /* getSystemLocale */.t.cvJdtg);
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
  const intl = require(1212) /* getSystemLocale */.intl;
  message = intl.string(require(1212) /* getSystemLocale */.t.cvJdtg);
}
const result = require("getSystemLocale").fileFinishedImporting("actions/ConsentActionCreators.tsx");

export const fetchConsents = function fetchConsents() {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: Endpoints.SETTINGS_CONSENT, oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then(handleRequestSuccess, (body) => {
    const error = new Error(body.body.message);
    return Promise.reject(error);
  });
};
export const setConsents = function setConsents(items, items2) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: Endpoints.SETTINGS_CONSENT, body: obj, oldFormErrors: true };
  obj = { grant: items, revoke: items2, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
  const obj3 = require(507) /* _isNativeReflectConstruct */;
  return HTTP.post(obj).then(handleRequestSuccess, handleRequestFailure);
};
