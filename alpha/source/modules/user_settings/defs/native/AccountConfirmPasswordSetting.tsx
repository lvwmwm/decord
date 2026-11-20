// Module ID: 15928
// Function ID: 15929
// Name: AccountConfirmPasswordSetting
// Dependencies: [8592, 1071, 11817, 1112, 7293, 2]

// Module 15928 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7293 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
