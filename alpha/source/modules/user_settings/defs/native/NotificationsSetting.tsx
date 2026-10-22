// Module ID: 16756
// Function ID: 16757
// Name: NotificationsSetting
// Dependencies: [1087, 11181, 1128, 9116, 15652, 16757, 2]

// Module 16756 (NotificationsSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import BellIcon from "BellIcon" /* 9116 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15652 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
