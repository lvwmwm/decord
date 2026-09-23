// Module ID: 15820
// Function ID: 15821
// Name: NotificationsSetting
// Dependencies: [1074, 11805, 1115, 9953, 14816, 15821, 2]

// Module 15820 (NotificationsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import BellIcon from "BellIcon" /* 9953 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14816 */;
import SettingBuilders from "SettingBuilders" /* 11805 */;
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
