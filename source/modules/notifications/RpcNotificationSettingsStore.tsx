// Module ID: 10212
// Function ID: 78920
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10212 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = {};
let tmp2 = (Store) => {
  class RpcNotificationSettingsStore {
    constructor() {
      self = this;
      tmp = RpcNotificationSettingsStore(this, RpcNotificationSettingsStore);
      obj = closure_3(RpcNotificationSettingsStore);
      tmp2 = closure_2;
      if (closure_7()) {
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
  let closure_0 = RpcNotificationSettingsStore;
  callback2(RpcNotificationSettingsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, ];
  obj = {
    key: "areSlayerNotificationsSuppressed",
    value() {
      for (const key10002 in closure_6) {
        let tmp = key10002;
        let tmp2 = closure_6;
        let tmp3 = closure_5;
        if (closure_6[key10002] !== closure_5.getId()) {
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
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "RpcNotificationSettingsStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  RPC_APP_DISCONNECTED: function handleRpcAppDisconnected(arg0) {
    delete r1[r0];
  },
  SET_RPC_NOTIFICATION_SETTINGS: function handleSetRpcNotificationSettings(suppressNotifications) {
    delete r3[r2];
    if (suppressNotifications.suppressNotifications) {
      closure_6[suppressNotifications.socketId] = suppressNotifications.targetUserId;
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/notifications/RpcNotificationSettingsStore.tsx");

export default tmp2;
