// Module ID: 16263
// Function ID: 16264
// Name: AccountConfirmPasswordSetting
// Dependencies: [9556, 1071, 11970, 1112, 7349, 2]

// Module 16263 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7349 */;
import SettingsConstants from "SettingsConstants" /* 9556 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
