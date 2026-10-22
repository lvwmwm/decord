// Module ID: 15978
// Function ID: 15979
// Name: AccountChangePasswordSetting
// Dependencies: [8318, 1087, 11181, 1128, 15979, 2]

// Module 15978 (AccountChangePasswordSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
