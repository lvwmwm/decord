// Module ID: 15981
// Function ID: 122637
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15981 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class MultiAccountManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, MultiAccountManager);
      items1 = [...items];
      obj = closure_6(MultiAccountManager);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      MultiAccountManager = tmp2Result;
      tmp2Result.actions = {
        LOGOUT(arg0) {
              return tmp2Result.handleLogout(arg0);
            },
        MULTI_ACCOUNT_SWITCH_START(arg0) {
              return tmp2Result.handleMultiAccountSwitchStart(arg0);
            }
      };
      tmp2Result.handleConnectionOpen = () => {
        let switchResult = switchResult.getSwitchResult();
        if (null != switchResult) {
          const currentUser = currentUser.getCurrentUser();
          if (null != currentUser) {
            if (switchResult.success) {
              obj2.onSwitchSuccess(currentUser, switchResult.navigateHome);
            } else {
              obj2.onSwitchError(currentUser);
            }
            switchResult = tmp2Result(closure_2[7]);
            const result = switchResult.setAccountSwitchUserId(null);
            tmp2Result.onSwitchComplete();
          }
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = MultiAccountManager;
  callback2(MultiAccountManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const subscription = callback(closure_2[8]).subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
      this.handleConnectionOpen();
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "_terminate",
    value() {
      callback(closure_2[8]).unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
  };
  items[1] = obj;
  obj = {
    key: "handleLogout",
    value(isSwitchingAccount) {
      const self = this;
      if (isSwitchingAccount.isSwitchingAccount) {
        self.onSwitchStart();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleMultiAccountSwitchStart",
    value(targetUserId) {
      const result = MultiAccountManager(closure_2[7]).setAccountSwitchUserId(targetUserId.targetUserId);
    }
  };
  return callback(MultiAccountManager, items);
}(importDefault(dependencyMap[9]));
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/multi_account/MultiAccountManager.tsx");

export default tmp2;
