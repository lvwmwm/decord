// Module ID: 5128
// Function ID: 44452
// Name: _fetchVerificationForm
// Dependencies: [5, 1909, 1917, 4115, 1849, 653, 507, 4116, 686, 5129, 5064, 3950, 5133, 4470, 1212, 4029, 675, 2]

// Module 5128 (_fetchVerificationForm)
import closure_3 from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_8;
let closure_9;
const require = arg1;
async function _fetchVerificationForm(arg0, arg1, arg2) {
  let inviteKeyForGuildId = arg1;
  if (null == inviteKeyForGuildId) {
    inviteKeyForGuildId = outer2_6.getInviteKeyForGuildId(arg0);
  }
  const currentUser = outer2_7.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  let obj = { url: outer2_9.GUILD_MEMBER_VERIFICATION(arg0) };
  obj = { with_guild: !outer2_5.isMember(arg0, id) };
  let result;
  if (null != tmp4) {
    result = outer2_0(outer2_2[7]).parseInviteCodeFromInviteKey(inviteKeyForGuildId);
    const obj3 = outer2_0(outer2_2[7]);
  }
  obj.invite_code = result;
  obj.query = obj;
  obj.oldFormErrors = true;
  tmp4 = inviteKeyForGuildId;
  const tmp8 = !outer2_5.isMember(arg0, id);
  obj.rejectWithError = outer2_0(outer2_2[6]).rejectWithMigratedError();
  const tmp12 = yield HTTP.get(obj);
  if (null == tmp12.body) {
    throw tmp12;
  } else {
    const body = tmp13.body;
    obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId: arg0 };
    const obj1 = {};
    ({ version: obj8.version, description: obj8.description, form_fields: obj8.formFields, guild: obj8.guild } = body);
    let guildProfileFromServer = null;
    if (null != body.profile) {
      guildProfileFromServer = outer2_0(outer2_2[9]).buildGuildProfileFromServer(body.profile);
      const obj5 = outer2_0(outer2_2[9]);
    }
    obj1.profile = guildProfileFromServer;
    obj.form = obj1;
    outer2_1(outer2_2[8]).dispatch(obj);
    return body;
  }
  const obj4 = outer2_0(outer2_2[6]);
}
async function _updateVerificationForm(arg0, arg1, arg2, arg3, arg4) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  obj = { url: outer2_9.GUILD_MEMBER_VERIFICATION(arg0), body: obj, oldFormErrors: true };
  obj = { form_fields: arg1, enabled: arg2, bulk_action: arg3, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
  const body = yield HTTP.patch(obj).body;
  const obj3 = outer2_0(outer2_2[6]);
  obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId: arg0, form: obj1 };
  outer2_1(outer2_2[8]).dispatch(obj);
}
async function _updateVerificationFormDescription(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  obj = { url: outer2_9.GUILD_MEMBER_VERIFICATION(arg0), body: obj, oldFormErrors: true };
  obj = { description: arg1, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
  const body = yield HTTP.patch(obj).body;
  const obj3 = outer2_0(outer2_2[6]);
  obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId: arg0, form: obj1 };
  outer2_1(outer2_2[8]).dispatch(obj);
}
async function _enableVerificationForm(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  obj = { url: outer2_9.GUILD_MEMBER_VERIFICATION(arg0), body: obj, oldFormErrors: true };
  obj = { enabled: arg1, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
  yield HTTP.patch(obj);
}
async function _submitVerificationForm(arg0, arg1, arg2) {
  let iter = (function*(guildId, formFields) {
    let num = arg2;
    let closure_0 = guildId;
    if (num === undefined) {
      num = 200;
    }
    yield undefined;
    if (outer2_4.isFullServerPreview(guildId)) {
      let obj = {};
      obj = { isPending: false };
      obj.memberOptions = obj;
      const result = outer2_0(outer2_2[10]).updateImpersonatedData(tmp, obj);
    } else {
      const HTTP = outer2_0(outer2_2[6]).HTTP;
      obj = { url: outer2_9.GUILD_MEMBER_REQUEST_TO_JOIN(tmp) };
      ({ version: obj2.version, formFields: obj2.form_fields } = formFields);
      obj.body = {};
      let obj2 = outer2_0(outer2_2[6]);
      obj.rejectWithError = obj2.rejectWithMigratedError();
      const body = yield HTTP.put(obj).body;
      obj2 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: tmp, request: body };
      outer2_1(outer2_2[8]).dispatch(obj2);
      const obj1 = {};
      const obj4 = outer2_1(outer2_2[8]);
      const hasNonTermsFormFieldResult = outer2_0(outer2_2[11]).hasNonTermsFormField(formFields.formFields);
      let tmp16 = hasNonTermsFormFieldResult;
      if (hasNonTermsFormFieldResult) {
        tmp16 = -1 !== tmp2;
      }
      if (tmp16) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          outer3_15(closure_0);
        }, num);
      }
      return body;
    }
    tmp2 = num;
  })();
  iter.next();
  return iter;
}
function showCoachmark(guildId) {
  let obj = importDefault(686);
  obj = { type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId };
  obj.dispatch(obj);
}
({ AnalyticEvents: closure_8, Endpoints: closure_9 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member_verification/MemberVerificationActionCreators.tsx");

export default {
  fetchVerificationForm(closure_0, inviteKeyForGuildId) {
    return _fetchVerificationForm(...arguments);
  },
  updateVerificationForm() {
    return _updateVerificationForm(...arguments);
  },
  updateVerificationFormFieldsLocal(guildId, formFields) {
    let obj = importDefault(686);
    obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj, isLocalUpdate: true };
    obj = { formFields };
    obj.dispatch(obj);
  },
  updateVerificationFormDescription() {
    return _updateVerificationFormDescription(...arguments);
  },
  updateVerificationFormDescriptionLocal(guildId, description) {
    let obj = importDefault(686);
    obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj, isLocalUpdate: true };
    obj = { description };
    obj.dispatch(obj);
  },
  enableVerificationForm() {
    return _enableVerificationForm(...arguments);
  },
  submitVerificationForm(guildId, arg1) {
    return _submitVerificationForm(...arguments);
  },
  clearCoachmark() {
    importDefault(686).dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR" });
  },
  reportApplication(arg0) {
    let guild;
    let guildJoinRequest;
    let guildJoinRequestUser;
    let reason;
    let reasonOther;
    let responses;
    ({ guild, guildJoinRequest, guildJoinRequestUser, reason, reasonOther, responses } = arg0);
    let obj = importDefault(675);
    obj = { application_id: guildJoinRequest.joinRequestId, applicant_id: guildJoinRequestUser.id, guild_id: guild.id, reason, reason_other: reasonOther, responses };
    obj.track(constants.GUILD_MEMBER_APPLICATION_REPORTED, obj);
  }
};
export const DISABLE_JOIN_REQUEST_COACHMARK = -1;
export { showCoachmark };
