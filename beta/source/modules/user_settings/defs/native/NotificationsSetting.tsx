// Module ID: 15743
// Function ID: 15744
// Name: NotificationsSetting
// Dependencies: [1078, 11594, 1119, 9852, 14733, 15744, 2]

// Module 15743 (NotificationsSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import BellIcon from "BellIcon" /* 9852 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14733 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
