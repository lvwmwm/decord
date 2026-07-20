// Module ID: 13245
// Function ID: 100542
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13245 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function announceIncomingCall(channelId) {
  if (!set.has(channelId)) {
    let obj = arg1(dependencyMap[9]);
    if (!obj.isIOS()) {
      const channel = channel.getChannel(channelId);
      if (null != channel) {
        const channelName = arg1(dependencyMap[11]).computeChannelName(channel, closure_11, closure_10);
        if (null != channelName) {
          set.add(channelId);
          const AccessibilityAnnouncer = arg1(dependencyMap[12]).AccessibilityAnnouncer;
          const intl = arg1(dependencyMap[13]).intl;
          obj = { callLocation: channelName };
          AccessibilityAnnouncer.announce(intl.formatToPlainString(arg1(dependencyMap[13]).t.Bm0A/p, obj), "assertive");
        }
        const obj3 = arg1(dependencyMap[11]);
      }
    } else {
      const NativePhoneIntegrationEnabled = arg1(dependencyMap[10]).NativePhoneIntegrationEnabled;
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const set = new Set();
const map = new Map();
let tmp4 = (arg0) => {
  class AccessibilityCallManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, AccessibilityCallManager);
      items1 = [...items];
      obj = closure_6(AccessibilityCallManager);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.handleCallCreate = (channelId) => {
        channelId = channelId.channelId;
        const id = store.getId();
        const result = store2.set(channelId, tmp2);
        if (null != id && id in channelId.ongoingRings) {
          callback(channelId);
        }
      };
      tmp2Result.handleCallUpdate = (channelId) => {
        channelId = channelId.channelId;
        const id = store.getId();
        const value = store2.get(channelId);
        let tmp3 = null != value && value;
        const result = store2.set(channelId, tmp4);
        if (!tmp3) {
          if (tmp4) {
            callback(channelId);
          }
        }
        if (tmp3) {
          tmp3 = !tmp4;
        }
        if (tmp3) {
          set.delete(channelId);
        }
      };
      tmp2Result.handleCallDelete = (channelId) => {
        channelId = channelId.channelId;
        store2.delete(channelId);
        set.delete(channelId);
      };
      tmp2Result.handleConnectionOpen = () => {
        store2.clear();
        set.clear();
      };
      return tmp2Result;
    }
  }
  const arg1 = AccessibilityCallManager;
  callback2(AccessibilityCallManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const subscription = callback(closure_2[14]).subscribe("CALL_CREATE", this.handleCallCreate);
      const obj = callback(closure_2[14]);
      const subscription1 = callback(closure_2[14]).subscribe("CALL_UPDATE", this.handleCallUpdate);
      const obj2 = callback(closure_2[14]);
      const subscription2 = callback(closure_2[14]).subscribe("CALL_DELETE", this.handleCallDelete);
      const obj3 = callback(closure_2[14]);
      const subscription3 = callback(closure_2[14]).subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      callback(closure_2[14]).unsubscribe("CALL_CREATE", this.handleCallCreate);
      const obj = callback(closure_2[14]);
      callback(closure_2[14]).unsubscribe("CALL_UPDATE", this.handleCallUpdate);
      const obj2 = callback(closure_2[14]);
      callback(closure_2[14]).unsubscribe("CALL_DELETE", this.handleCallDelete);
      const obj3 = callback(closure_2[14]);
      callback(closure_2[14]).unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
      closure_13.clear();
      closure_12.clear();
    }
  };
  items[1] = obj;
  return callback(AccessibilityCallManager, items);
}(importDefault(dependencyMap[15]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/a11y/native/AccessibilityCallManager.tsx");

export default tmp4;
