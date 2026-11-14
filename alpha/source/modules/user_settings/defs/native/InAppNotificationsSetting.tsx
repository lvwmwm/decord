// Module ID: 18110
// Function ID: 18111
// Name: InAppNotificationsSetting
// Dependencies: [9202, 1072, 5131, 11021, 1113, 3029, 1256, 12406, 16902, 18111, 2]

// Module 18110 (InAppNotificationsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import _modDef3029 from "module_3029" /* 3029 */;
import UserSettings from "UserSettings" /* 5131 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import FocusModeUtils from "FocusModeUtils" /* 11021 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16902 */;
import MobileNotifSettings from "MobileNotifSettings" /* 18111 */;
import SettingBuilders_mod from "SettingBuilders" /* 12406 */;
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
      const intl = tmp(1113).intl;
      stringResult = intl.string(tmp(1113).t.cIRG0s);
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
    return intl.string(_modDef3029.sH5mu9);
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
      stringResult = string(_modDef3029["T/zMdV"]);
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
