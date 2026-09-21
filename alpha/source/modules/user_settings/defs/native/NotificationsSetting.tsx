// Module ID: 15754
// Function ID: 15755
// Name: NotificationsSetting
// Dependencies: [1074, 11725, 1115, 9874, 14730, 15755, 2]

// Module 15754 (NotificationsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import BellIcon from "BellIcon" /* 9874 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14730 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.HcoRu0);
  },
  parent: null,
  IconComponent: BellIcon.BellIcon,
  usePredicate() {
    return !notifications_NotificationSettingsUtils.useIsDeclarativeSettingsUIAvailable("LegacyNotificationsSetting");
  },
  screen: {
    route: Constants.UserSettingsSections.NOTIFICATIONS,
    getComponent() {
      return require("SettingsNotificationScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NotificationsSetting.tsx");

export default route;
