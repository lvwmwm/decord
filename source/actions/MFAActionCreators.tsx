// Module ID: 13526
// Function ID: 102621
// Dependencies: [0, 0, 0, 4294967295]

// Module 13526
import result from "result";
import { Endpoints } from "result";

const result = arg1(dependencyMap[4]).fileFinishedImporting("actions/MFAActionCreators.tsx");

export default {
  enable(arg0) {
    let code;
    let secret;
    ({ code, secret } = arg0);
    const HTTP = arg1(dependencyMap[2]).HTTP;
    const obj = { url: Endpoints.MFA_TOTP_ENABLE, body: { code, secret }, oldFormErrors: true, rejectWithError: arg1(dependencyMap[2]).rejectWithMigratedError() };
    const obj2 = arg1(dependencyMap[2]);
    return HTTP.post(obj).then((body) => {
      let obj = callback(closure_2[3]);
      obj = { type: "MFA_ENABLE_SUCCESS", token: body.body.token, codes: body.body.backup_codes };
      return obj.dispatch(obj);
    });
  },
  disable() {
    const HTTP = arg1(dependencyMap[2]).HTTP;
    const obj = { url: Endpoints.MFA_TOTP_DISABLE, oldFormErrors: true, rejectWithError: arg1(dependencyMap[2]).rejectWithMigratedError() };
    const obj2 = arg1(dependencyMap[2]);
    HTTP.post(obj).then((token) => callback(closure_2[3]).dispatch({ type: "MFA_DISABLE_SUCCESS", token: token.body.token }));
  },
  enableSMS() {
    let obj = importDefault(dependencyMap[3]);
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = arg1(dependencyMap[2]).HTTP;
    obj = { url: Endpoints.MFA_SMS_ENABLE, oldFormErrors: true, rejectWithError: arg1(dependencyMap[2]).rejectWithMigratedError() };
    const obj3 = arg1(dependencyMap[2]);
    return HTTP.post(obj).then((arg0) => {
      callback(closure_2[3]).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return arg0;
    }, (arg0) => {
      callback(closure_2[3]).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  disableSMS(password) {
    let obj = importDefault(dependencyMap[3]);
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = arg1(dependencyMap[2]).HTTP;
    obj = { url: Endpoints.MFA_SMS_DISABLE, body: obj, oldFormErrors: true };
    obj = { password, rejectWithError: arg1(dependencyMap[2]).rejectWithMigratedError() };
    const obj4 = arg1(dependencyMap[2]);
    return HTTP.post(obj).then((arg0) => {
      callback(closure_2[3]).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return arg0;
    }, (arg0) => {
      callback(closure_2[3]).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  sendMFABackupCodesVerificationKeyEmail(password) {
    const HTTP = arg1(dependencyMap[2]).HTTP;
    let obj = { url: Endpoints.MFA_SEND_VERIFICATION_KEY, body: obj, oldFormErrors: true };
    obj = { password, rejectWithError: arg1(dependencyMap[2]).rejectWithMigratedError() };
    const obj3 = arg1(dependencyMap[2]);
    return HTTP.post(obj).then((body) => {
      let nonces = callback(closure_2[3]);
      nonces = { viewNonce: body.body.nonce, regenerateNonce: body.body.regenerate_nonce };
      return nonces.dispatch({ type: "MFA_SEND_VERIFICATION_KEY", nonces });
    }, (arg0) => {
      throw arg0;
    });
  },
  confirmViewBackupCodes(verificationKey, regenerate) {
    regenerate = verificationKey;
    const nonces = nonces.getNonces();
    let regenerateNonce = nonces.viewNonce;
    if (regenerate) {
      regenerateNonce = nonces.regenerateNonce;
    }
    const HTTP = regenerate(dependencyMap[2]).HTTP;
    let obj = { url: Endpoints.MFA_CODES_VERIFICATION, body: obj, oldFormErrors: true };
    obj = { key: verificationKey, nonce: regenerateNonce, regenerate, rejectWithError: regenerate(dependencyMap[2]).rejectWithMigratedError() };
    const obj3 = regenerate(dependencyMap[2]);
    return HTTP.post(obj).then((body) => {
      let obj = callback(closure_2[3]);
      obj = { type: "MFA_VIEW_BACKUP_CODES", codes: body.body.backup_codes, key: body };
      return obj.dispatch(obj);
    }, (arg0) => {
      throw arg0;
    });
  },
  clearBackupCodes() {
    importDefault(dependencyMap[3]).dispatch({ type: "MFA_CLEAR_BACKUP_CODES" });
  }
};
