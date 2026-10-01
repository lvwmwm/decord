// Module ID: 14334
// Function ID: 14335
// Name: AccountBlockedUsersSetting
// Dependencies: [4479, 7417, 1074, 504, 1115, 11006, 7371, 14335, 2]

// Module 14334 (AccountBlockedUsersSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import DenyIcon from "DenyIcon" /* 7371 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
