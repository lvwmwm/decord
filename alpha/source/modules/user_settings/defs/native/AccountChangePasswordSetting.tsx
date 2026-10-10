// Module ID: 15004
// Function ID: 15005
// Name: AccountChangePasswordSetting
// Dependencies: [7992, 1085, 10663, 1126, 15005, 2]

// Module 15004 (AccountChangePasswordSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
