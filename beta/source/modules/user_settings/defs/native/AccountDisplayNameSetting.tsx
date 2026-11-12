// Module ID: 16960
// Function ID: 16961
// Name: AccountDisplayNameSetting
// Dependencies: [1385, 8536, 1072, 504, 11717, 1113, 16785, 2]

// Module 16960 (AccountDisplayNameSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import UserStore from "UserStore" /* 1385 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["9AjdkD"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    const items = [UserStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let globalName;
      if (currentUser != null) {
        globalName = currentUser.globalName;
      }
      return globalName;
    });
  },
  screen: {
    route: UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default route;
