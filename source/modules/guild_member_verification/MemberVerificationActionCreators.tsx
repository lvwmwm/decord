// Module ID: 5395
// Function ID: 46007
// Name: _fetchVerificationForm
// Dependencies: []

// Module 5395 (_fetchVerificationForm)
async function _fetchVerificationForm(guildId, code, arg2) {
  let inviteKeyForGuildId = code;
  if (null == inviteKeyForGuildId) {
    inviteKeyForGuildId = inviteKeyForGuildId.getInviteKeyForGuildId(guildId);
  }
  const currentUser = currentUser.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  const HTTP = callback(closure_2[6]).HTTP;
  let obj = { url: closure_9.GUILD_MEMBER_VERIFICATION(guildId) };
  obj = { with_guild: !member.isMember(guildId, id) };
  let result;
  if (null != tmp4) {
    result = callback(closure_2[7]).parseInviteCodeFromInviteKey(inviteKeyForGuildId);
    const obj3 = callback(closure_2[7]);
  }
  obj.invite_code = result;
  obj.query = obj;
  obj.oldFormErrors = true;
  const tmp4 = inviteKeyForGuildId;
  const tmp8 = !member.isMember(guildId, id);
  obj.rejectWithError = callback(closure_2[6]).rejectWithMigratedError();
  const tmp12 = yield HTTP.get(obj);
  if (null == tmp12.body) {
    throw tmp12;
  } else {
    const body = tmp13.body;
    obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId };
    const obj1 = {};
    ({ version: obj8.version, description: obj8.description, form_fields: obj8.formFields, guild: obj8.guild } = body);
    let guildProfileFromServer = null;
    if (null != body.profile) {
      guildProfileFromServer = callback(closure_2[9]).buildGuildProfileFromServer(body.profile);
      const obj5 = callback(closure_2[9]);
    }
    obj1.profile = guildProfileFromServer;
    obj.form = obj1;
    callback2(closure_2[8]).dispatch(obj);
    return body;
  }
  const obj4 = callback(closure_2[6]);
}
async function _updateVerificationForm(guildId, form_fields, enabled, bulk_action, arg4) {
  const HTTP = callback(closure_2[6]).HTTP;
  let obj = { url: closure_9.GUILD_MEMBER_VERIFICATION(guildId), body: obj, oldFormErrors: true };
  obj = { form_fields, enabled, bulk_action, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
  const body = yield HTTP.patch(obj).body;
  const obj3 = callback(closure_2[6]);
  obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj1 };
  callback2(closure_2[8]).dispatch(obj);
}
async function _updateVerificationFormDescription(guildId, description, arg2) {
  const HTTP = callback(closure_2[6]).HTTP;
  let obj = { url: closure_9.GUILD_MEMBER_VERIFICATION(guildId), body: obj, oldFormErrors: true };
  obj = { description, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
  const body = yield HTTP.patch(obj).body;
  const obj3 = callback(closure_2[6]);
  obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj1 };
  callback2(closure_2[8]).dispatch(obj);
}
async function _enableVerificationForm(arg0, enabled, arg2) {
  const HTTP = callback(closure_2[6]).HTTP;
  let obj = { url: closure_9.GUILD_MEMBER_VERIFICATION(arg0), body: obj, oldFormErrors: true };
  obj = { enabled, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
  yield HTTP.patch(obj);
}
async function _submitVerificationForm(arg0, arg1, arg2) {
  const fn = function*(guildId, formFields) {
    let num = arg2;
    if (num === undefined) {
      num = 200;
    }
    yield undefined;
    if (fullServerPreview.isFullServerPreview(guildId)) {
      let obj = {};
      obj = { isPending: false };
      obj.memberOptions = obj;
      const result = guildId(closure_2[10]).updateImpersonatedData(tmp, obj);
    } else {
      const HTTP = guildId(closure_2[6]).HTTP;
      obj = { url: closure_9.GUILD_MEMBER_REQUEST_TO_JOIN(tmp) };
      ({ version: obj2.version, formFields: obj2.form_fields } = formFields);
      obj.body = {};
      let obj2 = guildId(closure_2[6]);
      obj.rejectWithError = obj2.rejectWithMigratedError();
      const body = yield HTTP.put(obj).body;
      obj2 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: tmp, request: body };
      callback(closure_2[8]).dispatch(obj2);
      const obj1 = {};
      const obj4 = callback(closure_2[8]);
      const hasNonTermsFormFieldResult = guildId(closure_2[11]).hasNonTermsFormField(formFields.formFields);
      let tmp16 = hasNonTermsFormFieldResult;
      if (hasNonTermsFormFieldResult) {
        tmp16 = -1 !== tmp2;
      }
      if (tmp16) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          callback(arg0);
        }, num);
      }
      return body;
    }
    const tmp2 = num;
  };
  fn.next();
  return fn;
}
function showCoachmark(guildId) {
  let obj = importDefault(dependencyMap[8]);
  obj = { type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId };
  obj.dispatch(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AnalyticEvents: closure_8, Endpoints: closure_9 } = arg1(dependencyMap[5]));
const obj = {
  fetchVerificationForm(guildId, inviteKeyForGuildId) {
    return _fetchVerificationForm(...arguments);
  },
  updateVerificationForm() {
    return _updateVerificationForm(...arguments);
  },
  updateVerificationFormFieldsLocal(guildId, formFields) {
    let obj = importDefault(dependencyMap[8]);
    obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj, isLocalUpdate: true };
    obj = { formFields };
    obj.dispatch(obj);
  },
  updateVerificationFormDescription() {
    return _updateVerificationFormDescription(...arguments);
  },
  updateVerificationFormDescriptionLocal(guildId, description) {
    let obj = importDefault(dependencyMap[8]);
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
    importDefault(dependencyMap[8]).dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR" });
  },
  reportApplication(arg0) {
    let guild;
    let guildJoinRequest;
    let guildJoinRequestUser;
    let reason;
    let reasonOther;
    let responses;
    ({ guild, guildJoinRequest, guildJoinRequestUser, reason, reasonOther, responses } = arg0);
    let obj = importDefault(dependencyMap[16]);
    obj = { application_id: guildJoinRequest.joinRequestId, applicant_id: guildJoinRequestUser.id, guild_id: guild.id, reason, reason_other: reasonOther, responses };
    obj.track(constants.GUILD_MEMBER_APPLICATION_REPORTED, obj);
  }
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild_member_verification/MemberVerificationActionCreators.tsx");

export default obj;
export const DISABLE_JOIN_REQUEST_COACHMARK = -1;
export { showCoachmark };
