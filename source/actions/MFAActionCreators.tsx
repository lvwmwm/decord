// Module ID: 13647
// Function ID: 104810
// Dependencies: [12671, 653, 507, 686, 2]

// Module 13647
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/MFAActionCreators.tsx");

export default {
  enable(arg0) {
    let code;
    let secret;
    ({ code, secret } = arg0);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = { url: Endpoints.MFA_TOTP_ENABLE, body: { code, secret }, oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj2 = require(507) /* _isNativeReflectConstruct */;
    return HTTP.post(obj).then((body) => {
      let obj = outer1_1(outer1_2[3]);
      obj = { type: "MFA_ENABLE_SUCCESS", token: body.body.token, codes: body.body.backup_codes };
      return obj.dispatch(obj);
    });
  },
  disable() {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: Endpoints.MFA_TOTP_DISABLE, oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj2 = require(507) /* _isNativeReflectConstruct */;
    HTTP.post(obj).then((token) => outer1_1(outer1_2[3]).dispatch({ type: "MFA_DISABLE_SUCCESS", token: token.body.token }));
  },
  enableSMS() {
    let obj = importDefault(686);
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.MFA_SMS_ENABLE, oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj3 = require(507) /* _isNativeReflectConstruct */;
    return HTTP.post(obj).then((arg0) => {
      outer1_1(outer1_2[3]).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return arg0;
    }, (arg0) => {
      outer1_1(outer1_2[3]).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  disableSMS(password) {
    let obj = importDefault(686);
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.MFA_SMS_DISABLE, body: obj, oldFormErrors: true };
    obj = { password, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj4 = require(507) /* _isNativeReflectConstruct */;
    return HTTP.post(obj).then((arg0) => {
      outer1_1(outer1_2[3]).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return arg0;
    }, (arg0) => {
      outer1_1(outer1_2[3]).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  sendMFABackupCodesVerificationKeyEmail(password) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.MFA_SEND_VERIFICATION_KEY, body: obj, oldFormErrors: true };
    obj = { password, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj3 = require(507) /* _isNativeReflectConstruct */;
    return HTTP.post(obj).then((body) => {
      let nonces = outer1_1(outer1_2[3]);
      nonces = { viewNonce: body.body.nonce, regenerateNonce: body.body.regenerate_nonce };
      return nonces.dispatch({ type: "MFA_SEND_VERIFICATION_KEY", nonces });
    }, (arg0) => {
      throw arg0;
    });
  },
  confirmViewBackupCodes(verificationKey, regenerate) {
    const _require = verificationKey;
    nonces = nonces.getNonces();
    let regenerateNonce = nonces.viewNonce;
    if (regenerate) {
      regenerateNonce = nonces.regenerateNonce;
    }
    const HTTP = _require(507).HTTP;
    obj = { url: Endpoints.MFA_CODES_VERIFICATION, body: obj, oldFormErrors: true };
    obj = { key: verificationKey, nonce: regenerateNonce, regenerate, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    return HTTP.post(obj).then((body) => {
      let obj = outer1_1(outer1_2[3]);
      obj = { type: "MFA_VIEW_BACKUP_CODES", codes: body.body.backup_codes, key: closure_0 };
      return obj.dispatch(obj);
    }, (arg0) => {
      throw arg0;
    });
  },
  clearBackupCodes() {
    importDefault(686).dispatch({ type: "MFA_CLEAR_BACKUP_CODES" });
  }
};
