// Module ID: 16480
// Function ID: 16481
// Name: InAppNotificationsSetting
// Dependencies: [8214, 1087, 558, 2044, 576, 13448, 1128, 2899, 1267, 11003, 15404, 16481, 2]

// Module 16480 (InAppNotificationsSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import UserSettings from "UserSettings" /* 2044 */;
import _modDef2899 from "module_2899" /* 2899 */;
import SettingsConstants from "SettingsConstants" /* 8214 */;
import FocusModeUtils from "FocusModeUtils" /* 13448 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15404 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16481 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 11003 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInAppNotificationsSettingValue() {
  const FocusMode = UserSettings.FocusMode;
  const setting = FocusMode.useSetting();
  const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
  const tmp2 = !setting && ShowInAppNotifications.useSetting();
  return tmp2;
}) : (function useInAppNotificationsSettingValue() {
  const FocusMode = UserSettings.FocusMode;
  const setting = FocusMode.useSetting();
  const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
  const tmp2 = !setting && ShowInAppNotifications.useSetting();
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useInAppNotificationsDescription() {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = FocusModeUtils;
  const focusModeEnabled = obj2.useFocusModeEnabled();
  if (cResult[0] !== focusModeEnabled) {
    let stringResult;
    if (focusModeEnabled) {
      const intl = tmp(1128).intl;
      stringResult = intl.string(tmp(1128).t.cIRG0s);
    }
    cResult[0] = focusModeEnabled;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useInAppNotificationsDescription() {
  let stringResult;
  const obj = FocusModeUtils;
  if (obj.useFocusModeEnabled()) {
    const intl = tmp(1128).intl;
    stringResult = intl.string(tmp(1128).t.cIRG0s);
  }
  return stringResult;
});
ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  useValue: tmp2,
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj2);
  },
  useIsDisabled: FocusModeUtils.useFocusModeEnabled
};
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRedesignInAppNotificationsDescription() {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = FocusModeUtils;
  const focusModeEnabled = obj2.useFocusModeEnabled();
  if (cResult[0] !== focusModeEnabled) {
    let stringResult;
    const intl = tmp(1128).intl;
    const string = intl.string;
    if (focusModeEnabled) {
      stringResult = string(tmp(1128).t.cIRG0s);
    } else {
      stringResult = string(_modDef2899["T/zMdV"]);
    }
    cResult[0] = focusModeEnabled;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useRedesignInAppNotificationsDescription() {
  let stringResult;
  const obj = FocusModeUtils;
  const focusModeEnabled = obj.useFocusModeEnabled();
  const intl = intl2.intl;
  const string = intl.string;
  if (focusModeEnabled) {
    stringResult = string(intl2.t.cIRG0s);
  } else {
    stringResult = string(_modDef2899["T/zMdV"]);
  }
  return stringResult;
});
let SettingBuilders = SettingBuilders_mod;
let obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.rqEZdu);
  },
  useDescription: tmp3,
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return !obj.useIsDeclarativeSettingsUIAvailable("InAppNotificationsSetting");
  }
};
const createToggle = SettingBuilders.createToggle;
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const createToggle2 = SettingBuilders.createToggle;
const obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2899.sH5mu9);
  },
  useDescription: tmp4,
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useIsDeclarativeSettingsUIAvailable("RedesignInAppNotificationsSetting");
  }
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
export const RedesignInAppNotificationsSetting = toggle2;
