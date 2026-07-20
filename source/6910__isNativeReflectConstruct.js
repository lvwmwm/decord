// Module ID: 6910
// Function ID: 55064
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6910 (_isNativeReflectConstruct)
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
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
({ ShakeLocation, ConfettiLocation } = arg1(dependencyMap[5]));
let closure_5 = false;
let obj = { screenshakeEnabledLocations: { [ShakeLocation.CHAT_INPUT]: true, [ShakeLocation.VOICE_USER]: false, [ShakeLocation.MENTION]: false }, confettiEnabledLocations: { [ConfettiLocation.CHAT_INPUT]: true, [ConfettiLocation.REACTION]: true, [ConfettiLocation.MEMBER_USER]: true, [ConfettiLocation.CALL_TILE]: true } };
const tmp2 = arg1(dependencyMap[5]);
let closure_6 = arg1(dependencyMap[6]).cloneDeep(obj);
let tmp3 = (DeviceSettingsStore) => {
  class PoggermodeSettingsStore {
    constructor() {
      self = this;
      tmp = PoggermodeSettingsStore(this, PoggermodeSettingsStore);
      obj = closure_3(PoggermodeSettingsStore);
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
  let closure_0 = PoggermodeSettingsStore;
  callback2(PoggermodeSettingsStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(arg0);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "settingsVisible",
    get() {
      return closure_6.settingsVisible;
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
        let confettiEnabled = closure_6.confettiEnabled;
        if (confettiEnabled) {
          confettiEnabled = closure_6.confettiEnabledLocations[confettiLocation];
        }
        tmp = confettiEnabled;
      }
      let tmp4 = null == shakeLocation;
      if (!tmp4) {
        let screenshakeEnabled = closure_6.screenshakeEnabled;
        if (screenshakeEnabled) {
          screenshakeEnabled = closure_6.screenshakeEnabledLocations[shakeLocation];
        }
        tmp4 = screenshakeEnabled;
      }
      let enabled = this.settingsVisible;
      if (enabled) {
        enabled = !closure_5;
      }
      if (enabled) {
        enabled = closure_6.enabled;
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
        num = closure_6.shakeIntensity;
      }
      return num;
    }
  };
  items[5] = {
    key: "combosRequiredCount",
    get() {
      let num = 0;
      if (this.isEnabled()) {
        num = closure_6.combosRequiredCount;
      }
      return num;
    }
  };
  items[6] = {
    key: "screenshakeEnabled",
    get() {
      return closure_6.screenshakeEnabled;
    }
  };
  items[7] = {
    key: "screenshakeEnabledLocations",
    get() {
      return closure_6.screenshakeEnabledLocations;
    }
  };
  items[8] = {
    key: "combosEnabled",
    get() {
      return closure_6.combosEnabled;
    }
  };
  items[9] = {
    key: "comboSoundsEnabled",
    get() {
      return closure_6.comboSoundsEnabled;
    }
  };
  return callback(PoggermodeSettingsStore, items);
}(importDefault(dependencyMap[7]).DeviceSettingsStore);
tmp3.displayName = "PoggermodeSettingsStore";
tmp3.persistKey = "PoggermodeSettingsStore";
obj = {
  POGGERMODE_SETTINGS_UPDATE: function handlePoggermodeSettingsUpdate(settings) {
    const merged = Object.assign(closure_6);
    const merged1 = Object.assign(settings.settings);
    closure_6 = {};
  },
  POGGERMODE_TEMPORARILY_DISABLED: function handlePoggermodeTemporarilyDisabled() {
    let closure_5 = true;
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[8]), obj);
const obj2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/poggermode/PoggermodeSettingsStore.tsx");

export default tmp3;
export const initialState = obj;
