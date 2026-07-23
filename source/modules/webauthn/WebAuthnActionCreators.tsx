// Module ID: 5594
// Function ID: 47516
// Name: _fetchWebAuthnConditionalChallenge
// Dependencies: [5, 653, 507, 686, 4942, 640, 2]
// Exports: clearWebAuthnRegisterTrigger, deleteWebAuthnCredential, editWebAuthnCredential, fetchWebAuthnConditionalChallenge, fetchWebAuthnCredentials, fetchWebAuthnPasswordlessChallenge, finishRegisterWebAuthnCredential, startRegisterWebAuthnCredential, triggerWebAuthnRegister

// Module 5594 (_fetchWebAuthnConditionalChallenge)
import ImpressionNames from "ImpressionNames";
import { Endpoints } from "ME";

const require = arg1;
async function _fetchWebAuthnConditionalChallenge() {
  const HTTP = outer2_0(outer2_2[2]).HTTP;
  let obj = { url: outer2_4.WEBAUTHN_CONDITIONAL_UI_CHALLENGE, headers: { authorization: "" }, rejectWithError: true };
  const body = yield HTTP.post(obj).body;
  obj = { challenge: body.challenge, ticket: body.ticket };
  return obj;
}
async function _fetchWebAuthnPasswordlessChallenge() {
  const HTTP = outer2_0(outer2_2[2]).HTTP;
  let obj = { url: outer2_4.WEBAUTHN_PASSWORDLESS_CHALLENGE, rejectWithError: true };
  const body = yield HTTP.post(obj).body;
  obj = { challenge: body.challenge, ticket: body.ticket };
  return obj;
}
async function _deleteWebAuthnCredential(arg0, arg1) {
  let closure_0 = arg0;
  const HTTP = outer2_0(outer2_2[2]).HTTP;
  let obj = { url: outer2_4.MFA_WEBAUTHN_CREDENTIAL(arg0.id), rejectWithError: true };
  return yield HTTP.del({ url: outer2_4.MFA_WEBAUTHN_CREDENTIAL(arg0.id), rejectWithError: true }).then(() => {
    let obj = outer3_1(outer3_2[3]);
    obj = { type: "AUTHENTICATOR_DELETE", credential: closure_0 };
    obj.dispatch(obj);
  });
}
async function _editWebAuthnCredential(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[2]).HTTP;
  obj = { url: outer2_4.MFA_WEBAUTHN_CREDENTIAL(arg0), body: obj, rejectWithError: false };
  obj = { name: arg1 };
  const tmp = yield HTTP.patch(obj);
  if (null != tmp.body) {
    const body = tmp.body;
    let date = null;
    if (null != body.last_used) {
      const _Date = Date;
      date = new Date(body.last_used);
    }
    obj = {};
    const merged = Object.assign(body);
    obj["last_used"] = date;
    const obj1 = { type: "AUTHENTICATOR_UPDATE", credential: obj };
    outer2_1(outer2_2[3]).dispatch(obj1);
    const obj4 = outer2_1(outer2_2[3]);
  }
}
async function _startRegisterWebAuthnCredential() {
  const HTTP = outer2_0(outer2_2[2]).HTTP;
  let obj = { url: outer2_4.MFA_WEBAUTHN_CREDENTIALS, body: {}, rejectWithError: false };
  const body = yield HTTP.post(obj).body;
  obj = { ticket: body.ticket, challenge: body.challenge };
  return obj;
}
async function _finishRegisterWebAuthnCredential(arg0, arg1, arg2, arg3) {
  let obj = outer2_1(outer2_2[4]);
  obj = { url: outer2_4.MFA_WEBAUTHN_CREDENTIALS, body: obj };
  obj = { name: arg0, ticket: arg1, credential: arg2, trackedActionData: { event: outer2_0(outer2_2[5]).NetworkActionNames.WEBAUTHN_REGISTER }, rejectWithError: true };
  const tmp = yield obj.post(obj);
  const obj1 = { event: outer2_0(outer2_2[5]).NetworkActionNames.WEBAUTHN_REGISTER };
  outer2_1(outer2_2[3]).dispatch({ type: "AUTHENTICATOR_CREATE", credential: tmp.body });
  const obj2 = { type: "AUTHENTICATOR_CREATE", credential: tmp.body };
  const obj5 = outer2_1(outer2_2[3]);
  outer2_1(outer2_2[3]).dispatch({ type: "MFA_ENABLE_SUCCESS", codes: tmp.body.backup_codes });
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/webauthn/WebAuthnActionCreators.tsx");

export const fetchWebAuthnConditionalChallenge = function fetchWebAuthnConditionalChallenge() {
  return _fetchWebAuthnConditionalChallenge(...arguments);
};
export const fetchWebAuthnPasswordlessChallenge = function fetchWebAuthnPasswordlessChallenge() {
  return _fetchWebAuthnPasswordlessChallenge(...arguments);
};
export const fetchWebAuthnCredentials = function fetchWebAuthnCredentials() {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const value = HTTP.get({ url: Endpoints.MFA_WEBAUTHN_CREDENTIALS, rejectWithError: true });
  value.then((body) => {
    if (null != body.body) {
      body = body.body;
      const mapped = body.map((last_used) => {
        let date = null;
        if (null != last_used.last_used) {
          const _Date = Date;
          date = new Date(last_used.last_used);
        }
        const obj = {};
        const merged = Object.assign(last_used);
        obj["last_used"] = date;
        return obj;
      });
      let obj = outer1_1(outer1_2[3]);
      obj = { type: "MFA_WEBAUTHN_CREDENTIALS_LOADED", credentials: mapped };
      obj.dispatch(obj);
    }
  });
};
export const deleteWebAuthnCredential = function deleteWebAuthnCredential(credential) {
  return _deleteWebAuthnCredential(...arguments);
};
export const editWebAuthnCredential = function editWebAuthnCredential(id, first1) {
  return _editWebAuthnCredential(...arguments);
};
export const startRegisterWebAuthnCredential = function startRegisterWebAuthnCredential() {
  return _startRegisterWebAuthnCredential(...arguments);
};
export const finishRegisterWebAuthnCredential = function finishRegisterWebAuthnCredential(intl, ticket, credential) {
  return _finishRegisterWebAuthnCredential(...arguments);
};
export const triggerWebAuthnRegister = function triggerWebAuthnRegister() {
  importDefault(686).dispatch({ type: "WEBAUTHN_TRIGGER_REGISTER" });
};
export const clearWebAuthnRegisterTrigger = function clearWebAuthnRegisterTrigger() {
  importDefault(686).dispatch({ type: "WEBAUTHN_CLEAR_REGISTER_TRIGGER" });
};
