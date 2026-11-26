// Module ID: 17101
// Function ID: 17102
// Name: InAppNotificationsSetting
// Dependencies: [9555, 1071, 4868, 10617, 1112, 3207, 1256, 11962, 15853, 17102, 2]

// Module 17101 (InAppNotificationsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import _modDef3207 from "module_3207" /* 3207 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import FocusModeUtils from "FocusModeUtils" /* 10617 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15853 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17102 */;
import SettingBuilders_mod from "SettingBuilders" /* 11962 */;
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
    return intl.string(_modDef3207.sH5mu9);
  },
  useDescription: function useRedesignInAppNotificationsDescription() {
    let stringResult;
    const obj = FocusModeUtils;
    const focusModeEnabled = obj.useFocusModeEnabled();
    const intl = intl2.intl;
    const string = intl.string;
    const tmp2 = _modDef3207;
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
