// Module ID: 15918
// Function ID: 15919
// Name: AccountChangePasswordSetting
// Dependencies: [8308, 1087, 11155, 1128, 15919, 2]

// Module 15918 (AccountChangePasswordSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["CIGa+7"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  screen: {
    route: UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
    getComponent() {
      return require("AccountEditPassword").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;
