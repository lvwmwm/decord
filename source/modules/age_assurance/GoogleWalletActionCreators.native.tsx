// Module ID: 7626
// Function ID: 60726
// Name: _requestGoogleWalletVerification
// Dependencies: [5, 653, 507, 7627, 2]
// Exports: checkGoogleWalletAvailable, getGoogleWalletCredential, requestGoogleWalletVerification, verifyGoogleWalletCredential

// Module 7626 (_requestGoogleWalletVerification)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
async function _requestGoogleWalletVerification() {
  const HTTP = outer2_0(outer2_2[2]).HTTP;
  return yield HTTP.post({ url: outer2_4.GOOGLE_WALLET_REQUEST, body: {}, rejectWithError: true, failImmediatelyWhenRateLimited: true }).body;
}
async function _verifyGoogleWalletCredential(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[2]).HTTP;
  obj = { url: outer2_4.GOOGLE_WALLET_VERIFY, body: obj, rejectWithError: true, failImmediatelyWhenRateLimited: true };
  obj = { credential_json: arg0 };
  yield HTTP.post(obj);
}
async function _checkGoogleWalletAvailable() {
  const tmp = null != outer2_1(outer2_2[3]);
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = yield outer2_1(outer2_2[3]).isAvailable();
    const obj = outer2_1(outer2_2[3]);
  }
  return tmp2;
}
async function _getGoogleWalletCredential(arg0, arg1) {
  if (null == outer2_1(outer2_2[3])) {
    const _Error = Error;
    const error = new Error("Digital credential module is not available");
    throw error;
  } else {
    return yield outer2_1(outer2_2[3]).getCredential(arg0);
  }
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/age_assurance/GoogleWalletActionCreators.native.tsx");

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
