// Module ID: 17050
// Function ID: 17051
// Name: InAppNotificationsSetting
// Dependencies: [9513, 1071, 4837, 10572, 1112, 3206, 1255, 11914, 15802, 17051, 2]

// Module 17050 (InAppNotificationsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import _modDef3206 from "module_3206" /* 3206 */;
import UserSettings from "UserSettings" /* 4837 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import FocusModeUtils from "FocusModeUtils" /* 10572 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15802 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17051 */;
import SettingBuilders_mod from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
let obj = {
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = UserSettings.FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    const tmp2 = !setting && ShowInAppNotifications.useSetting();
    return tmp2;
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = UserSettings.ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    const obj = AnalyticsUtilsDefault;
    const obj2 = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj2);
  },
  useIsDisabled: FocusModeUtils.useFocusModeEnabled
};
let SettingBuilders = SettingBuilders_mod;
let obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.rqEZdu);
  },
  useDescription: function useInAppNotificationsDescription() {
    let stringResult;
    const obj = FocusModeUtils;
    if (obj.useFocusModeEnabled()) {
      const intl = tmp(1112).intl;
      stringResult = intl.string(tmp(1112).t.cIRG0s);
    }
    return stringResult;
  },
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
    return intl.string(_modDef3206.sH5mu9);
  },
  useDescription: function useRedesignInAppNotificationsDescription() {
    let stringResult;
    const obj = FocusModeUtils;
    const focusModeEnabled = obj.useFocusModeEnabled();
    const intl = intl2.intl;
    const string = intl.string;
    const tmp2 = _modDef3206;
    if (focusModeEnabled) {
      stringResult = string(tmp2.Zt0MV8);
    } else {
      stringResult = string(tmp2["0r15Ud"]);
    }
    return stringResult;
  },
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
