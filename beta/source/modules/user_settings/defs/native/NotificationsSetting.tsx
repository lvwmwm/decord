// Module ID: 15018
// Function ID: 15019
// Name: NotificationsSetting
// Dependencies: [1086, 10874, 1127, 9044, 14013, 15019, 2]

// Module 15018 (NotificationsSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import BellIcon from "BellIcon" /* 9044 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14013 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.HcoRu0);
  },
  parent: null,
  IconComponent: BellIcon.BellIcon,
  usePredicate() {
    const obj = notifications_NotificationSettingsUtils;
    return !obj.useIsDeclarativeSettingsUIAvailable("LegacyNotificationsSetting");
  },
  screen: {
    route: UserSettingsSections.NOTIFICATIONS,
    getComponent() {
      return require("SettingsNotificationScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
