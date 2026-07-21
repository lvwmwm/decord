// Module ID: 15970
// Function ID: 122506
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15970 (_isNativeReflectConstruct)
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
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ LoginRequiredActions: closure_10, Routes: closure_11, UserSettingsSections: closure_12 } = arg1(dependencyMap[7]));
let tmp3 = (arg0) => {
  class LoginRequiredActionManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, LoginRequiredActionManager);
      items1 = [...items];
      obj = closure_6(LoginRequiredActionManager);
      tmp2 = closure_5;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { POST_CONNECTION_OPEN: tmp2Result.handleConnectionOpen };
      return tmp2Result;
    }
  }
  const arg1 = LoginRequiredActionManager;
  callback2(LoginRequiredActionManager, arg0);
  const items = [
    {
      key: "handleConnectionOpen",
      value() {
        const currentUser = currentUser.getCurrentUser();
        const LoginRequiredActionManager = currentUser;
        if (null != currentUser) {
          const items = [constants.UPDATE_PASSWORD];
          const result = closure_9.wasLoginAttemptedInSession(currentUser.id);
          const result1 = closure_9.requiredActionsIncludes(currentUser.id, items);
          if (result) {
            if (result1) {
              let obj = { screen: constants3.ACCOUNT_CHANGE_PASSWORD };
              obj = { isLoginRequiredAction: true };
              obj.params = obj;
              obj.onClose = function onClose() {
                const items = [constants.UPDATE_PASSWORD];
                if (closure_9.requiredActionsIncludes(currentUser.id, items)) {
                  callback(closure_2[9]).logout("login_required_account_manager", constants2.LOGIN);
                  const obj = callback(closure_2[9]);
                }
              };
              LoginRequiredActionManager(closure_2[8]).openUserSettings(obj);
              const obj2 = LoginRequiredActionManager(closure_2[8]);
            }
          }
          if (result1) {
            obj = callback(closure_2[9]);
            obj.logout("login_required_account_manager", constants2.LOGIN);
          }
        }
      }
    }
  ];
  return callback(LoginRequiredActionManager, items);
}(importDefault(dependencyMap[10]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/auth/native/LoginRequiredActionManager.tsx");

export default tmp3;
