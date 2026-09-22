// Module ID: 15084
// Function ID: 15085
// Name: AccountBlockedUsersSetting
// Dependencies: [4406, 8237, 1074, 504, 1115, 11729, 8191, 15085, 2]

// Module 15084 (AccountBlockedUsersSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import RelationshipStore from "RelationshipStore" /* 4406 */;

require = fn;
const SettingBuilders = fn(11729);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.PFOUKW);
  },
  useDescription: function useAccountBlockedUsersSettingDescription() {
    const items = [RelationshipStore];
    const numberOfBlockedUsers = initialize.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
    const intl = util.intl;
    return intl.format(util.t["r91W/h"], { numberOfBlockedUsers });
  },
  IconComponent: fn(8191).DenyIcon,
  parent: fn(8237).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1074).UserSettingsSections.BLOCKED_USERS_V2,
    getComponent() {
      return require("BlockedUsersListV2").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default route;
export const AccountBlockedUsersSettingV2 = route;
