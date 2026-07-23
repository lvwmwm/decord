// Module ID: 5082
// Function ID: 44230
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 22, 3950, 566, 686, 2]

// Module 5082 (_isNativeReflectConstruct)
import isTermsFormField from "isTermsFormField";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { version: "", description: "", formFields: [] };
let closure_9 = {};
let tmp2 = ((Store) => {
  class MemberVerificationFormStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, MemberVerificationFormStore);
      obj = outer1_6(MemberVerificationFormStore);
      tmp2 = outer1_5;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MemberVerificationFormStore, Store);
  let obj = {
    key: "get",
    value(arg0) {
      if (null != arg0) {
        return outer1_9[arg0];
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "getRulesPrompt",
    value(arg0) {
      let formFields;
      if (null != outer1_9[arg0]) {
        formFields = tmp.formFields;
      }
      return outer1_1(outer1_2[5]).find(formFields, MemberVerificationFormStore(outer1_2[6]).isTermsFormField);
    }
  };
  items[1] = obj;
  return callback(MemberVerificationFormStore, items);
})(require("initialize").Store);
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
      dependencyMap[guildId] = obj;
    } else {
      let tmp2 = dependencyMap[guildId];
      if (null == tmp2) {
        tmp2 = obj;
      }
      obj = {};
      const merged = Object.assign(tmp2);
      const merged1 = Object.assign(form);
      dependencyMap[guildId] = obj;
    }
  },
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: function handleVerificationFormFetchFail(guildId) {
    guildId = guildId.guildId;
    let tmp2 = dependencyMap[guildId];
    if (null == tmp2) {
      tmp2 = obj;
    }
    dependencyMap[guildId] = tmp2;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null != guild) {
      const id = guild.id;
    }
    delete tmp2[tmp];
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_member_verification/MemberVerificationFormStore.tsx");

export default tmp2;
export const NO_MEMBER_VERIFICATION_FORM = obj;
