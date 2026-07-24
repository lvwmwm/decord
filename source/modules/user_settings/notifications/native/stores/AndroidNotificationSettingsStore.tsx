// Module ID: 14362
// Function ID: 109921
// Name: _initializeAndroidNotificationSettingsStore
// Dependencies: [5, 677, 477, 10667, 682, 3743, 2]
// Exports: initializeAndroidNotificationSettingsStore, setAndroidMessageNotificationsEnabled, setAndroidNotificationLightsEnabled, setAndroidNotificationSoundsEnabled, setAndroidNotificationVibrationsEnabled, useAndroidMessageNotificationsEnabled, useAndroidNotificationLightsEnabled, useAndroidNotificationSoundsEnabled, useAndroidNotificationVibrationsEnabled

// Module 14362 (_initializeAndroidNotificationSettingsStore)
import isIterable from "isIterable";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

const require = arg1;
function _initializeAndroidNotificationSettingsStore() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let closure_4 = useStoreWithEqualityFn.createWithEqualityFn(() => ({ isLightsEnabled: undefined, isVibrationsEnabled: undefined, isSoundsEnabled: undefined, isNotifyEveryTime: undefined }));
let result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/stores/AndroidNotificationSettingsStore.tsx");

export const initializeAndroidNotificationSettingsStore = function initializeAndroidNotificationSettingsStore() {
  return _initializeAndroidNotificationSettingsStore(...arguments);
};
export const useAndroidNotificationLightsEnabled = function useAndroidNotificationLightsEnabled() {
  return callback2((isLightsEnabled) => isLightsEnabled.isLightsEnabled, require(3743) /* isIterable */.shallow);
};
export const setAndroidNotificationLightsEnabled = function setAndroidNotificationLightsEnabled(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_4.setState({ isLightsEnabled: closure_0 }));
  const obj = _require(682);
  importDefault(10667).setLightsEnabled(arg0);
};
export const useAndroidNotificationVibrationsEnabled = function useAndroidNotificationVibrationsEnabled() {
  return callback2((isVibrationsEnabled) => isVibrationsEnabled.isVibrationsEnabled, require(3743) /* isIterable */.shallow);
};
export const setAndroidNotificationVibrationsEnabled = function setAndroidNotificationVibrationsEnabled(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_4.setState({ isVibrationsEnabled: closure_0 }));
  const obj = _require(682);
  importDefault(10667).setVibrationsEnabled(arg0);
};
export const useAndroidNotificationSoundsEnabled = function useAndroidNotificationSoundsEnabled() {
  return callback2((isSoundsEnabled) => isSoundsEnabled.isSoundsEnabled, require(3743) /* isIterable */.shallow);
};
export const setAndroidNotificationSoundsEnabled = function setAndroidNotificationSoundsEnabled(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_4.setState({ isSoundsEnabled: closure_0 }));
  const obj = _require(682);
  importDefault(10667).setSoundsEnabled(arg0);
};
export const useAndroidMessageNotificationsEnabled = function useAndroidMessageNotificationsEnabled() {
  return callback2((isNotifyEveryTime) => isNotifyEveryTime.isNotifyEveryTime, require(3743) /* isIterable */.shallow);
};
export const setAndroidMessageNotificationsEnabled = function setAndroidMessageNotificationsEnabled(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_4.setState({ isNotifyEveryTime: closure_0 }));
  const obj = _require(682);
  const result = importDefault(10667).setAndroidNotifyEveryTime(arg0);
};
