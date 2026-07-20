// Module ID: 5351
// Function ID: 45753
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5351 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let obj = { deaf_person: 140529.4145832062, _min: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009499897453596522, formFields: [] };
let closure_9 = {};
let tmp2 = (Store) => {
  class MemberVerificationFormStore {
    constructor() {
      self = this;
      tmp = closure_3(this, MemberVerificationFormStore);
      obj = closure_6(MemberVerificationFormStore);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = MemberVerificationFormStore;
  callback2(MemberVerificationFormStore, Store);
  let obj = {
    key: "get",
    value(arg0) {
      if (null != arg0) {
        return closure_9[arg0];
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "getRulesPrompt",
    value(arg0) {
      let formFields;
      if (null != closure_9[arg0]) {
        formFields = tmp.formFields;
      }
      return callback(closure_2[5]).find(formFields, MemberVerificationFormStore(closure_2[6]).isTermsFormField);
    }
  };
  items[1] = obj;
  return callback(MemberVerificationFormStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "MemberVerificationFormStore";
obj = {
  INVITE_ACCEPT_SUCCESS: function handleInviteData(invite) {
    let description;
    let guild;
    let member_verification_form;
    ({ member_verification_form, guild } = invite.invite);
    let flag = null != guild && null != member_verification_form;
    if (flag) {
      const obj = {};
      ({ version: obj.version, description } = member_verification_form);
      let str = "";
      if (null != description) {
        str = description;
      }
      obj.description = str;
      obj.formFields = member_verification_form.form_fields;
      obj.guild = guild;
      closure_9[guild.id] = obj;
      flag = true;
      const tmp = closure_9;
    }
    return flag;
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function handleVerificationFormUpdate(arg0) {
    let form;
    let guildId;
    ({ form, guildId } = arg0);
    if (null == form) {
      closure_9[guildId] = obj;
    } else {
      let tmp2 = closure_9[guildId];
      if (null == tmp2) {
        tmp2 = obj;
      }
      const obj = {};
      const merged = Object.assign(tmp2);
      const merged1 = Object.assign(form);
      closure_9[guildId] = obj;
    }
  },
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: function handleVerificationFormFetchFail(guildId) {
    guildId = guildId.guildId;
    let tmp2 = closure_9[guildId];
    if (null == tmp2) {
      tmp2 = obj;
    }
    closure_9[guildId] = tmp2;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null != guild) {
      const id = guild.id;
    }
    delete r2[r1];
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[8]), obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_member_verification/MemberVerificationFormStore.tsx");

export default tmp2;
export const NO_MEMBER_VERIFICATION_FORM = obj;
