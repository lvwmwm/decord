// Module ID: 14547
// Function ID: 14548
// Name: AccountIgnoredUsersSetting
// Dependencies: [4509, 7612, 1074, 504, 1115, 11211, 6583, 14548, 2]

// Module 14547 (AccountIgnoredUsersSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import RelationshipStore from "RelationshipStore" /* 4509 */;

require = fn;
const SettingBuilders = fn(11211);
const route = SettingBuilders.createRoute({
  IconComponent: fn(6583).EyeSlashIcon,
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
  parent: fn(7612).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
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
