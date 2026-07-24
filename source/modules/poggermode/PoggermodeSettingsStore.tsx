// Module ID: 6919
// Function ID: 55139
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 6920, 22, 566, 686, 2]

// Module 6919 (_isNativeReflectConstruct)
import closure_0 from "apply";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import ConfettiLocation from "ConfettiLocation";
import apply from "apply";

let ConfettiLocation;
let ShakeLocation;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ ShakeLocation, ConfettiLocation } = ConfettiLocation);
let c5 = false;
let obj = { settingsVisible: false, enabled: false, combosEnabled: true, combosRequiredCount: 5, comboSoundsEnabled: true, screenshakeEnabled: true, screenshakeEnabledLocations: { [ShakeLocation.CHAT_INPUT]: true, [ShakeLocation.VOICE_USER]: false, [ShakeLocation.MENTION]: false }, shakeIntensity: 1, confettiEnabled: true, confettiEnabledLocations: { [ConfettiLocation.CHAT_INPUT]: true, [ConfettiLocation.REACTION]: true, [ConfettiLocation.MEMBER_USER]: true, [ConfettiLocation.CALL_TILE]: true }, confettiSize: 16, confettiCount: 5, warningSeen: false };
let closure_6 = apply.cloneDeep(obj);
let tmp3 = ((DeviceSettingsStore) => {
  class PoggermodeSettingsStore {
    constructor() {
      self = this;
      tmp = PoggermodeSettingsStore(this, PoggermodeSettingsStore);
      obj = outer1_3(PoggermodeSettingsStore);
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
  callback2(PoggermodeSettingsStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const merged = Object.assign(outer1_6);
      const merged1 = Object.assign(arg0);
      outer1_6 = {};
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "settingsVisible",
    get() {
      return outer1_6.settingsVisible;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isEnabled",
    value() {
      let confettiLocation;
      let shakeLocation;
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      ({ confettiLocation, shakeLocation } = obj);
      let tmp = null == confettiLocation;
      if (!tmp) {
        let confettiEnabled = outer1_6.confettiEnabled;
        if (confettiEnabled) {
          confettiEnabled = outer1_6.confettiEnabledLocations[confettiLocation];
        }
        tmp = confettiEnabled;
      }
      let tmp4 = null == shakeLocation;
      if (!tmp4) {
        let screenshakeEnabled = outer1_6.screenshakeEnabled;
        if (screenshakeEnabled) {
          screenshakeEnabled = outer1_6.screenshakeEnabledLocations[shakeLocation];
        }
        tmp4 = screenshakeEnabled;
      }
      let enabled = this.settingsVisible;
      if (enabled) {
        enabled = !outer1_5;
      }
      if (enabled) {
        enabled = outer1_6.enabled;
      }
      if (enabled) {
        enabled = tmp;
      }
      if (enabled) {
        enabled = tmp4;
      }
      return enabled;
    }
  };
  items[4] = {
    key: "shakeIntensity",
    get() {
      let num = 0;
      if (this.isEnabled()) {
        num = outer1_6.shakeIntensity;
      }
      return num;
    }
  };
  items[5] = {
    key: "combosRequiredCount",
    get() {
      let num = 0;
      if (this.isEnabled()) {
        num = outer1_6.combosRequiredCount;
      }
      return num;
    }
  };
  items[6] = {
    key: "screenshakeEnabled",
    get() {
      return outer1_6.screenshakeEnabled;
    }
  };
  items[7] = {
    key: "screenshakeEnabledLocations",
    get() {
      return outer1_6.screenshakeEnabledLocations;
    }
  };
  items[8] = {
    key: "combosEnabled",
    get() {
      return outer1_6.combosEnabled;
    }
  };
  items[9] = {
    key: "comboSoundsEnabled",
    get() {
      return outer1_6.comboSoundsEnabled;
    }
  };
  return callback(PoggermodeSettingsStore, items);
})(require("initialize").DeviceSettingsStore);
tmp3.displayName = "PoggermodeSettingsStore";
tmp3.persistKey = "PoggermodeSettingsStore";
obj = {
  POGGERMODE_SETTINGS_UPDATE: function handlePoggermodeSettingsUpdate(settings) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings.settings);
  },
  POGGERMODE_TEMPORARILY_DISABLED: function handlePoggermodeTemporarilyDisabled() {
    let c5 = true;
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/poggermode/PoggermodeSettingsStore.tsx");

export default tmp3;
export const initialState = obj;
