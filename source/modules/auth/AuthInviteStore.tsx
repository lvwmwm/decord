// Module ID: 4050
// Function ID: 33781
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1387, 566, 686, 2]

// Module 4050 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
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
let closure_7 = {};
let tmp2 = ((Store) => {
  class AuthInviteStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, AuthInviteStore);
      obj = outer1_5(AuthInviteStore);
      tmp2 = outer1_4;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(AuthInviteStore, Store);
  const items = [
    {
      key: "getGuild",
      value(arg0) {
        return outer1_7[arg0];
      }
    }
  ];
  return callback(AuthInviteStore, items);
})(require("initialize").Store);
tmp2.displayName = "AuthInviteStore";
tmp2 = new tmp2(require("dispatcher"), {
  AUTH_INVITE_UPDATE: function handleAuthInviteUpdate(invite) {
    const guild = invite.invite.guild;
    if (null == guild) {
      return false;
    } else {
      closure_7[guild.id] = require(1387) /* fromGuildPropertiesWithAdditionalFields */.fromInviteGuild(guild);
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/auth/AuthInviteStore.tsx");

export default tmp2;
