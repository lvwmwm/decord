// Module ID: 9231
// Function ID: 72186
// Name: ChangePhoneReason
// Dependencies: []

// Module 9231 (ChangePhoneReason)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).PHONE_VERIFICATION_MODAL_KEY;
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/phone/PhoneActionCreators.tsx");

export default {
  setCountryCode(countryCode) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "PHONE_SET_COUNTRY_CODE", countryCode };
    obj.dispatch(obj);
  },
  removePhone(password, reason) {
    const HTTP = reason(dependencyMap[5]).HTTP;
    let obj = { url: Endpoints.PHONE, body: obj, oldFormErrors: true };
    obj = { password, change_phone_reason: reason, rejectWithError: reason(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  resendCode(phone) {
    let obj = {};
    const fingerprint = fingerprint.getFingerprint();
    let tmp2 = null != fingerprint;
    if (tmp2) {
      tmp2 = "" !== fingerprint;
    }
    if (tmp2) {
      obj.X-Fingerprint = fingerprint;
    }
    const HTTP = arg1(dependencyMap[5]).HTTP;
    obj = { url: Endpoints.RESEND_PHONE, headers: obj, body: obj };
    obj = { phone, rejectWithError: arg1(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  beginAddPhone(combined, change_phone_reason) {
    const HTTP = change_phone_reason(dependencyMap[5]).HTTP;
    let obj = { url: Endpoints.PHONE, body: obj };
    obj = { phone: combined, change_phone_reason, rejectWithError: change_phone_reason(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  addPhone(phoneToken, password, reason) {
    const HTTP = password(dependencyMap[5]).HTTP;
    let obj = { url: Endpoints.PHONE, body: obj, oldFormErrors: true };
    obj = { phone_token: phoneToken, password, change_phone_reason: reason, rejectWithError: password(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  addPhoneWithoutPassword(code) {
    const HTTP = arg1(dependencyMap[5]).HTTP;
    let obj = { url: Endpoints.PHONE_VERIFY_NO_PASSWORD, body: obj };
    obj = { code, rejectWithError: arg1(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  beginReverifyPhone(combined, change_phone_reason) {
    const HTTP = change_phone_reason(dependencyMap[5]).HTTP;
    let obj = { url: Endpoints.PHONE_REVERIFY, body: obj };
    obj = { phone: combined, change_phone_reason, rejectWithError: change_phone_reason(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  reverifyPhone(phone_token, password, USER_ACTION_REQUIRED) {
    const HTTP = password(dependencyMap[5]).HTTP;
    let obj = { url: Endpoints.PHONE_REVERIFY, body: obj, oldFormErrors: true };
    obj = { phone_token, password, change_phone_reason: USER_ACTION_REQUIRED, rejectWithError: password(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  validatePhoneForSupport(token) {
    const HTTP = arg1(dependencyMap[5]).HTTP;
    let obj = { url: Endpoints.VERIFY_PHONE_FOR_TICKET, body: obj, oldFormErrors: true };
    obj = { token, rejectWithError: arg1(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  verifyPhone(arg0, arg1) {
    let flag = arg2;
    let flag2 = arg3;
    arg1 = arg0;
    const importDefault = arg1;
    if (arg2 === undefined) {
      flag = true;
    }
    const dependencyMap = flag;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const callback = flag2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
export const ChangePhoneReason = { USER_ACTION_REQUIRED: "user_action_required", USER_SETTINGS_UPDATE: "user_settings_update", GUILD_PHONE_REQUIRED: "guild_phone_required", MFA_PHONE_UPDATE: "mfa_phone_update", CONTACT_SYNC: "contact_sync" };
