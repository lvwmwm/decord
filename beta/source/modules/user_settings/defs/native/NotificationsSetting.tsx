// Module ID: 15030
// Function ID: 15031
// Name: NotificationsSetting
// Dependencies: [1074, 11006, 1115, 9067, 14011, 15031, 2]

// Module 15030 (NotificationsSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import BellIcon from "BellIcon" /* 9067 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14011 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
