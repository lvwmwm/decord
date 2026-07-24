// Module ID: 16382
// Function ID: 127841
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 16382 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = {};
let tmp2 = ((Store) => {
  class GuildConfigGatesStore {
    constructor() {
      self = this;
      tmp = GuildConfigGatesStore(this, GuildConfigGatesStore);
      obj = outer1_3(GuildConfigGatesStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildConfigGatesStore, Store);
  let obj = {
    key: "hasLoaded",
    value(arg0) {
      return null != outer1_5[arg0];
    }
  };
  const items = [obj, ];
  obj = {
    key: "getGates",
    value(arg0) {
      let obj = outer1_5[arg0];
      if (null == obj) {
        obj = { guildVerificationRoleEnabled: false, applicationIdentityLinkedRolesEnabled: false };
      }
      return obj;
    }
  };
  items[1] = obj;
  return callback(GuildConfigGatesStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildConfigGatesStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_CONFIG_GATES_FETCH_SUCCESS: function handleFetchSuccess(guildId) {
    closure_5[guildId.guildId] = { guildVerificationRoleEnabled: guildId.guildVerificationRoleEnabled, applicationIdentityLinkedRolesEnabled: guildId.applicationIdentityLinkedRolesEnabled };
  },
  LOGOUT: function handleLogout() {
    let closure_5 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_config_gates/GuildConfigGatesStore.tsx");

export default tmp2;
