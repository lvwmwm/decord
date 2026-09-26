// Module ID: 15764
// Function ID: 15765
// Name: InAppNotificationsSetting
// Dependencies: [8265, 1074, 2019, 10386, 1115, 2808, 1241, 11754, 14761, 15765, 2]

// Module 15764 (InAppNotificationsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserSettings from "UserSettings" /* 2019 */;
import _modDef2808 from "module_2808" /* 2808 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import FocusModeUtils from "FocusModeUtils" /* 10386 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14761 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15765 */;
import SettingBuilders_mod from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const obj = {
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = UserSettings.FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    let setting1 = !setting;
    if (!setting) {
      setting1 = ShowInAppNotifications.useSetting();
    }
    return setting1;
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    AnalyticsUtilsDefault.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, { notifications_in_app_enabled });
  },
  useIsDisabled: FocusModeUtils.useFocusModeEnabled
};
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(util.t.rqEZdu);
};
obj2.useDescription = function useInAppNotificationsDescription() {
  let stringResult;
  if (obj.useFocusModeEnabled()) {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.cIRG0s);
  }
  return stringResult;
};
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  return !notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("InAppNotificationsSetting");
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef2808.sH5mu9);
};
obj3.useDescription = function useRedesignInAppNotificationsDescription() {
  const focusModeEnabled = FocusModeUtils.useFocusModeEnabled();
  const intl = util.intl;
  const string = intl.string;
  if (focusModeEnabled) {
    let stringResult = string(util.t.cIRG0s);
  } else {
    stringResult = string(_modDef2808["T/zMdV"]);
  }
  return stringResult;
};
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  return notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("RedesignInAppNotificationsSetting");
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
export const RedesignInAppNotificationsSetting = toggle1;
