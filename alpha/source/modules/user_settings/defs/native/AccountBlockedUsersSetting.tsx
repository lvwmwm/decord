// Module ID: 16310
// Function ID: 16311
// Name: AccountBlockedUsersSetting
// Dependencies: [4985, 9556, 1071, 504, 1112, 11970, 9077, 16311, 2]

// Module 16310 (AccountBlockedUsersSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import DenyIcon from "DenyIcon" /* 9077 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.PFOUKW);
  },
  useDescription: function useAccountBlockedUsersSettingDescription() {
    let blockedIDs;
    const items = [RelationshipStore];
    const obj = get_initialized;
    const numberOfBlockedUsers = obj.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
    const intl = intl2.intl;
    return intl.format(intl2.t["r91W/h"], { numberOfBlockedUsers });
  },
  IconComponent: DenyIcon.DenyIcon,
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: UserSettingsSections.BLOCKED_USERS_V2,
    getComponent() {
      return require("BlockedUsersListV2").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default route;
export const AccountBlockedUsersSettingV2 = route;
