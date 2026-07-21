// Module ID: 10699
// Function ID: 83299
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10699 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isMobileOverlaySupported() {
  let isAndroidResult = arg1(dependencyMap[7]).isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !arg1(dependencyMap[8]).isMetaQuest();
    const obj2 = arg1(dependencyMap[8]);
  }
  return isAndroidResult;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
let closure_9 = false;
let tmp2 = (DeviceSettingsStore) => {
  class MobileVoiceOverlayStore {
    constructor() {
      self = this;
      tmp = closure_3(this, MobileVoiceOverlayStore);
      obj = closure_6(MobileVoiceOverlayStore);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = MobileVoiceOverlayStore;
  callback2(MobileVoiceOverlayStore, DeviceSettingsStore);
  let obj = {
    key: "getUserAgnosticState",
    value() {
      return { enabled: closure_9 };
    }
  };
  const items = [obj, , ];
  obj = {
    key: "initialize",
    value(enabled) {
      enabled = undefined;
      if (null != enabled) {
        enabled = enabled.enabled;
      }
      let closure_9 = null != enabled && enabled;
    }
  };
  items[1] = obj;
  obj = {
    key: "getEnabled",
    value() {
      return callback4() && closure_9;
    }
  };
  items[2] = obj;
  return callback(MobileVoiceOverlayStore, items);
}(importDefault(dependencyMap[9]).DeviceSettingsStore);
tmp2.displayName = "MobileVoiceOverlayStore";
tmp2.persistKey = "MobileVoiceOverlayStore";
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  MOBILE_VOICE_OVERLAY_STATE_CHANGED: function handleMobileVoiceOverlayStateChanged(enabled) {
    let obj = importDefault(dependencyMap[6]);
    obj = { enabled: enabled.enabled };
    obj.track(AnalyticEvents.MOBILE_OVERLAY_TOGGLED, obj);
    enabled = enabled.enabled;
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/native/MobileVoiceOverlayStore.tsx");

export default tmp2;
export { isMobileOverlaySupported };
