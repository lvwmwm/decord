// Module ID: 14187
// Function ID: 107367
// Name: _initializeAndroidNotificationSettingsStore
// Dependencies: []
// Exports: initializeAndroidNotificationSettingsStore, setAndroidMessageNotificationsEnabled, setAndroidNotificationLightsEnabled, setAndroidNotificationSoundsEnabled, setAndroidNotificationVibrationsEnabled, useAndroidMessageNotificationsEnabled, useAndroidNotificationLightsEnabled, useAndroidNotificationSoundsEnabled, useAndroidNotificationVibrationsEnabled

// Module 14187 (_initializeAndroidNotificationSettingsStore)
function _initializeAndroidNotificationSettingsStore() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _initializeAndroidNotificationSettingsStore = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).createWithEqualityFn(() => ({ isLightsEnabled: undefined, isVibrationsEnabled: undefined, isSoundsEnabled: undefined, isNotifyEveryTime: undefined }));
const obj = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/notifications/native/stores/AndroidNotificationSettingsStore.tsx");

export const initializeAndroidNotificationSettingsStore = function initializeAndroidNotificationSettingsStore() {
  return _initializeAndroidNotificationSettingsStore(...arguments);
};
export const useAndroidNotificationLightsEnabled = function useAndroidNotificationLightsEnabled() {
  return callback2((isLightsEnabled) => isLightsEnabled.isLightsEnabled, arg1(dependencyMap[5]).shallow);
};
export const setAndroidNotificationLightsEnabled = function setAndroidNotificationLightsEnabled(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[4]).batchUpdates(() => state.setState({ isLightsEnabled: arg0 }));
  const obj = arg1(dependencyMap[4]);
  importDefault(dependencyMap[3]).setLightsEnabled(arg0);
};
export const useAndroidNotificationVibrationsEnabled = function useAndroidNotificationVibrationsEnabled() {
  return callback2((isVibrationsEnabled) => isVibrationsEnabled.isVibrationsEnabled, arg1(dependencyMap[5]).shallow);
};
export const setAndroidNotificationVibrationsEnabled = function setAndroidNotificationVibrationsEnabled(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[4]).batchUpdates(() => state.setState({ isVibrationsEnabled: arg0 }));
  const obj = arg1(dependencyMap[4]);
  importDefault(dependencyMap[3]).setVibrationsEnabled(arg0);
};
export const useAndroidNotificationSoundsEnabled = function useAndroidNotificationSoundsEnabled() {
  return callback2((isSoundsEnabled) => isSoundsEnabled.isSoundsEnabled, arg1(dependencyMap[5]).shallow);
};
export const setAndroidNotificationSoundsEnabled = function setAndroidNotificationSoundsEnabled(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[4]).batchUpdates(() => state.setState({ isSoundsEnabled: arg0 }));
  const obj = arg1(dependencyMap[4]);
  importDefault(dependencyMap[3]).setSoundsEnabled(arg0);
};
export const useAndroidMessageNotificationsEnabled = function useAndroidMessageNotificationsEnabled() {
  return callback2((isNotifyEveryTime) => isNotifyEveryTime.isNotifyEveryTime, arg1(dependencyMap[5]).shallow);
};
export const setAndroidMessageNotificationsEnabled = function setAndroidMessageNotificationsEnabled(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[4]).batchUpdates(() => state.setState({ isNotifyEveryTime: arg0 }));
  const obj = arg1(dependencyMap[4]);
  const result = importDefault(dependencyMap[3]).setAndroidNotifyEveryTime(arg0);
};
