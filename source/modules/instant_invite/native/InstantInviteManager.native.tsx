// Module ID: 15961
// Function ID: 122414
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15961 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let tmp2 = (arg0) => {
  class InstantInviteManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, InstantInviteManager);
      items1 = [...items];
      obj = closure_6(InstantInviteManager);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      InstantInviteManager = tmp2Result;
      tmp2Result.actions = {
        NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED() {
              return tmp2Result.shareInviteFailed();
            }
      };
      tmp2Result.shareInviteFailed = () => {
        let obj = callback(closure_2[5]);
        obj = { key: "GROUP_DM_ADD_ERROR" };
        const intl = tmp2Result(closure_2[6]).intl;
        obj.content = intl.string(tmp2Result(closure_2[6]).t.N/9OFy);
        obj.open(obj);
      };
      return tmp2Result;
    }
  }
  const arg1 = InstantInviteManager;
  callback2(InstantInviteManager, arg0);
  return callback(InstantInviteManager);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/instant_invite/native/InstantInviteManager.native.tsx");

export default tmp2;
