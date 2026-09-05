// Module ID: 15224
// Function ID: 15225
// Name: route
// Dependencies: [7975, 1074, 11468, 1114, 15225, 2]

// Module 15224 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11468 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["7j5bMU"]);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.GUILD_ROLE_SUBSCRIPTIONS_CANCEL,
  getComponent() {
    return require(15225) /* GuildRoleSubscriptionCancelSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/GuildRoleSubscriptionsCancelSetting.tsx");

export default route;
