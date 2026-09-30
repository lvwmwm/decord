// Module ID: 14477
// Function ID: 14478
// Name: AccountDisplayNameSetting
// Dependencies: [1372, 7612, 1074, 504, 11211, 1115, 14345, 2]

// Module 14477 (AccountDisplayNameSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SettingBuilders = fn(11211);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9AjdkD"]);
  },
  parent: fn(7612).MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    const items = [UserStore];
    return initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let globalName;
      if (currentUser != null) {
        globalName = currentUser.globalName;
      }
      return globalName;
    });
  },
  screen: {
    route: fn(1074).UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require("ProfileCustomizationSettingScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default route;
