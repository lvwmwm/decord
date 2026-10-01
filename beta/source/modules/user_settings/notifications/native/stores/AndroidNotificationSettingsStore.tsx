// Module ID: 15032
// Function ID: 15033
// Name: AndroidNotificationSettingsStore
// Dependencies: [5, 1243, 1364, 8746, 1248, 4452, 2]
// Exports: initializeAndroidNotificationSettingsStore, setAndroidMessageNotificationsEnabled, setAndroidNotificationLightsEnabled, setAndroidNotificationSoundsEnabled, setAndroidNotificationVibrationsEnabled, useAndroidMessageNotificationsEnabled, useAndroidNotificationLightsEnabled, useAndroidNotificationSoundsEnabled, useAndroidNotificationVibrationsEnabled

// Module 15032 (AndroidNotificationSettingsStore)
import _slicedToArray from "_slicedToArray" /* 4452 */;
import PushNotificationDefault from "PushNotification" /* 8746 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_1243 from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4;

let obj = function _initializeAndroidNotificationSettingsStore() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_1;
    let obj12;
    let obj3;
    let obj6;
    let obj9;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c2;
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let isLightsEnabled;
            let isVibrationsEnabled;
            let isSoundsEnabled;
            let isNotifyEveryTime;
            const obj16 = require("PlatformUtils");
            if (obj16.isAndroid()) {
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj5 = { value: obj12.getLightsEnabled(), done: false };
              obj12 = PushNotificationDefault;
              return obj5;
            }
          }
        } else if (1 === c3) {
          c2 = 0;
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            isLightsEnabled = value;
            c3 = 3;
            c4 = 1;
            const obj8 = { value: obj9.getVibrationsEnabled(), done: false };
            obj9 = closure_129_1(closure_129_2[3]);
            return obj8;
          }
        } else if (3 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            isVibrationsEnabled = value;
            c3 = 4;
            c4 = 1;
            const obj11 = { value: obj6.getSoundsEnabled(), done: false };
            obj6 = closure_129_1(closure_129_2[3]);
            return obj11;
          }
        } else if (4 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c4 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            isSoundsEnabled = value;
            c3 = 5;
            c4 = 1;
            const obj14 = { value: obj3.shouldAndroidNotifyEveryTime(), done: false };
            obj3 = closure_129_1(closure_129_2[3]);
            return obj14;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          isNotifyEveryTime = value;
          obj = closure_129_0(closure_129_2[4]);
          obj.batchUpdates(() => {
            obj = { isLightsEnabled, isVibrationsEnabled, isSoundsEnabled, isNotifyEveryTime };
            state.setState(obj);
          });
          c2 = 0;
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp24) {
        if (0 === c2) {
          c4 = 3;
          throw tmp24;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = module_1243.createWithEqualityFn(() => ({ isLightsEnabled: "Array", isVibrationsEnabled: "PX_8", isSoundsEnabled: "y", isNotifyEveryTime: "HermesInternal" }));
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/stores/AndroidNotificationSettingsStore.tsx");

export const initializeAndroidNotificationSettingsStore = function initializeAndroidNotificationSettingsStore() {
  return obj(...arguments);
};
export const useAndroidNotificationLightsEnabled = function useAndroidNotificationLightsEnabled() {
  return closure_4((isLightsEnabled) => isLightsEnabled.isLightsEnabled, _slicedToArray.shallow);
};
export const setAndroidNotificationLightsEnabled = function setAndroidNotificationLightsEnabled(isLightsEnabled) {
  let state;
  _require = isLightsEnabled;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { isLightsEnabled };
    return state.setState(obj);
  });
  const obj2 = PushNotificationDefault;
  obj2.setLightsEnabled(isLightsEnabled);
};
export const useAndroidNotificationVibrationsEnabled = function useAndroidNotificationVibrationsEnabled() {
  return closure_4((isVibrationsEnabled) => isVibrationsEnabled.isVibrationsEnabled, _slicedToArray.shallow);
};
export const setAndroidNotificationVibrationsEnabled = function setAndroidNotificationVibrationsEnabled(isVibrationsEnabled) {
  let state;
  _require = isVibrationsEnabled;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { isVibrationsEnabled };
    return state.setState(obj);
  });
  const obj2 = PushNotificationDefault;
  obj2.setVibrationsEnabled(isVibrationsEnabled);
};
export const useAndroidNotificationSoundsEnabled = function useAndroidNotificationSoundsEnabled() {
  return closure_4((isSoundsEnabled) => isSoundsEnabled.isSoundsEnabled, _slicedToArray.shallow);
};
export const setAndroidNotificationSoundsEnabled = function setAndroidNotificationSoundsEnabled(isSoundsEnabled) {
  let state;
  _require = isSoundsEnabled;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { isSoundsEnabled };
    return state.setState(obj);
  });
  const obj2 = PushNotificationDefault;
  obj2.setSoundsEnabled(isSoundsEnabled);
};
export const useAndroidMessageNotificationsEnabled = function useAndroidMessageNotificationsEnabled() {
  return closure_4((isNotifyEveryTime) => isNotifyEveryTime.isNotifyEveryTime, _slicedToArray.shallow);
};
export const setAndroidMessageNotificationsEnabled = function setAndroidMessageNotificationsEnabled(isNotifyEveryTime) {
  let state;
  _require = isNotifyEveryTime;
  obj = require("react-native");
  obj.batchUpdates(() => {
    obj = { isNotifyEveryTime };
    return state.setState(obj);
  });
  const obj2 = PushNotificationDefault;
  const result = obj2.setAndroidNotifyEveryTime(isNotifyEveryTime);
};
