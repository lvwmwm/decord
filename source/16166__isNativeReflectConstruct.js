// Module ID: 16166
// Function ID: 124882
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16166 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
const map = new Map();
let tmp3 = (Store) => {
  class GuildRoleConnectionsConfigurationStore {
    constructor() {
      self = this;
      tmp = GuildRoleConnectionsConfigurationStore(this, GuildRoleConnectionsConfigurationStore);
      obj = closure_3(GuildRoleConnectionsConfigurationStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = GuildRoleConnectionsConfigurationStore;
  callback2(GuildRoleConnectionsConfigurationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getGuildRoleConnectionsConfiguration",
    value(arg0) {
      return closure_6.get(arg0);
    }
  };
  items[1] = obj;
  return callback(GuildRoleConnectionsConfigurationStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp3.displayName = "GuildRoleConnectionsConfigurationStore";
tmp3 = new tmp3(importDefault(dependencyMap[7]), {
  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionConfigurations);
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/connections/GuildRoleConnectionsConfigurationStore.tsx");

export default tmp3;
