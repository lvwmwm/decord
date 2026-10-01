// Module ID: 14270
// Function ID: 14271
// Name: AccountDisplayNameSetting
// Dependencies: [1372, 7417, 1074, 504, 11006, 1115, 14144, 2]

// Module 14270 (AccountDisplayNameSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import UserStore from "UserStore" /* 1372 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
