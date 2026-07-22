// Module ID: 4048
// Function ID: 33772
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4048 (_isNativeReflectConstruct)
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
let closure_7 = {};
let tmp2 = (Store) => {
  class AuthInviteStore {
    constructor() {
      self = this;
      tmp = closure_2(this, AuthInviteStore);
      obj = closure_5(AuthInviteStore);
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
  const arg1 = AuthInviteStore;
  callback2(AuthInviteStore, Store);
  const items = [
    {
      key: "getGuild",
      value(arg0) {
        return closure_7[arg0];
      }
    }
  ];
  return callback(AuthInviteStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "AuthInviteStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  AUTH_INVITE_UPDATE: function handleAuthInviteUpdate(invite) {
    const guild = invite.invite.guild;
    if (null == guild) {
      return false;
    } else {
      closure_7[guild.id] = arg1(dependencyMap[5]).fromInviteGuild(guild);
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/auth/AuthInviteStore.tsx");

export default tmp2;
