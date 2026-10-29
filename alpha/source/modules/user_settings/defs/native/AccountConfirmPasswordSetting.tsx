// Module ID: 16548
// Function ID: 16549
// Name: AccountConfirmPasswordSetting
// Dependencies: [8387, 1084, 11302, 1125, 7149, 2]

// Module 16548 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7149 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
