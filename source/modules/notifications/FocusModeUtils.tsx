// Module ID: 10230
// Function ID: 79032
// Name: useFocusModeEnabled
// Dependencies: [4810, 3770, 653, 3803, 1331, 1313, 675, 4470, 1212, 10231, 2]
// Exports: getFocusModeEnabled, setFocusMode, useFocusModeEnabled

// Module 10230 (useFocusModeEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
({ AnalyticEvents: closure_5, StatusTypes: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/notifications/FocusModeUtils.tsx");

export const useFocusModeEnabled = function useFocusModeEnabled() {
  const FocusMode = require(3803) /* explicitContentFromProto */.FocusMode;
  let setting = FocusMode.useSetting();
  const FocusModeExpiresAtSetting = require(3803) /* explicitContentFromProto */.FocusModeExpiresAtSetting;
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
  const FocusMode = require(3803) /* explicitContentFromProto */.FocusMode;
  let setting = FocusMode.getSetting();
  const FocusModeExpiresAtSetting = require(3803) /* explicitContentFromProto */.FocusModeExpiresAtSetting;
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
  const _require = quiet_mode_enabled;
  const importDefault = arg1;
  const FocusMode = _require(3803).FocusMode;
  const setting = FocusMode.getSetting();
  const PreloadedUserSettingsActionCreators = _require(1331).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("notifications", (arg0) => {
    const BoolValue = quiet_mode_enabled(outer1_2[5]).BoolValue;
    arg0.quietMode = BoolValue.create({ value: quiet_mode_enabled });
    let str = "0";
    if (quiet_mode_enabled) {
      str = "0";
      if (null != closure_1) {
        const _Date = Date;
        const _HermesInternal = HermesInternal;
        str = "" + Date.now() + closure_1;
      }
    }
    arg0.focusModeExpiresAtMs = str;
  }, _require(1331).UserSettingsDelay.INFREQUENT_USER_ACTION);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, quiet_mode_enabled, quiet_mode_enabled_old: setting };
  obj.track(constants2.NOTIFICATION_SETTINGS_UPDATED, obj);
  let tmp4 = status.getStatus() === constants3.DND && quiet_mode_enabled;
  if (tmp4) {
    tmp4 = null == arg1;
  }
  if (tmp4) {
    obj = {};
    const intl = _require(1212).intl;
    obj.title = intl.string(_require(1212).t["B+cbLS"]);
    const intl2 = _require(1212).intl;
    obj.body = intl2.string(_require(1212).t.CYVgLI);
    const intl3 = _require(1212).intl;
    obj.cancelText = intl3.string(_require(1212).t.f3Pet9);
    const intl4 = _require(1212).intl;
    obj.confirmText = intl4.string(_require(1212).t.BddRzS);
    obj.onConfirm = function onConfirm() {
      callback(outer1_2[9])({ nextStatus: outer1_6.ONLINE });
    };
    importDefault(4470).show(obj);
    const obj3 = importDefault(4470);
  }
};
