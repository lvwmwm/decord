// Module ID: 14789
// Function ID: 112784
// Name: _scorePassword
// Dependencies: [5, 14790, 1194, 653, 1197, 3712, 675, 4942, 480, 4030, 9482, 686, 14791, 14792, 2]
// Exports: default, registerPhone, scorePassword

// Module 14789 (_scorePassword)
import closure_4 from "t";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";
import result from "result";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function _scorePassword() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _registerPhone() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function registerFull(giftCodeSKUId) {
  let birthday;
  let consent;
  let email;
  let globalName;
  let guildTemplateCode;
  let invite;
  let password;
  let phoneToken;
  let username;
  ({ birthday, invite } = giftCodeSKUId);
  ({ email, phoneToken, username, globalName, consent, password, guildTemplateCode } = giftCodeSKUId);
  if (invite === undefined) {
    invite = null;
  }
  giftCodeSKUId = giftCodeSKUId.giftCodeSKUId;
  if (giftCodeSKUId === undefined) {
    giftCodeSKUId = null;
  }
  let promoEmailConsent = giftCodeSKUId.promoEmailConsent;
  if (promoEmailConsent === undefined) {
    promoEmailConsent = null;
  }
  let prop = giftCodeSKUId.usedUsernameSuggestion;
  if (prop === undefined) {
    prop = null;
  }
  let obj = importDefault(686);
  obj.dispatch({ type: "REGISTER" });
  if (null != birthday) {
    importDefault(14791)(birthday, constants2.REGISTER);
    obj = { source: constants5.REGISTER, action: constants4.AGE_GATE_SUBMITTED };
    importDefault(675).track(constants.AGE_GATE_ACTION, obj);
    const obj9 = importDefault(675);
    const diffResult = importDefault(3712)().diff(birthday, "years");
    if (diffResult >= 13) {
      if (diffResult < 13) {
        let str3 = "23+";
        if (diffResult >= 18) {
          str3 = "23+";
          if (diffResult <= 22) {
            str3 = "18-22";
          }
        }
        let str = str3;
      } else {
        str = "13-17";
      }
      let obj1 = importDefault(675);
      obj = { age_bucket: str };
      obj1.track(constants.USER_AGE_SUBMITTED, obj);
    }
    const obj11 = importDefault(3712)();
  }
  let obj3 = importDefault(4942);
  obj1 = { url: constants3.REGISTER };
  let obj2 = { fingerprint: fingerprint.getFingerprint(), email, username, global_name: globalName, password, invite, consent, phone_token: phoneToken };
  let formatResult;
  if (null != birthday) {
    formatResult = birthday.format("YYYY-MM-DD");
  }
  obj2.date_of_birth = formatResult;
  obj2.gift_code_sku_id = giftCodeSKUId;
  obj2.guild_template_code = guildTemplateCode;
  let checked;
  if (null != promoEmailConsent) {
    checked = promoEmailConsent.checked;
  }
  obj2.promotional_email_opt_in = checked;
  obj1.body = obj2;
  obj3 = { event: require(480) /* isThrottled */.NetworkActionNames.USER_REGISTER };
  const obj4 = { invite_code: invite, used_username_suggestion: prop };
  let checked1;
  if (null != promoEmailConsent) {
    checked1 = promoEmailConsent.checked;
  }
  obj4.promotional_email_opt_in = checked1;
  let preChecked;
  if (null != promoEmailConsent) {
    preChecked = promoEmailConsent.preChecked;
  }
  obj4.promotional_email_pre_checked = preChecked;
  obj4.was_unique_username = true;
  obj3.properties = obj4;
  obj1.trackedActionData = obj3;
  obj1.rejectWithError = false;
  return obj3.post(obj1).then((body) => {
    let obj = outer1_1(outer1_3[11]);
    obj = { type: "REGISTER_SUCCESS", token: body.body.token };
    obj.dispatch(obj);
    obj = { type: "GUARDIAN_CONNECT_REQUIRED", shouldShowGuardianConnect: true === body.body.show_guardian_connect };
    outer1_1(outer1_3[11]).dispatch(obj);
    const obj3 = outer1_1(outer1_3[11]);
    outer1_1(outer1_3[6]).track(outer1_6.AGE_GATE_ACTION, { source: outer1_10.REGISTER, action: outer1_9.AGE_GATE_SUCCESS });
  }, (arg0) => {
    if (arg0 instanceof outer1_0(outer1_3[10]).CaptchaCancelError) {
      throw arg0;
    } else {
      let tmp3 = outer1_1(outer1_3[9]);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(arg0);
      if (null != tmp3.getFieldErrors("date_of_birth")) {
        const result = outer1_2(outer1_3[13]).preventUnderageRegistration(outer1_10.REGISTER);
        const obj2 = outer1_2(outer1_3[13]);
      }
      const obj = { is_unique_username_registration: true, email_error_reason: tmp3.getFirstFieldErrorMessage("email"), phone_error_reason: tmp3.getFirstFieldErrorMessage("phone_token"), password_error_reason: tmp3.getFirstFieldErrorMessage("password"), username_error_reason: tmp3.getFirstFieldErrorMessage("username"), global_name_error_reason: tmp3.getFirstFieldErrorMessage("global_name"), date_of_birth_error_reason: tmp3.getFirstFieldErrorMessage("date_of_birth"), promotional_email_opt_in_error_reason: tmp3.getFirstFieldErrorMessage("promotional_email_opt_in"), fingerprint_error_reason: tmp3.getFirstFieldErrorMessage("fingerprint"), invite_error_reason: tmp3.getFirstFieldErrorMessage("invite"), gift_code_sku_id_error_reason: tmp3.getFirstFieldErrorMessage("gift_code_sku_id"), guild_template_code_error_reason: tmp3.getFirstFieldErrorMessage("guild_template_code"), consent_error_reason: tmp3.getFirstFieldErrorMessage("consent"), generic_error_reason: tmp3.getAnyErrorMessage() };
      outer1_1(outer1_3[6]).track(outer1_6.REGISTER_SUBMIT_ERRORED, obj);
      throw tmp3;
    }
  });
}
({ AnalyticEvents: closure_6, AnalyticsSections: closure_7, Endpoints: closure_8 } = ME);
({ AgeGateAnalyticAction: closure_9, AgeGateSource: closure_10 } = result);
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/auth/register.tsx");

export default function register(invite) {
  invite = invite.invite;
  if (invite === undefined) {
    invite = null;
  }
  let giftCodeSKUId = invite.giftCodeSKUId;
  if (giftCodeSKUId === undefined) {
    giftCodeSKUId = null;
  }
  let obj = Object.create(null);
  obj.invite = 0;
  obj.giftCodeSKUId = 0;
  obj = {};
  const merged = Object.assign(Object.assign(invite, obj));
  obj["invite"] = invite;
  obj["giftCodeSKUId"] = giftCodeSKUId;
  return registerFull(obj);
};
export const scorePassword = function scorePassword(arg0) {
  return _scorePassword(...arguments);
};
export const registerPhone = function registerPhone(arg0) {
  return _registerPhone(...arguments);
};
export { registerFull };
