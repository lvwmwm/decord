// Module ID: 16599
// Function ID: 16600
// Name: AccountConfirmPasswordSetting
// Dependencies: [8424, 1072, 11505, 1114, 7157, 2]

// Module 16599 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7157 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["7qKDrE"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
    getComponent() {
      return UserSettingsConfirmPassword.UserSettingsConfirmPasswordWrapped;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;
