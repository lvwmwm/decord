// Module ID: 7536
// Function ID: 60296
// Name: requestAgeVerification
// Dependencies: []
// Exports: getAgeVerificationMethods, registerIncodeInterview, requestIncodeMethodSession, requestIncodeSessionBootstrap

// Module 7536 (requestAgeVerification)
function requestAgeVerification(arg0) {
  return _requestAgeVerification(...arguments);
}
async function _requestAgeVerification(arg0, arg1) {
  const fn = function*(arg0) {
    let classificationId;
    let method;
    let vendor;
    ({ method, classificationId, vendor } = arg0);
    yield undefined;
    let obj = callback(closure_2[4]);
    if (obj.isCurrentUserSuspended()) {
      obj = { classificationId, method };
      const tmp7 = yield closure_12(obj);
      return tmp7;
    } else {
      const tmp3 = yield closure_10(method, vendor);
      return tmp3;
    }
  };
  fn.next();
  return fn;
}
async function _requestIncodeMethodSession(method, arg1) {
  let api_url;
  let consent_id;
  let interview_id;
  let session_token;
  let obj = { method, vendor: constants.INCODE };
  let incode_parameters = yield closure_7(obj).incode_parameters;
  if (null == incode_parameters) {
    incode_parameters = {};
  }
  ({ api_url, session_token, consent_id, interview_id } = incode_parameters);
  let tmp = null;
  if (null != api_url) {
    tmp = null;
    if (null != session_token) {
      tmp = null;
      if (null != consent_id) {
        tmp = null;
        if (null != interview_id) {
          obj = { apiUrl: api_url, sessionToken: session_token, consentId: consent_id, interviewId: interview_id };
          tmp = obj;
        }
      }
    }
  }
  return tmp;
}
function initiateAgeVerification(arg0) {
  return _initiateAgeVerification(...arguments);
}
async function _initiateAgeVerification(method, vendor, arg2) {
  const HTTP = callback(closure_2[5]).HTTP;
  let obj = { url: constants.VERIFY_AGE, body: obj, rejectWithError: true };
  obj = { method, vendor };
  return yield HTTP.post(obj).body;
}
function initiateSuspendedUserAgeVerification() {
  return _initiateSuspendedUserAgeVerification(...arguments);
}
async function _initiateSuspendedUserAgeVerification(arg0, arg1) {
  const fn = function*(arg0) {
    let classificationId;
    let method;
    ({ classificationId, method } = arg0);
    yield undefined;
    const suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
    const HTTP = callback(closure_2[5]).HTTP;
    return yield HTTP.post({ url: constants.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION, body: { token: suspendedUserToken, from_classification_id: classificationId, method }, rejectWithError: true }).body;
  };
  fn.next();
  return fn;
}
async function _registerIncodeInterview(interview_id, arg1) {
  const HTTP = callback(closure_2[5]).HTTP;
  let obj = { url: constants.REGISTER_INCODE_INTERVIEW, body: obj, rejectWithError: true };
  obj = { interview_id };
  yield HTTP.post(obj);
}
async function _requestIncodeSessionBootstrap() {
  const fn = function*(sendMessageOptionsForReply) {
    let obj = sendMessageOptionsForReply;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const HTTP = callback(closure_2[5]).HTTP;
    obj = { url: constants.CREATE_INCODE_SESSION };
    let tmp2;
    if (null != obj.previousInterviewId) {
      obj = {};
      obj.previous_interview_id = obj.previousInterviewId;
      tmp2 = obj;
    }
    obj.body = tmp2;
    obj.rejectWithError = true;
    return yield HTTP.post(obj).body;
  };
  fn.next();
  return fn;
}
async function _getAgeVerificationMethods() {
  callback2(closure_2[6]).dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" });
  const obj = callback2(closure_2[6]);
  if (obj2.isCurrentUserSuspended()) {
    let promise = callback4();
  } else {
    promise = callback3();
  }
  if (null != promise) {
    const nextPromise = promise.then((body) => {
      let obj = callback(closure_2[6]);
      obj = { type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: body.body.methods };
      obj.dispatch(obj);
    });
    const catchPromise = promise.then((body) => {
      let obj = callback(closure_2[6]);
      obj = { type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: body.body.methods };
      obj.dispatch(obj);
    }).catch(() => {
      callback(closure_2[6]).dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
    });
  }
  return yield catchPromise;
}
function fetchAgeVerificationMethods() {
  const HTTP = arg1(dependencyMap[5]).HTTP;
  return HTTP.get({ url: Endpoints.AGE_VERIFICATION_METHODS, rejectWithError: true });
}
function fetchAgeVerificationMethodsSuspendedUser() {
  const suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
  const HTTP = arg1(dependencyMap[5]).HTTP;
  return HTTP.post({ url: Endpoints.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS, rejectWithError: true, body: { token: suspendedUserToken } });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const VerificationVendorName = arg1(dependencyMap[2]).VerificationVendorName;
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/age_assurance/AgeVerificationURLActionCreators.tsx");

export { requestAgeVerification };
export const requestIncodeMethodSession = function requestIncodeMethodSession(method) {
  return _requestIncodeMethodSession(...arguments);
};
export { initiateAgeVerification };
export { initiateSuspendedUserAgeVerification };
export const registerIncodeInterview = function registerIncodeInterview(interviewId) {
  return _registerIncodeInterview(...arguments);
};
export const requestIncodeSessionBootstrap = function requestIncodeSessionBootstrap(arg0) {
  return _requestIncodeSessionBootstrap(...arguments);
};
export const getAgeVerificationMethods = function getAgeVerificationMethods() {
  return _getAgeVerificationMethods(...arguments);
};
export { fetchAgeVerificationMethods };
export { fetchAgeVerificationMethodsSuspendedUser };
