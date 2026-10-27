// Module ID: 16082
// Function ID: 16083
// Name: AccountConfirmPasswordSetting
// Dependencies: [8331, 1084, 11212, 1125, 7091, 2]

// Module 16082 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7091 */;
import SettingsConstants from "SettingsConstants" /* 8331 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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
