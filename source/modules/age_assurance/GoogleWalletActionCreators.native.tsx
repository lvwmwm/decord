// Module ID: 7562
// Function ID: 60516
// Name: _requestGoogleWalletVerification
// Dependencies: []
// Exports: checkGoogleWalletAvailable, getGoogleWalletCredential, requestGoogleWalletVerification, verifyGoogleWalletCredential

// Module 7562 (_requestGoogleWalletVerification)
async function _requestGoogleWalletVerification() {
  const HTTP = callback(closure_2[2]).HTTP;
  return yield HTTP.post({ url: constants.GOOGLE_WALLET_REQUEST, body: {}, rejectWithError: true, failImmediatelyWhenRateLimited: true }).body;
}
async function _verifyGoogleWalletCredential(credential_json, arg1) {
  const HTTP = callback(closure_2[2]).HTTP;
  let obj = { url: constants.GOOGLE_WALLET_VERIFY, body: obj, rejectWithError: true, failImmediatelyWhenRateLimited: true };
  obj = { credential_json };
  yield HTTP.post(obj);
}
async function _checkGoogleWalletAvailable() {
  const tmp = null != callback(closure_2[3]);
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = yield callback(closure_2[3]).isAvailable();
    const obj = callback(closure_2[3]);
  }
  return tmp2;
}
async function _getGoogleWalletCredential(arg0, arg1) {
  if (null == callback(closure_2[3])) {
    const _Error = Error;
    const error = new Error("Digital credential module is not available");
    throw error;
  } else {
    return yield callback(closure_2[3]).getCredential(arg0);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/age_assurance/GoogleWalletActionCreators.native.tsx");

export const requestGoogleWalletVerification = function requestGoogleWalletVerification() {
  return _requestGoogleWalletVerification(...arguments);
};
export const verifyGoogleWalletCredential = function verifyGoogleWalletCredential(arg0) {
  return _verifyGoogleWalletCredential(...arguments);
};
export const checkGoogleWalletAvailable = function checkGoogleWalletAvailable() {
  return _checkGoogleWalletAvailable(...arguments);
};
export const getGoogleWalletCredential = function getGoogleWalletCredential(request_json) {
  return _getGoogleWalletCredential(...arguments);
};
