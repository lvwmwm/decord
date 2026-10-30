// Module ID: 17401
// Function ID: 17402
// Name: NotificationsSetting
// Dependencies: [1072, 11505, 1114, 9189, 16236, 17402, 2]

// Module 17401 (NotificationsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import BellIcon from "BellIcon" /* 9189 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16236 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
