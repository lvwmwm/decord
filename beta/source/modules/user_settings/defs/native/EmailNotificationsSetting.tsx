// Module ID: 16910
// Function ID: 16911
// Name: EmailNotificationsSetting
// Dependencies: [8712, 1071, 1112, 16911, 11942, 15668, 16904, 2]

// Module 16910 (EmailNotificationsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15668 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16904 */;
import SettingBuilders_mod from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj2;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.TPchzM);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["16PQ3M"]);
  },
  screen: obj2
};
obj2 = {
  route: Constants.UserSettingsSections.EMAILS,
  getComponent() {
    return require("SettingsEmailNotificationsScreen").default;
  }
};
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
const createRoute = SettingBuilders.createRoute;
const obj3 = {
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return !obj.useIsDeclarativeSettingsUIAvailable("EmailNotificationsSetting");
  }
};
const merged = Object.assign(obj);
const route = createRoute(obj3);
SettingBuilders = SettingBuilders_mod;
const createRoute2 = SettingBuilders.createRoute;
const obj4 = {
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return obj.useIsDeclarativeSettingsUIAvailable("RedesignEmailNotificationsSetting");
  }
};
const merged1 = Object.assign(obj);
const route2 = createRoute2(obj4);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/EmailNotificationsSetting.tsx");

export default route;
export const RedesignEmailNotificationsSetting = route2;
