// Module ID: 12695
// Function ID: 98679
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 11482, 653, 3, 25, 684, 675, 566, 686, 2]

// Module 12695 (_isNativeReflectConstruct)
import ME from "ME";
import timestamp from "timestamp";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import importDefaultResult from "_getPrototypeOf";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getFastConnectUserId() {
  return require(25) /* prepareIdentify */.getLastFastConnectIdentifyUserId();
}
function getBaseSwitchAnalytics(id) {
  const obj = { from_user_id: c13, to_user_id: c14, actual_user_id: id, fast_connect_user_id: getFastConnectUserId() };
  const users = authStore.getUsers();
  obj.linked_user_ids = users.map((id) => id.id);
  obj.has_ever_connected = c17;
  obj.switch_origin = c15;
  return obj;
}
function isDiagnosticsEnabled() {
  let flag = c16;
  if (c16) {
    flag = true;
  }
  return flag;
}
importDefaultResult = new importDefaultResult("MultiAccountSwitchStore");
let c12 = null;
let c13 = null;
let c14 = null;
let c15 = null;
let c16 = false;
let c17 = false;
let c18 = false;
let c19 = null;
let tmp4 = ((Store) => {
  class MultiAccountSwitchStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, MultiAccountSwitchStore);
      obj = outer1_7(MultiAccountSwitchStore);
      tmp2 = outer1_6;
      if (outer1_20()) {
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
  callback2(MultiAccountSwitchStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getIsSwitchingAccount",
    value() {
      return outer1_16;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSwitchResult",
    value() {
      return outer1_19;
    }
  };
  items[2] = obj;
  return callback(MultiAccountSwitchStore, items);
})(require("initialize").Store);
tmp4.displayName = "MultiAccountSwitchStore";
tmp4 = new tmp4(require("dispatcher"), {
  MULTI_ACCOUNT_SWITCH_START: function handleSwitchStart(arg0) {
    let c14;
    let c15;
    ({ targetUserId: c14, location: c15 } = arg0);
  },
  MULTI_ACCOUNT_SWITCH_TIMEOUT: function handleSwitchTimeout() {
    let obj = importDefault(675);
    obj = { from_user_id: c13, to_user_id: c14 };
    const users = authStore.getUsers();
    obj.linked_user_ids = users.map((id) => id.id);
    obj.has_ever_connected = c17;
    obj.switch_origin = c15;
    obj.track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_TIMEOUT, obj);
    return false;
  },
  LOGOUT: function handleLogout(isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    if (isSwitchingAccount.isSwitchingAccount) {
      let closure_13 = c12;
      let goHomeAfterSwitching = isSwitchingAccount.goHomeAfterSwitching;
      let obj = { current_user_id: c12, expected_user_id: c14, fast_connect_user_id: getFastConnectUserId(), switch_origin: c15 };
      importDefaultResult.log("logout from account switch", obj);
    } else {
      goHomeAfterSwitching = false;
      obj = importAll(684);
      obj.removeToken(c12);
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    if (c16) {
      let id = user.id;
      if (isDiagnosticsEnabled()) {
        let obj = importAll(684);
        let token = obj.getToken(id);
        const token1 = importAll(684).getToken();
        let tmp10 = null != c14;
        if (tmp10) {
          tmp10 = id !== c14;
        }
        if (null != token && null != token1 && token !== token1) {
          obj = {};
          let merged = Object.assign(getBaseSwitchAnalytics(id));
          obj["user_token_exists"] = null != token;
          obj["main_token_exists"] = null != token1;
          obj["is_token_mismatch"] = tmp12;
          obj["is_user_mismatch"] = tmp10;
          importDefaultResult.log("Token mismatch on account switch connection open", obj);
          importDefault(675).track(AnalyticEvents.MULTI_ACCOUNT_SWITCH_READY_MISMATCH, obj);
          const obj4 = importDefault(675);
        }
        let obj2 = importAll(684);
      }
      let tmp23 = c13 !== user.id;
      const tmp25 = getBaseSwitchAnalytics(user.id);
      let track = importDefault(675).track;
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
      tmp23 = c18;
      obj.navigateHome = c18;
      let c19 = obj;
      const tmp28 = importDefault(675);
    } else {
      c19 = null;
      const token2 = importAll(684).getToken();
      let tmp40 = null != token2;
      if (tmp40) {
        tmp40 = "" !== token2;
      }
      if (tmp40) {
        (function checkTokenCollisionIntroducedAtWrite(id, token2) {
          let closure_0 = id;
          let closure_1 = token2;
          if (outer1_23()) {
            const users = outer1_9.getUsers();
            const mapped = users.map((id) => id.id);
            const found = mapped.filter((arg0) => {
              let tmp = arg0 !== closure_0;
              if (tmp) {
                tmp = outer2_2(outer2_3[9]).getToken(arg0) === closure_1;
                const obj = outer2_2(outer2_3[9]);
              }
              return tmp;
            });
            if (0 !== found.length) {
              let tmp2 = outer1_2(outer1_3[9]).getToken(id) === token2;
              let obj = {};
              const merged = Object.assign(outer1_22(id));
              obj["colliding_user_ids"] = found;
              if (!tmp2) {
                tmp2 = tmp11;
              }
              obj["is_already_corrupted"] = tmp2;
              outer1_11.log("setToken about to introduce per-user token collision", obj);
              obj = outer1_1(outer1_3[10]);
              obj.track(outer1_10.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, obj);
              const obj2 = outer1_2(outer1_3[9]);
              tmp11 = found.length >= 2;
            }
          }
        })(user.id, token2);
        importAll(684).setToken(token2, user.id);
        const obj7 = importAll(684);
      }
      (function checkGeneralTokenCollision(id) {
        let closure_0 = id;
        if (outer1_23()) {
          const _Map = Map;
          const map = new Map();
          const users = outer1_9.getUsers();
          const item = users.forEach((id) => {
            id = id.id;
            const token = outer2_2(outer2_3[9]).getToken(id);
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
              const merged = Object.assign(outer2_22(closure_0));
              obj["colliding_user_ids"] = arg0;
              outer2_11.log("Per-user token collision detected", obj);
              outer2_1(outer2_3[10]).track(outer2_10.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, obj);
              const obj2 = outer2_1(outer2_3[10]);
            }
          });
        }
      })(user.id);
      c13 = null;
      c14 = null;
      let c15 = null;
      c16 = false;
      c18 = false;
      let c17 = true;
      id = user.id;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/multi_account/MultiAccountSwitchStore.tsx");

export default tmp4;
