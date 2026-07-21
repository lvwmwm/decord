// Module ID: 10954
// Function ID: 85192
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10954 (_isNativeReflectConstruct)
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
const map = new Map();
let tmp3 = (Store) => {
  class GuildRoleConnectionEligibilityStore {
    constructor() {
      self = this;
      tmp = GuildRoleConnectionEligibilityStore(this, GuildRoleConnectionEligibilityStore);
      obj = closure_3(GuildRoleConnectionEligibilityStore);
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
  let closure_0 = GuildRoleConnectionEligibilityStore;
  callback2(GuildRoleConnectionEligibilityStore, Store);
  const items = [
    {
      key: "getGuildRoleConnectionEligibility",
      value(arg0) {
        let value;
        if (null != arg0) {
          value = closure_5.get(arg0);
        }
        return value;
      }
    }
  ];
  return callback(GuildRoleConnectionEligibilityStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp3.displayName = "GuildRoleConnectionEligibilityStore";
tmp3 = new tmp3(importDefault(dependencyMap[6]), {
  GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function handleFetchSuccess(roleId) {
    const result = map.set(roleId.roleId, roleId.roleConnectionEligibility);
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/connections/GuildRoleConnectionEligibilityStore.tsx");

export default tmp3;
