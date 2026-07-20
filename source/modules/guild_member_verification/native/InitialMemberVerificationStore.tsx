// Module ID: 9138
// Function ID: 71648
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: setInitialVerification

// Module 9138 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const map = new Map();
let tmp3 = (Store) => {
  class InitialMemberVerificationStore {
    constructor() {
      self = this;
      tmp = closure_2(this, InitialMemberVerificationStore);
      obj = closure_5(InitialMemberVerificationStore);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = InitialMemberVerificationStore;
  callback2(InitialMemberVerificationStore, Store);
  const items = [
    {
      key: "getInitialVerificationState",
      value(arg0) {
        let tmp = null;
        if (null != arg0) {
          const value = closure_7.get(arg0);
          let tmp4 = null;
          if (null != value) {
            tmp4 = value;
          }
          tmp = tmp4;
        }
        return tmp;
      }
    }
  ];
  return callback(InitialMemberVerificationStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp3.displayName = "InitialMemberVerificationStore";
tmp3 = new tmp3(importDefault(dependencyMap[6]), {
  SET_INITIAL_MEMBER_VERIFICATION: function handleSetInitialState(guildId) {
    guildId = guildId.guildId;
    if (!map.has(guildId)) {
      const result = map.set(guildId, guildId.state);
    }
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_member_verification/native/InitialMemberVerificationStore.tsx");

export default tmp3;
export const setInitialVerification = function setInitialVerification(guildId, state) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "SET_INITIAL_MEMBER_VERIFICATION", guildId, state };
  obj.dispatch(obj);
};
