// Module ID: 17115
// Function ID: 17116
// Name: EmailNotificationsSetting
// Dependencies: [9556, 1071, 1112, 17116, 11970, 15860, 3207, 17109, 2]

// Module 17115 (EmailNotificationsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef3207 from "module_3207" /* 3207 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15860 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17109 */;
import SettingBuilders_mod from "SettingBuilders" /* 11970 */;
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
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3207.k3h440);
  },
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
