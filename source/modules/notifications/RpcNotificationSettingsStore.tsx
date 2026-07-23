// Module ID: 10225
// Function ID: 79005
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 566, 686, 2]

// Module 10225 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = {};
let tmp2 = ((Store) => {
  class RpcNotificationSettingsStore {
    constructor() {
      self = this;
      tmp = RpcNotificationSettingsStore(this, RpcNotificationSettingsStore);
      obj = outer1_3(RpcNotificationSettingsStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
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
  callback2(RpcNotificationSettingsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_5);
    }
  };
  const items = [obj, ];
  obj = {
    key: "areSlayerNotificationsSuppressed",
    value() {
      for (const key10002 in outer1_6) {
        let tmp = key10002;
        let tmp2 = outer1_6;
        let tmp3 = outer1_5;
        if (outer1_6[key10002] !== outer1_5.getId()) {
          continue;
        } else {
          let flag = true;
          return true;
        }
      }
      return false;
    }
  };
  items[1] = obj;
  return callback(RpcNotificationSettingsStore, items);
})(require("initialize").Store);
tmp2.displayName = "RpcNotificationSettingsStore";
tmp2 = new tmp2(require("dispatcher"), {
  RPC_APP_DISCONNECTED: function handleRpcAppDisconnected(arg0) {
    delete tmp2[tmp];
  },
  SET_RPC_NOTIFICATION_SETTINGS: function handleSetRpcNotificationSettings(suppressNotifications) {
    delete tmp2[tmp];
    if (suppressNotifications.suppressNotifications) {
      closure_6[suppressNotifications.socketId] = suppressNotifications.targetUserId;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/notifications/RpcNotificationSettingsStore.tsx");

export default tmp2;
