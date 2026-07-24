// Module ID: 7587
// Function ID: 60452
// Name: requestAgeVerification
// Dependencies: [5, 1194, 7582, 653, 7588, 507, 686, 2]
// Exports: getAgeVerificationMethods, registerIncodeInterview, requestIncodeMethodSession, requestIncodeSessionBootstrap

// Module 7587 (requestAgeVerification)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { VerificationVendorName } from "set";
import { Endpoints } from "ME";

const require = arg1;
function requestAgeVerification(arg0) {
  return _requestAgeVerification(...arguments);
}
async function _requestAgeVerification(arg0, arg1) {
  let iter = (function*(arg0) {
    let classificationId;
    let method;
    let vendor;
    ({ method, classificationId, vendor } = arg0);
    yield undefined;
    let obj = outer2_0(outer2_2[4]);
    if (obj.isCurrentUserSuspended()) {
      obj = { classificationId, method };
      const tmp7 = yield outer2_12(obj);
      return tmp7;
    } else {
      const tmp3 = yield outer2_10(method, vendor);
      return tmp3;
    }
  })();
  iter.next();
  return iter;
}
async function _requestIncodeMethodSession(arg0, arg1) {
  let api_url;
  let consent_id;
  let interview_id;
  let session_token;
  let obj = { method: arg0, vendor: outer2_5.INCODE };
  let incode_parameters = yield outer2_7(obj).incode_parameters;
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
async function _initiateAgeVerification(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  obj = { url: outer2_6.VERIFY_AGE, body: obj, rejectWithError: true };
  obj = { method: arg0, vendor: arg1 };
  return yield HTTP.post(obj).body;
}
function initiateSuspendedUserAgeVerification() {
  return _initiateSuspendedUserAgeVerification(...arguments);
}
async function _initiateSuspendedUserAgeVerification(arg0, arg1) {
  let iter = (function*(arg0) {
    let classificationId;
    let method;
    ({ classificationId, method } = arg0);
    yield undefined;
    const suspendedUserToken = outer2_4.getSuspendedUserToken();
    const HTTP = outer2_0(outer2_2[5]).HTTP;
    return yield HTTP.post({ url: outer2_6.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION, body: { token: suspendedUserToken, from_classification_id: classificationId, method }, rejectWithError: true }).body;
  })();
  iter.next();
  return iter;
}
async function _registerIncodeInterview(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  obj = { url: outer2_6.REGISTER_INCODE_INTERVIEW, body: obj, rejectWithError: true };
  obj = { interview_id: arg0 };
  yield HTTP.post(obj);
}
async function _requestIncodeSessionBootstrap() {
  let iter = (function*(sendMessageOptionsForReply) {
    let obj = sendMessageOptionsForReply;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const HTTP = outer2_0(outer2_2[5]).HTTP;
    obj = { url: outer2_6.CREATE_INCODE_SESSION };
    let tmp2;
    if (null != obj.previousInterviewId) {
      obj = {};
      obj.previous_interview_id = obj.previousInterviewId;
      tmp2 = obj;
    }
    obj.body = tmp2;
    obj.rejectWithError = true;
    return yield HTTP.post(obj).body;
  })();
  iter.next();
  return iter;
}
async function _getAgeVerificationMethods() {
  outer2_1(outer2_2[6]).dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" });
  let obj = outer2_1(outer2_2[6]);
  if (obj2.isCurrentUserSuspended()) {
    let promise = outer2_18();
  } else {
    promise = outer2_17();
  }
  if (null != promise) {
    const nextPromise = promise.then((body) => {
      let obj = outer3_1(outer3_2[6]);
      obj = { type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: body.body.methods };
      obj.dispatch(obj);
    });
    const catchPromise = promise.then((body) => {
      let obj = outer3_1(outer3_2[6]);
      obj = { type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS", methods: body.body.methods };
      obj.dispatch(obj);
    }).catch(() => {
      outer3_1(outer3_2[6]).dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
    });
  }
  return yield catchPromise;
}
function fetchAgeVerificationMethods() {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  return HTTP.get({ url: Endpoints.AGE_VERIFICATION_METHODS, rejectWithError: true });
}
function fetchAgeVerificationMethodsSuspendedUser() {
  suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  return HTTP.post({ url: Endpoints.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS, rejectWithError: true, body: { token: suspendedUserToken } });
}
const result = require("set").fileFinishedImporting("modules/age_assurance/AgeVerificationURLActionCreators.tsx");

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
