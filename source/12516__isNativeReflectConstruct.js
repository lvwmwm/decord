// Module ID: 12516
// Function ID: 96129
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12516 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getFastConnectUserId() {
  return arg1(dependencyMap[8]).getLastFastConnectIdentifyUserId();
}
function getBaseSwitchAnalytics(id) {
  const obj = { from_user_id: closure_13, to_user_id: closure_14, actual_user_id: id, fast_connect_user_id: getFastConnectUserId() };
  const users = authStore.getUsers();
  obj.linked_user_ids = users.map((id) => id.id);
  obj.has_ever_connected = closure_17;
  obj.switch_origin = closure_15;
  return obj;
}
function isDiagnosticsEnabled() {
  let flag = closure_16;
  if (closure_16) {
    flag = true;
  }
  return flag;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult("MultiAccountSwitchStore");
let closure_12 = null;
let closure_13 = null;
let closure_14 = null;
let closure_15 = null;
let closure_16 = false;
let closure_17 = false;
let closure_18 = false;
let closure_19 = null;
let tmp4 = (Store) => {
  class MultiAccountSwitchStore {
    constructor() {
      self = this;
      tmp = closure_4(this, MultiAccountSwitchStore);
      obj = closure_7(MultiAccountSwitchStore);
      tmp2 = closure_6;
      if (closure_20()) {
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
  const arg1 = MultiAccountSwitchStore;
  callback2(MultiAccountSwitchStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getIsSwitchingAccount",
    value() {
      return closure_16;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSwitchResult",
    value() {
      return closure_19;
    }
  };
  items[2] = obj;
  return callback(MultiAccountSwitchStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp4.displayName = "MultiAccountSwitchStore";
tmp4 = new tmp4(importDefault(dependencyMap[12]), {
  MULTI_ACCOUNT_SWITCH_START: function handleSwitchStart(arg0) {
    ({ targetUserId: closure_14, location: closure_15 } = arg0);
  },
  MULTI_ACCOUNT_SWITCH_TIMEOUT: function handleSwitchTimeout() {
    let obj = importDefault(dependencyMap[10]);
    obj = { from_user_id: closure_13, to_user_id: closure_14 };
    const users = authStore.getUsers();
    obj.linked_user_ids = users.map((id) => id.id);
    obj.has_ever_connected = closure_17;
    obj.switch_origin = closure_15;
    obj.track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TIMEOUT, obj);
    return false;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (isSwitchingAccount.isSwitchingAccount) {
      let closure_13 = closure_12;
      let goHomeAfterSwitching = isSwitchingAccount.goHomeAfterSwitching;
      let obj = { current_user_id: closure_12, expected_user_id: closure_14, fast_connect_user_id: getFastConnectUserId(), switch_origin: closure_15 };
      importDefaultResult.log("logout from account switch", obj);
    } else {
      goHomeAfterSwitching = false;
      obj = importAll(dependencyMap[9]);
      obj.removeToken(closure_12);
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    if (closure_16) {
      const id = user.id;
      if (isDiagnosticsEnabled()) {
        let obj = importAll(dependencyMap[9]);
        const token = obj.getToken(id);
        const token1 = importAll(dependencyMap[9]).getToken();
        let tmp10 = null != closure_14;
        if (tmp10) {
          tmp10 = id !== closure_14;
        }
        if (null != token && null != token1 && token !== token1) {
          obj = {};
          const merged = Object.assign(getBaseSwitchAnalytics(id));
          obj["user_token_exists"] = null != token;
          obj["main_token_exists"] = null != token1;
          obj["is_token_mismatch"] = tmp12;
          obj["is_user_mismatch"] = tmp10;
          importDefaultResult.log("Token mismatch on account switch connection open", obj);
          importDefault(dependencyMap[10]).track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_READY_MISMATCH, obj);
          const obj4 = importDefault(dependencyMap[10]);
        }
        const obj2 = importAll(dependencyMap[9]);
      }
      let tmp23 = closure_13 !== user.id;
      const tmp25 = getBaseSwitchAnalytics(user.id);
      let track = importDefault(dependencyMap[10]).track;
      obj = AnalyticEvents;
      if (tmp23) {
        track(obj.MULTI_ACCOUNT_SWITCH_SUCCESS, tmp25);
        if (isDiagnosticsEnabled()) {
          track = importDefaultResult;
          importDefaultResult.log("Account switch success", tmp25);
        }
      } else {
        track(obj.MULTI_ACCOUNT_SWITCH_FAILURE, tmp25);
        if (isDiagnosticsEnabled()) {
          importDefaultResult.log("Account switch failure", tmp25);
        }
      }
      obj = { success: tmp23 };
      tmp23 = closure_18;
      obj.navigateHome = closure_18;
      let closure_19 = obj;
      const tmp28 = importDefault(dependencyMap[10]);
    } else {
      closure_19 = null;
      const token2 = importAll(dependencyMap[9]).getToken();
      let tmp40 = null != token2;
      if (tmp40) {
        tmp40 = "" !== token2;
      }
      if (tmp40) {
        function checkTokenCollisionIntroducedAtWrite(id, token2) {
          if (callback3()) {
            const users = authStore.getUsers();
            const mapped = users.map((id) => id.id);
            const found = mapped.filter((arg0) => {
              let tmp = arg0 !== arg0;
              if (tmp) {
                tmp = callback(closure_3[9]).getToken(arg0) === arg1;
                const obj = callback(closure_3[9]);
              }
              return tmp;
            });
            if (0 !== found.length) {
              let tmp2 = callback(closure_3[9]).getToken(id) === token2;
              let obj = {};
              const merged = Object.assign(callback2(id));
              obj["colliding_user_ids"] = found;
              if (!tmp2) {
                tmp2 = tmp11;
              }
              obj["is_already_corrupted"] = tmp2;
              closure_11.log("setToken about to introduce per-user token collision", obj);
              obj = token2(closure_3[10]);
              obj.track(constants.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, obj);
              const obj2 = callback(closure_3[9]);
              const tmp11 = found.length >= 2;
            }
          }
        }(user.id, token2);
        importAll(dependencyMap[9]).setToken(token2, user.id);
        const obj7 = importAll(dependencyMap[9]);
      }
      function checkGeneralTokenCollision(id) {
        if (callback3()) {
          const _Map = Map;
          const map = new Map();
          const users = authStore.getUsers();
          const item = users.forEach((id) => {
            id = id.id;
            const token = callback(closure_3[9]).getToken(id);
            if (null != token) {
              if ("" !== token) {
                let items = map.get(token);
                if (null == items) {
                  items = [];
                }
                items.push(id);
                const result = map.set(token, items);
              }
            }
          });
          const item1 = map.forEach((arg0) => {
            if (arg0.length >= 2) {
              const obj = {};
              const merged = Object.assign(callback2(arg0));
              obj["colliding_user_ids"] = arg0;
              closure_11.log("Per-user token collision detected", obj);
              map(closure_3[10]).track(constants.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, obj);
              const obj2 = map(closure_3[10]);
            }
          });
        }
      }(user.id);
      closure_13 = null;
      closure_14 = null;
      let closure_15 = null;
      closure_16 = false;
      closure_18 = false;
      let closure_17 = true;
      const id2 = user.id;
    }
  }
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/multi_account/MultiAccountSwitchStore.tsx");

export default tmp4;
