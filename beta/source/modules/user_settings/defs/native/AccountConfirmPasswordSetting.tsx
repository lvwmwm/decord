// Module ID: 14313
// Function ID: 14314
// Name: AccountConfirmPasswordSetting
// Dependencies: [7417, 1074, 11006, 1115, 6414, 2]

// Module 14313 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 6414 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
