// Module ID: 10217
// Function ID: 78947
// Name: useFocusModeEnabled
// Dependencies: []
// Exports: getFocusModeEnabled, setFocusMode, useFocusModeEnabled

// Module 10217 (useFocusModeEnabled)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).NotificationSettingsUpdateType;
({ AnalyticEvents: closure_5, StatusTypes: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/notifications/FocusModeUtils.tsx");

export const useFocusModeEnabled = function useFocusModeEnabled() {
  const FocusMode = arg1(dependencyMap[3]).FocusMode;
  let setting = FocusMode.useSetting();
  const FocusModeExpiresAtSetting = arg1(dependencyMap[3]).FocusModeExpiresAtSetting;
  const setting1 = FocusModeExpiresAtSetting.useSetting();
  if (setting) {
    let tmp3 = "0" === setting1;
    if (!tmp3) {
      const _Date = Date;
      const _Number = Number;
      const date = new Date(Number(setting1));
      const _Date2 = Date;
      const time = date.getTime();
      const date1 = new Date();
      tmp3 = time - date1.getTime() > 0;
    }
    setting = tmp3;
  }
  return setting;
};
export const getFocusModeEnabled = function getFocusModeEnabled() {
  const FocusMode = arg1(dependencyMap[3]).FocusMode;
  let setting = FocusMode.getSetting();
  const FocusModeExpiresAtSetting = arg1(dependencyMap[3]).FocusModeExpiresAtSetting;
  const setting1 = FocusModeExpiresAtSetting.getSetting();
  if (setting) {
    setting = null != setting1;
  }
  if (setting) {
    const _Date = Date;
    const _Number = Number;
    const date = new Date(Number(setting1));
    const _Date2 = Date;
    const time = date.getTime();
    const date1 = new Date();
    setting = time - date1.getTime() > 0;
  }
  return setting;
};
export const setFocusMode = function setFocusMode(quiet_mode_enabled, arg1) {
  arg1 = quiet_mode_enabled;
  const importDefault = arg1;
  const FocusMode = arg1(dependencyMap[3]).FocusMode;
  const setting = FocusMode.getSetting();
  const PreloadedUserSettingsActionCreators = arg1(dependencyMap[4]).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("notifications", (arg0) => {
    const BoolValue = arg0(closure_2[5]).BoolValue;
    arg0.quietMode = BoolValue.create({ value: arg0 });
    let str = "0";
    if (arg0) {
      str = "0";
      if (null != arg1) {
        const _Date = Date;
        const _HermesInternal = HermesInternal;
        str = "" + Date.now() + arg1;
      }
    }
    arg0.focusModeExpiresAtMs = str;
  }, arg1(dependencyMap[4]).UserSettingsDelay.INFREQUENT_USER_ACTION);
  let obj = importDefault(dependencyMap[6]);
  obj = { update_type: constants.ACCOUNT, quiet_mode_enabled, quiet_mode_enabled_old: setting };
  obj.track(constants2.NOTIFICATION_SETTINGS_UPDATED, obj);
  let tmp4 = status.getStatus() === constants3.DND && quiet_mode_enabled;
  if (tmp4) {
    tmp4 = null == arg1;
  }
  if (tmp4) {
    obj = {};
    const intl = arg1(dependencyMap[8]).intl;
    obj.title = intl.string(arg1(dependencyMap[8]).t.B+cbLS);
    const intl2 = arg1(dependencyMap[8]).intl;
    obj.body = intl2.string(arg1(dependencyMap[8]).t.CYVgLI);
    const intl3 = arg1(dependencyMap[8]).intl;
    obj.cancelText = intl3.string(arg1(dependencyMap[8]).t.f3Pet9);
    const intl4 = arg1(dependencyMap[8]).intl;
    obj.confirmText = intl4.string(arg1(dependencyMap[8]).t.BddRzS);
    obj.onConfirm = function onConfirm() {
      arg1(closure_2[9])({ nextStatus: constants.ONLINE });
    };
    importDefault(dependencyMap[7]).show(obj);
    const obj3 = importDefault(dependencyMap[7]);
  }
};
