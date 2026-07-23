// Module ID: 10965
// Function ID: 85254
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 10965 (_isNativeReflectConstruct)
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
const map = new Map();
let tmp3 = ((Store) => {
  class GuildRoleConnectionEligibilityStore {
    constructor() {
      self = this;
      tmp = GuildRoleConnectionEligibilityStore(this, GuildRoleConnectionEligibilityStore);
      obj = outer1_3(GuildRoleConnectionEligibilityStore);
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
  callback2(GuildRoleConnectionEligibilityStore, Store);
  const items = [
    {
      key: "getGuildRoleConnectionEligibility",
      value(arg0) {
        let value;
        if (null != arg0) {
          value = outer1_5.get(arg0);
        }
        return value;
      }
    }
  ];
  return callback(GuildRoleConnectionEligibilityStore, items);
})(require("initialize").Store);
tmp3.displayName = "GuildRoleConnectionEligibilityStore";
tmp3 = new tmp3(require("dispatcher"), {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionEligibility);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/connections/GuildRoleConnectionEligibilityStore.tsx");

export default tmp3;
