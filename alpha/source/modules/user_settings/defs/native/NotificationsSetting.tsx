// Module ID: 15580
// Function ID: 15581
// Name: NotificationsSetting
// Dependencies: [1085, 11262, 1126, 8747, 14533, 15581, 2]

// Module 15580 (NotificationsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import BellIcon from "BellIcon" /* 8747 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14533 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
