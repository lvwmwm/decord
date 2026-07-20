// Module ID: 11434
// Function ID: 89040
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11434 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function removeAccountById(userId) {
  const arg1 = userId;
  const arr = arr.filter((id) => id.id !== id);
  importAll(dependencyMap[7]).removeToken(userId);
}
function setTokenStatus(userId, INVALID) {
  INVALID = userId;
  const substr = arr.slice();
  const found = substr.find((id) => id.id === id);
  if (null != found) {
    found.tokenStatus = INVALID;
    const arr = substr;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const MAX_ACCOUNTS = arg1(dependencyMap[5]).MAX_ACCOUNTS;
let obj = { INVALID: 0, [0]: "INVALID", VALIDATING: 1, [1]: "VALIDATING", VALID: 2, [2]: "VALID" };
let closure_13 = [];
let tmp2 = (PersistedStore) => {
  class MultiAccountStore {
    constructor() {
      self = this;
      tmp = closure_4(this, MultiAccountStore);
      obj = closure_7(MultiAccountStore);
      tmp2 = closure_6;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = MultiAccountStore;
  callback2(MultiAccountStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(users) {
      if (null != users) {
        users = users.users;
        if (null == users) {
          users = [];
        }
        const canUseMultiAccountMobile = users.canUseMultiAccountMobile;
      }
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "getCanUseMultiAccountMobile",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { users: closure_13, canUseMultiAccountMobile: closure_11 };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUsers",
    value() {
      return closure_13;
    }
  };
  items[4] = {
    key: "getValidUsers",
    value() {
      return closure_13.filter((tokenStatus) => tokenStatus.tokenStatus !== constants.INVALID);
    }
  };
  items[5] = {
    key: "getHasLoggedInAccounts",
    value() {
      return closure_13.length > 0;
    }
  };
  items[6] = {
    key: "getIsValidatingUsers",
    value() {
      return closure_13.some((tokenStatus) => tokenStatus.tokenStatus === constants.VALIDATING);
    }
  };
  items[7] = {
    key: "canUseMultiAccountNotifications",
    get() {
      return this.getCanUseMultiAccountMobile();
    }
  };
  return callback(MultiAccountStore, items);
}(importDefault(dependencyMap[9]).PersistedStore);
tmp2.displayName = "MultiAccountStore";
tmp2.persistKey = "MultiAccountStore";
const items = [
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
    const arg1 = user;
    const id = user.id;
    let tmp = !closure_11;
    if (tmp) {
      tmp = importDefault(dependencyMap[6])(user);
    }
    if (tmp) {
      closure_11 = true;
    }
    const substr = arr.slice();
    const findIndexResult = substr.findIndex((id) => id.id === user.id);
    if (findIndexResult > -1) {
      arr[findIndexResult].avatar = user.avatar;
      arr[findIndexResult].username = user.username;
      arr[findIndexResult].discriminator = user.discriminator;
      arr[findIndexResult].tokenStatus = obj.VALID;
      let arr = substr;
    } else {
      const obj = {};
      ({ id: obj.id, avatar: obj.avatar, username: obj.username, discriminator: obj.discriminator } = user);
      obj.tokenStatus = obj.VALID;
      obj.pushSyncToken = null;
      arr = substr.push(obj);
      arr = substr;
    }
    if (arr.length > MAX_ACCOUNTS) {
      const item = arr.splice(MAX_ACCOUNTS).forEach((id) => {
        callback(id.id);
      });
      const spliceResult = arr.splice(MAX_ACCOUNTS);
    }
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    if (!isSwitchingAccount.isSwitchingAccount) {
      const arr = arr.filter((id) => id.id !== closure_10);
    }
    let closure_10 = null;
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
    closure_13 = arg1(dependencyMap[8]).moveItemFromTo(closure_13, from, to);
  },
  CURRENT_USER_UPDATE: function handleCurrentUserUpdate(user) {
    user = user.user;
    const arg1 = user;
    const substr = arr.slice();
    const found = substr.find((id) => id.id === user.id);
    if (null != found) {
      ({ avatar: tmp.avatar, username: tmp.username, discriminator: tmp.discriminator } = user);
      const arr = substr;
    }
  },
  MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: function handleUpdatePushSyncToken(arg0) {
    ({ userId: closure_0, pushSyncToken: closure_1 } = arg0);
  },
  MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: function handleInvalidatePushSyncTokens(invalidPushSyncTokens) {
    const arg1 = invalidPushSyncTokens.invalidPushSyncTokens;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[10]), obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/multi_account/MultiAccountStore.tsx");

export default tmp2;
export const MultiAccountTokenStatus = obj;
