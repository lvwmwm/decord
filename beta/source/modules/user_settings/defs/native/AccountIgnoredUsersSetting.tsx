// Module ID: 15084
// Function ID: 15085
// Name: AccountIgnoredUsersSetting
// Dependencies: [4405, 8233, 1074, 504, 1115, 11725, 7211, 15085, 2]

// Module 15084 (AccountIgnoredUsersSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;

require = fn;
const SettingBuilders = fn(11725);
const route = SettingBuilders.createRoute({
  IconComponent: fn(7211).EyeSlashIcon,
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["93ZDWE"]);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    const items = [RelationshipStore];
    const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = util.intl;
    return intl.format(util.t.rXUeOl, { numberOfIgnoredUsers: stateFromStoresArray.length });
  },
  parent: fn(8233).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1074).UserSettingsSections.IGNORED_USERS,
    getComponent() {
      return require("IgnoredUsersList").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default route;
