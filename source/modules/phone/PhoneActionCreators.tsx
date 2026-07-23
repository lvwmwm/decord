// Module ID: 9239
// Function ID: 72251
// Name: ChangePhoneReason
// Dependencies: [5, 1194, 9237, 653, 686, 507, 4942, 480, 2]

// Module 9239 (ChangePhoneReason)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY";
import { Endpoints } from "ME";

const require = arg1;
const result = require("PHONE_VERIFICATION_MODAL_KEY").fileFinishedImporting("modules/phone/PhoneActionCreators.tsx");

export default {
  setCountryCode(countryCode) {
    let obj = importDefault(686);
    obj = { type: "PHONE_SET_COUNTRY_CODE", countryCode };
    obj.dispatch(obj);
  },
  removePhone(password, reason) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.PHONE, body: obj, oldFormErrors: true };
    obj = { password, change_phone_reason: reason, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  resendCode(phone) {
    let obj = {};
    fingerprint = fingerprint.getFingerprint();
    let tmp2 = null != fingerprint;
    if (tmp2) {
      tmp2 = "" !== fingerprint;
    }
    if (tmp2) {
      obj["X-Fingerprint"] = fingerprint;
    }
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.RESEND_PHONE, headers: obj, body: obj };
    obj = { phone, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  beginAddPhone(combined, change_phone_reason) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.PHONE, body: obj };
    obj = { phone: combined, change_phone_reason, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  addPhone(phoneToken, password, reason) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.PHONE, body: obj, oldFormErrors: true };
    obj = { phone_token: phoneToken, password, change_phone_reason: reason, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  addPhoneWithoutPassword(code) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.PHONE_VERIFY_NO_PASSWORD, body: obj };
    obj = { code, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  beginReverifyPhone(combined, change_phone_reason) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.PHONE_REVERIFY, body: obj };
    obj = { phone: combined, change_phone_reason, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  reverifyPhone(phone_token, password, USER_ACTION_REQUIRED) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.PHONE_REVERIFY, body: obj, oldFormErrors: true };
    obj = { phone_token, password, change_phone_reason: USER_ACTION_REQUIRED, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  validatePhoneForSupport(token) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.VERIFY_PHONE_FOR_TICKET, body: obj, oldFormErrors: true };
    obj = { token, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  verifyPhone(arg0, arg1) {
    let flag = arg2;
    let flag2 = arg3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (arg2 === undefined) {
      flag = true;
    }
    if (flag2 === undefined) {
      flag2 = false;
    }
    // CreateGeneratorClosureLongIndex (0x67)
    return flag2(tmp)();
  }
};
export const ChangePhoneReason = { USER_ACTION_REQUIRED: "user_action_required", USER_SETTINGS_UPDATE: "user_settings_update", GUILD_PHONE_REQUIRED: "guild_phone_required", MFA_PHONE_UPDATE: "mfa_phone_update", CONTACT_SYNC: "contact_sync" };
