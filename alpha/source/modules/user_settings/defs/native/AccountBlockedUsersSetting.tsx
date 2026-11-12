// Module ID: 17203
// Function ID: 17204
// Name: AccountBlockedUsersSetting
// Dependencies: [5185, 9135, 1072, 504, 1113, 12311, 9090, 17204, 2]

// Module 17203 (AccountBlockedUsersSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import DenyIcon from "DenyIcon" /* 9090 */;
import SettingsConstants from "SettingsConstants" /* 9135 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import SettingBuilders from "SettingBuilders" /* 12311 */;
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
