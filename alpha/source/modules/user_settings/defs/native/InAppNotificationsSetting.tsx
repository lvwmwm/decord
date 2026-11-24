// Module ID: 16929
// Function ID: 16930
// Name: InAppNotificationsSetting
// Dependencies: [9414, 1071, 4742, 10473, 1112, 3154, 1255, 11815, 15681, 16930, 2]

// Module 16929 (InAppNotificationsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import _modDef3154 from "module_3154" /* 3154 */;
import UserSettings from "UserSettings" /* 4742 */;
import SettingsConstants from "SettingsConstants" /* 9414 */;
import FocusModeUtils from "FocusModeUtils" /* 10473 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15681 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16930 */;
import SettingBuilders_mod from "SettingBuilders" /* 11815 */;
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
    return intl.string(_modDef3154.sH5mu9);
  },
  useDescription: function useRedesignInAppNotificationsDescription() {
    let stringResult;
    const obj = FocusModeUtils;
    const focusModeEnabled = obj.useFocusModeEnabled();
    const intl = intl2.intl;
    const string = intl.string;
    if (focusModeEnabled) {
      stringResult = string(intl2.t.cIRG0s);
    } else {
      stringResult = string(_modDef3154["T/zMdV"]);
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
