// Module ID: 16353
// Function ID: 127513
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1838, 566, 686, 2]

// Module 16353 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
const map = new Map();
let tmp3 = ((Store) => {
  class GuildRoleConnectionsConfigurationStore {
    constructor() {
      self = this;
      tmp = GuildRoleConnectionsConfigurationStore(this, GuildRoleConnectionsConfigurationStore);
      obj = outer1_3(GuildRoleConnectionsConfigurationStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(GuildRoleConnectionsConfigurationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getGuildRoleConnectionsConfiguration",
    value(arg0) {
      return outer1_6.get(arg0);
    }
  };
  items[1] = obj;
  return callback(GuildRoleConnectionsConfigurationStore, items);
})(require("initialize").Store);
tmp3.displayName = "GuildRoleConnectionsConfigurationStore";
tmp3 = new tmp3(require("dispatcher"), {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionConfigurations);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/connections/GuildRoleConnectionsConfigurationStore.tsx");

export default tmp3;
