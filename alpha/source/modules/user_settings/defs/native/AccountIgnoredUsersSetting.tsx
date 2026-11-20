// Module ID: 15983
// Function ID: 15984
// Name: AccountIgnoredUsersSetting
// Dependencies: [4736, 8592, 1071, 504, 1112, 11817, 7115, 15984, 2]

// Module 15983 (AccountIgnoredUsersSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import EyeSlashIcon from "EyeSlashIcon" /* 7115 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import RelationshipStore from "RelationshipStore" /* 4736 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  IconComponent: EyeSlashIcon.EyeSlashIcon,
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["93ZDWE"]);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    let ignoredIDs;
    const items = [RelationshipStore];
    const obj = get_initialized;
    const stateFromStoresArray = obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = intl2.intl;
    const obj2 = { numberOfIgnoredUsers: stateFromStoresArray.length };
    return intl.format(intl2.t.rXUeOl, obj2);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: UserSettingsSections.IGNORED_USERS,
    getComponent() {
      return require("IgnoredUsersList").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default route;
