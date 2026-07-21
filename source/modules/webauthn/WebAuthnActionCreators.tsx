// Module ID: 5592
// Function ID: 47477
// Name: _fetchWebAuthnConditionalChallenge
// Dependencies: []
// Exports: clearWebAuthnRegisterTrigger, deleteWebAuthnCredential, editWebAuthnCredential, fetchWebAuthnConditionalChallenge, fetchWebAuthnCredentials, fetchWebAuthnPasswordlessChallenge, finishRegisterWebAuthnCredential, startRegisterWebAuthnCredential, triggerWebAuthnRegister

// Module 5592 (_fetchWebAuthnConditionalChallenge)
async function _fetchWebAuthnConditionalChallenge() {
  const HTTP = callback(closure_2[2]).HTTP;
  let obj = { url: constants.WEBAUTHN_CONDITIONAL_UI_CHALLENGE, headers: { authorization: "" }, rejectWithError: true };
  const body = yield HTTP.post(obj).body;
  obj = { challenge: body.challenge, ticket: body.ticket };
  return obj;
}
async function _fetchWebAuthnPasswordlessChallenge() {
  const HTTP = callback(closure_2[2]).HTTP;
  let obj = { url: constants.WEBAUTHN_PASSWORDLESS_CHALLENGE, rejectWithError: true };
  const body = yield HTTP.post(obj).body;
  obj = { challenge: body.challenge, ticket: body.ticket };
  return obj;
}
async function _deleteWebAuthnCredential(id, arg1) {
  const HTTP = id(closure_2[2]).HTTP;
  const obj = { url: closure_4.MFA_WEBAUTHN_CREDENTIAL(id.id), rejectWithError: true };
  return yield HTTP.del({ url: closure_4.MFA_WEBAUTHN_CREDENTIAL(id.id), rejectWithError: true }).then(() => {
    let obj = callback(closure_2[3]);
    obj = { type: "AUTHENTICATOR_DELETE", credential: arg0 };
    obj.dispatch(obj);
  });
}
async function _editWebAuthnCredential(id, name, arg2) {
  const HTTP = callback(closure_2[2]).HTTP;
  let obj = { url: closure_4.MFA_WEBAUTHN_CREDENTIAL(id), body: obj, rejectWithError: false };
  obj = { name };
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
    callback2(closure_2[3]).dispatch(obj1);
    const obj4 = callback2(closure_2[3]);
  }
}
async function _startRegisterWebAuthnCredential() {
  const HTTP = callback(closure_2[2]).HTTP;
  let obj = { url: constants.MFA_WEBAUTHN_CREDENTIALS, body: {}, rejectWithError: false };
  const body = yield HTTP.post(obj).body;
  obj = { ticket: body.ticket, challenge: body.challenge };
  return obj;
}
async function _finishRegisterWebAuthnCredential(name, ticket, credential, arg3) {
  let obj = callback2(closure_2[4]);
  obj = { url: constants.MFA_WEBAUTHN_CREDENTIALS, body: obj };
  obj = { name, ticket, credential, trackedActionData: { event: callback(closure_2[5]).NetworkActionNames.WEBAUTHN_REGISTER }, rejectWithError: true };
  const tmp = yield obj.post(obj);
  const obj1 = { event: callback(closure_2[5]).NetworkActionNames.WEBAUTHN_REGISTER };
  callback2(closure_2[3]).dispatch({ type: "AUTHENTICATOR_CREATE", credential: tmp.body });
  const obj2 = { type: "AUTHENTICATOR_CREATE", credential: tmp.body };
  const obj5 = callback2(closure_2[3]);
  callback2(closure_2[3]).dispatch({ type: "MFA_ENABLE_SUCCESS", codes: tmp.body.backup_codes });
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/webauthn/WebAuthnActionCreators.tsx");

export const fetchWebAuthnConditionalChallenge = function fetchWebAuthnConditionalChallenge() {
  return _fetchWebAuthnConditionalChallenge(...arguments);
};
export const fetchWebAuthnPasswordlessChallenge = function fetchWebAuthnPasswordlessChallenge() {
  return _fetchWebAuthnPasswordlessChallenge(...arguments);
};
export const fetchWebAuthnCredentials = function fetchWebAuthnCredentials() {
  const HTTP = arg1(dependencyMap[2]).HTTP;
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
      let obj = callback(closure_2[3]);
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
  importDefault(dependencyMap[3]).dispatch({ type: "WEBAUTHN_TRIGGER_REGISTER" });
};
export const clearWebAuthnRegisterTrigger = function clearWebAuthnRegisterTrigger() {
  importDefault(dependencyMap[3]).dispatch({ type: "WEBAUTHN_CLEAR_REGISTER_TRIGGER" });
};
