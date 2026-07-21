// Module ID: 16210
// Function ID: 125302
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16210 (_isNativeReflectConstruct)
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
let closure_5 = {};
let tmp2 = (Store) => {
  class GuildConfigGatesStore {
    constructor() {
      self = this;
      tmp = GuildConfigGatesStore(this, GuildConfigGatesStore);
      obj = closure_3(GuildConfigGatesStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = GuildConfigGatesStore;
  callback2(GuildConfigGatesStore, Store);
  let obj = {
    key: "hasLoaded",
    value(arg0) {
      return null != closure_5[arg0];
    }
  };
  const items = [obj, ];
  obj = {
    key: "getGates",
    value(arg0) {
      let obj = closure_5[arg0];
      if (null == obj) {
        obj = {};
      }
      return obj;
    }
  };
  items[1] = obj;
  return callback(GuildConfigGatesStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "GuildConfigGatesStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  GUILD_CONFIG_GATES_FETCH_SUCCESS: function handleFetchSuccess(guildId) {
    closure_5[guildId.guildId] = { guildVerificationRoleEnabled: guildId.guildVerificationRoleEnabled, applicationIdentityLinkedRolesEnabled: guildId.applicationIdentityLinkedRolesEnabled };
  },
  LOGOUT: function handleLogout() {
    let closure_5 = {};
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_config_gates/GuildConfigGatesStore.tsx");

export default tmp2;
