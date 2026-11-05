// Module ID: 16979
// Function ID: 16980
// Name: AccountIgnoredUsersSetting
// Dependencies: [5085, 8578, 1072, 504, 1113, 11737, 7240, 16980, 2]

// Module 16979 (AccountIgnoredUsersSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import EyeSlashIcon from "EyeSlashIcon" /* 7240 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import RelationshipStore from "RelationshipStore" /* 5085 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
