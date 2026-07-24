// Module ID: 1341
// Function ID: 15792
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 1341 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function updateRequiredActions(userId, required_actions) {
  if (null == required_actions) {
    if (userId in closure_5) {
      delete tmp[tmp2];
    }
  } else if (null != userId) {
    closure_5[userId] = required_actions;
  }
}
function handleUpdateUser(user) {
  const id = user.user.id;
}
let closure_5 = {};
let c6 = null;
let c7 = null;
let tmp2 = ((PersistedStore) => {
  class LoginRequiredActionStore {
    constructor() {
      self = this;
      tmp = LoginRequiredActionStore(this, LoginRequiredActionStore);
      obj = outer1_3(LoginRequiredActionStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(LoginRequiredActionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        const outer1_5 = arg0;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "requiredActions",
    value(arg0) {
      let tmp2 = null;
      if (null != outer1_5[arg0]) {
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
            hasItem = dispatcher.includes(arg1);
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
      return outer1_6 === arg0;
    }
  };
  items[4] = {
    key: "getState",
    value() {
      return outer1_5;
    }
  };
  return callback(LoginRequiredActionStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "LoginRequiredActionStore";
tmp2.persistKey = "LoginRequiredActionStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOGIN_ATTEMPTED: function handleLoginAttempted(user_id) {
    user_id = user_id.user_id;
    updateRequiredActions(user_id, user_id.required_actions);
  },
  CONNECTION_OPEN: handleUpdateUser,
  CURRENT_USER_UPDATE: handleUpdateUser,
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (!isSwitchingAccount) {
      isSwitchingAccount = null == c7;
    }
    if (!isSwitchingAccount) {
      updateRequiredActions(c7, null);
    }
  },
  PASSWORD_UPDATED: function handlePasswordUpdated(userId) {
    updateRequiredActions(userId.userId, null);
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function handleRemoveMultiAccount(userId) {
    updateRequiredActions(userId.userId, null);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/auth/LoginRequiredActionStore.tsx");

export default tmp2;
