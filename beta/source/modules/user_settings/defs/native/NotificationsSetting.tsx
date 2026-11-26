// Module ID: 16900
// Function ID: 16901
// Name: NotificationsSetting
// Dependencies: [1071, 11942, 1112, 11244, 15672, 16901, 2]

// Module 16900 (NotificationsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import BellIcon from "BellIcon" /* 11244 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15672 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
