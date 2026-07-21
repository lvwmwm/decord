// Module ID: 16453
// Function ID: 127095
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16453 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleUserApplicationIdentityGatewayEvent(user_id) {
  const useUserApplicationIdentities = arg1(dependencyMap[5]).useUserApplicationIdentities;
  useUserApplicationIdentities.refetch(user_id.user_id);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let tmp2 = (arg0) => {
  class UserApplicationIdentityManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, UserApplicationIdentityManager);
      items1 = [...items];
      obj = closure_5(UserApplicationIdentityManager);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { USER_APPLICATION_IDENTITY_UPDATE: closure_8, USER_APPLICATION_IDENTITY_REMOVE: closure_8 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = UserApplicationIdentityManager;
  callback2(UserApplicationIdentityManager, arg0);
  return callback(UserApplicationIdentityManager);
}(importDefault(dependencyMap[6]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_application_identity/UserApplicationIdentityManager.tsx");

export default tmp2;
