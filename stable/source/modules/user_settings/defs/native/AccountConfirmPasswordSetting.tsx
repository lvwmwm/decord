// Module ID: 14301
// Function ID: 14302
// Name: AccountConfirmPasswordSetting
// Dependencies: [7421, 1086, 10874, 1127, 6414, 2]

// Module 14301 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 6414 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
