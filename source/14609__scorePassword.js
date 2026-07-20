// Module ID: 14609
// Function ID: 110202
// Name: _scorePassword
// Dependencies: []
// Exports: default, registerPhone, scorePassword

// Module 14609 (_scorePassword)
function _scorePassword() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _scorePassword = obj;
  return obj(...arguments);
}
function _registerPhone() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _registerPhone = obj;
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
  let obj = importDefault(dependencyMap[11]);
  obj.dispatch({ type: "REGISTER" });
  if (null != birthday) {
    importDefault(dependencyMap[12])(birthday, constants2.REGISTER);
    obj = { source: constants5.REGISTER, action: constants4.AGE_GATE_SUBMITTED };
    importDefault(dependencyMap[6]).track(constants.AGE_GATE_ACTION, obj);
    const obj9 = importDefault(dependencyMap[6]);
    const diffResult = importDefault(dependencyMap[5])().diff(birthday, "years");
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
      let obj1 = importDefault(dependencyMap[6]);
      obj = { age_bucket: str };
      obj1.track(constants.USER_AGE_SUBMITTED, obj);
    }
    const obj11 = importDefault(dependencyMap[5])();
  }
  let obj3 = importDefault(dependencyMap[7]);
  obj1 = { url: constants3.REGISTER };
  const obj2 = { fingerprint: fingerprint.getFingerprint(), email, username, global_name: globalName, password, invite, consent, phone_token: phoneToken };
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
  obj3 = { event: arg1(dependencyMap[8]).NetworkActionNames.USER_REGISTER };
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
    let obj = callback2(closure_3[11]);
    obj = { type: "REGISTER_SUCCESS", token: body.body.token };
    obj.dispatch(obj);
    obj = { type: "GUARDIAN_CONNECT_REQUIRED", shouldShowGuardianConnect: true === body.body.show_guardian_connect };
    callback2(closure_3[11]).dispatch(obj);
    const obj3 = callback2(closure_3[11]);
    callback2(closure_3[6]).track(constants.AGE_GATE_ACTION, { source: constants3.REGISTER, action: constants2.AGE_GATE_SUCCESS });
  }, (arg0) => {
    if (arg0 instanceof callback(closure_3[10]).CaptchaCancelError) {
      throw arg0;
    } else {
      let tmp3 = callback2(closure_3[9]);
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(arg0);
      if (null != tmp3.getFieldErrors("date_of_birth")) {
        const result = callback3(closure_3[13]).preventUnderageRegistration(constants3.REGISTER);
        const obj2 = callback3(closure_3[13]);
      }
      const obj = { is_unique_username_registration: true, email_error_reason: tmp3.getFirstFieldErrorMessage("email"), phone_error_reason: tmp3.getFirstFieldErrorMessage("phone_token"), password_error_reason: tmp3.getFirstFieldErrorMessage("password"), username_error_reason: tmp3.getFirstFieldErrorMessage("username"), global_name_error_reason: tmp3.getFirstFieldErrorMessage("global_name"), date_of_birth_error_reason: tmp3.getFirstFieldErrorMessage("date_of_birth"), promotional_email_opt_in_error_reason: tmp3.getFirstFieldErrorMessage("promotional_email_opt_in"), fingerprint_error_reason: tmp3.getFirstFieldErrorMessage("fingerprint"), invite_error_reason: tmp3.getFirstFieldErrorMessage("invite"), gift_code_sku_id_error_reason: tmp3.getFirstFieldErrorMessage("gift_code_sku_id"), guild_template_code_error_reason: tmp3.getFirstFieldErrorMessage("guild_template_code"), consent_error_reason: tmp3.getFirstFieldErrorMessage("consent"), generic_error_reason: tmp3.getAnyErrorMessage() };
      callback2(closure_3[6]).track(constants.REGISTER_SUBMIT_ERRORED, obj);
      throw tmp3;
    }
  });
}
let closure_4 = importDefault(dependencyMap[0]);
arg1(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ AnalyticEvents: closure_6, AnalyticsSections: closure_7, Endpoints: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ AgeGateAnalyticAction: closure_9, AgeGateSource: closure_10 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/auth/register.tsx");

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
