// Module ID: 17447
// Function ID: 17448
// Name: GuildRoleSubscriptionsCancelSetting
// Dependencies: [8573, 1072, 11728, 1113, 17448, 2]

// Module 17447 (GuildRoleSubscriptionsCancelSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11728 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["7j5bMU"]);
  },
  parent: MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
    getComponent() {
      return require("GuildRoleSubscriptionCancelSettingScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx");

export default route;
