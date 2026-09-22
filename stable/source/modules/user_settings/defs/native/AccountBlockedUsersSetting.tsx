// Module ID: 14889
// Function ID: 14890
// Name: AccountBlockedUsersSetting
// Dependencies: [4285, 8079, 1074, 504, 1114, 11605, 8033, 14890, 2]

// Module 14889 (AccountBlockedUsersSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import RelationshipStore from "RelationshipStore" /* 4285 */;

require = fn;
const SettingBuilders = fn(11605);
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
  IconComponent: fn(8033).DenyIcon,
  parent: fn(8079).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
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
