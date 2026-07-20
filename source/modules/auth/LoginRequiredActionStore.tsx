// Module ID: 1341
// Function ID: 15785
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1341 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateRequiredActions(userId, required_actions) {
  if (null == required_actions) {
    if (userId in closure_5) {
      delete r0[r1];
    }
  } else if (null != userId) {
    closure_5[userId] = required_actions;
  }
}
function handleUpdateUser(user) {
  const id = user.user.id;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
let closure_6 = null;
let closure_7 = null;
let tmp2 = (PersistedStore) => {
  class LoginRequiredActionStore {
    constructor() {
      self = this;
      tmp = LoginRequiredActionStore(this, LoginRequiredActionStore);
      obj = closure_3(LoginRequiredActionStore);
      tmp2 = closure_2;
      if (closure_8()) {
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
  let closure_0 = LoginRequiredActionStore;
  callback2(LoginRequiredActionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {

    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "requiredActions",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_5[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "requiredActionsIncludes",
    value(arg0, arr) {
      const requiredActionsResult = this.requiredActions(arg0);
      const LoginRequiredActionStore = requiredActionsResult;
      let reduced = null != requiredActionsResult;
      if (reduced) {
        reduced = arr.reduce((arg0, arg1) => {
          let hasItem = arg0;
          if (!arg0) {
            hasItem = requiredActionsResult.includes(arg1);
          }
          return hasItem;
        }, false);
      }
      return reduced;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "wasLoginAttemptedInSession",
    value(arg0) {
      return closure_6 === arg0;
    }
  };
  items[4] = {
    key: "getState",
    value() {
      return closure_5;
    }
  };
  return callback(LoginRequiredActionStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "LoginRequiredActionStore";
tmp2.persistKey = "LoginRequiredActionStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  LOGIN_ATTEMPTED: function handleLoginAttempted(user_id) {
    user_id = user_id.user_id;
    let closure_6 = user_id;
    updateRequiredActions(user_id, user_id.required_actions);
  },
  CONNECTION_OPEN: handleUpdateUser,
  CURRENT_USER_UPDATE: handleUpdateUser,
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (!isSwitchingAccount) {
      isSwitchingAccount = null == closure_7;
    }
    if (!isSwitchingAccount) {
      updateRequiredActions(closure_7, null);
    }
  },
  PASSWORD_UPDATED: function handlePasswordUpdated(userId) {
    updateRequiredActions(userId.userId, null);
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleRemoveMultiAccount(userId) {
    updateRequiredActions(userId.userId, null);
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/auth/LoginRequiredActionStore.tsx");

export default tmp2;
