// Module ID: 17408
// Function ID: 17409
// Name: InAppNotificationsSetting
// Dependencies: [8424, 1072, 4834, 10999, 1114, 2867, 1253, 11505, 16236, 17409, 2]

// Module 17408 (InAppNotificationsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import _modDef2867 from "module_2867" /* 2867 */;
import UserSettings from "UserSettings" /* 4834 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import FocusModeUtils from "FocusModeUtils" /* 10999 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16236 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17409 */;
import SettingBuilders_mod from "SettingBuilders" /* 11505 */;
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
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.cIRG0s);
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
    return intl.string(_modDef2867.sH5mu9);
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
      stringResult = string(_modDef2867["T/zMdV"]);
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
