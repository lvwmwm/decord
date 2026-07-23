// Module ID: 10710
// Function ID: 83372
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 675, 477, 1553, 566, 686, 2]

// Module 10710 (_isNativeReflectConstruct)
import expandLocation from "expandLocation";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { AnalyticEvents } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isMobileOverlaySupported() {
  let isAndroidResult = require(477) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !require(1553) /* isMetaQuest */.isMetaQuest();
    const obj2 = require(1553) /* isMetaQuest */;
  }
  return isAndroidResult;
}
let c9 = false;
let tmp2 = ((DeviceSettingsStore) => {
  class MobileVoiceOverlayStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, MobileVoiceOverlayStore);
      obj = outer1_6(MobileVoiceOverlayStore);
      tmp2 = outer1_5;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MobileVoiceOverlayStore, DeviceSettingsStore);
  let obj = {
    key: "getUserAgnosticState",
    value() {
      return { enabled: outer1_9 };
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
      const outer1_9 = null != enabled && enabled;
    }
  };
  items[1] = obj;
  obj = {
    key: "getEnabled",
    value() {
      return outer1_11() && outer1_9;
    }
  };
  items[2] = obj;
  return callback(MobileVoiceOverlayStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "MobileVoiceOverlayStore";
tmp2.persistKey = "MobileVoiceOverlayStore";
tmp2 = new tmp2(require("dispatcher"), {
  MOBILE_VOICE_OVERLAY_STATE_CHANGED: function handleMobileVoiceOverlayStateChanged(enabled) {
    let obj = importDefault(675);
    obj = { enabled: enabled.enabled };
    obj.track(AnalyticEvents.MOBILE_OVERLAY_TOGGLED, obj);
    enabled = enabled.enabled;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/native/MobileVoiceOverlayStore.tsx");

export default tmp2;
export { isMobileOverlaySupported };
