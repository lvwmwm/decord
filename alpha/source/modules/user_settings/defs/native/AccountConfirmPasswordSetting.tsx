// Module ID: 16901
// Function ID: 16902
// Name: AccountConfirmPasswordSetting
// Dependencies: [8573, 1072, 11729, 1113, 7300, 2]

// Module 16901 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7300 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
