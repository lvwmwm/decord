// Module ID: 11482
// Function ID: 89360
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 11483, 11484, 684, 11485, 566, 686, 2]

// Module 11482 (_isNativeReflectConstruct)
import isStaff from "isStaff";
import fromEntries from "fromEntries";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { MAX_ACCOUNTS } from "MAX_ACCOUNTS";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function removeAccountById(userId) {
  let closure_0 = userId;
  closure_13 = closure_13.filter((id) => id.id !== closure_0);
  importAll(684).removeToken(userId);
}
function setTokenStatus(userId, INVALID) {
  let closure_0 = userId;
  substr = substr.slice();
  const found = substr.find((id) => id.id === closure_0);
  if (null != found) {
    found.tokenStatus = INVALID;
  }
}
let obj = { INVALID: 0, [0]: "INVALID", VALIDATING: 1, [1]: "VALIDATING", VALID: 2, [2]: "VALID" };
let closure_13 = [];
let tmp2 = ((PersistedStore) => {
  class MultiAccountStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, MultiAccountStore);
      obj = outer1_7(MultiAccountStore);
      tmp2 = outer1_6;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MultiAccountStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(users) {
      if (null != users) {
        users = users.users;
        if (null == users) {
          users = [];
        }
        const outer1_13 = users;
        const outer1_11 = users.canUseMultiAccountMobile;
      }
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getCanUseMultiAccountMobile",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { users: outer1_13, canUseMultiAccountMobile: outer1_11 };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUsers",
    value() {
      return outer1_13;
    }
  };
  items[4] = {
    key: "getValidUsers",
    value() {
      return outer1_13.filter((tokenStatus) => tokenStatus.tokenStatus !== outer2_12.INVALID);
    }
  };
  items[5] = {
    key: "getHasLoggedInAccounts",
    value() {
      return outer1_13.length > 0;
    }
  };
  items[6] = {
    key: "getIsValidatingUsers",
    value() {
      return outer1_13.some((tokenStatus) => tokenStatus.tokenStatus === outer2_12.VALIDATING);
    }
  };
  items[7] = {
    key: "canUseMultiAccountNotifications",
    get() {
      return this.getCanUseMultiAccountMobile();
    }
  };
  return callback(MultiAccountStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "MultiAccountStore";
tmp2.persistKey = "MultiAccountStore";
let items = [
  (users) => {
    if (null != users) {
      let obj = {};
      users = users.users;
      if (null == users) {
        users = [];
      }
      obj.users = users;
      obj.canUseMultiAccountMobile = false;
    } else {
      obj = { users: [], canUseMultiAccountMobile: false };
    }
    return obj;
  }
];
tmp2.migrations = items;
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    const id = user.id;
    let tmp = !c11;
    if (tmp) {
      tmp = importDefault(11484)(user);
    }
    if (tmp) {
      c11 = true;
    }
    substr = substr.slice();
    const findIndexResult = substr.findIndex((id) => id.id === user.id);
    if (findIndexResult > -1) {
      substr[findIndexResult].avatar = user.avatar;
      substr[findIndexResult].username = user.username;
      substr[findIndexResult].discriminator = user.discriminator;
      substr[findIndexResult].tokenStatus = obj.VALID;
    } else {
      obj = {};
      ({ id: obj.id, avatar: obj.avatar, username: obj.username, discriminator: obj.discriminator } = user);
      obj.tokenStatus = obj.VALID;
      obj.pushSyncToken = null;
      substr.push(obj);
    }
    if (substr.length > MAX_ACCOUNTS) {
      const item = substr.splice(MAX_ACCOUNTS).forEach((id) => {
        outer1_15(id.id);
      });
      const spliceResult = substr.splice(MAX_ACCOUNTS);
    }
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      closure_13 = closure_13.filter((id) => id.id !== c10);
    }
    let c10 = null;
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST(userId) {
    setTokenStatus(userId.userId, obj.VALIDATING);
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS(userId) {
    setTokenStatus(userId.userId, obj.VALID);
  },
  MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE(userId) {
    setTokenStatus(userId.userId, obj.INVALID);
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT(userId) {
    removeAccountById(userId.userId);
  },
  MULTI_ACCOUNT_MOVE_ACCOUNT: function handleMoveAccount(arg0) {
    let from;
    let to;
    ({ from, to } = arg0);
    closure_13 = require(11485) /* calculatePositionDeltas */.moveItemFromTo(closure_13, from, to);
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate(user) {
    user = user.user;
    substr = substr.slice();
    const found = substr.find((id) => id.id === user.id);
    if (null != found) {
      ({ avatar: tmp.avatar, username: tmp.username, discriminator: tmp.discriminator } = user);
    }
  },
  MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function handleUpdatePushSyncToken(arg0) {
    let importDefault;
    let require;
    ({ userId: require, pushSyncToken: importDefault } = arg0);
    closure_13 = closure_13.map((id) => {
      let tmp = id;
      if (id.id === closure_0) {
        const obj = {};
        const merged = Object.assign(id);
        obj["pushSyncToken"] = closure_1;
        tmp = obj;
      }
      return tmp;
    });
  },
  MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function handleInvalidatePushSyncTokens(invalidPushSyncTokens) {
    invalidPushSyncTokens = invalidPushSyncTokens.invalidPushSyncTokens;
    closure_13 = closure_13.map((pushSyncToken) => {
      let tmp = pushSyncToken;
      if (null != pushSyncToken.pushSyncToken) {
        tmp = pushSyncToken;
        if (invalidPushSyncTokens.includes(pushSyncToken.pushSyncToken)) {
          const obj = {};
          const merged = Object.assign(pushSyncToken);
          obj["pushSyncToken"] = null;
          tmp = obj;
        }
      }
      return tmp;
    });
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/multi_account/MultiAccountStore.tsx");

export default tmp2;
export const MultiAccountTokenStatus = obj;
