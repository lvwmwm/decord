// Module ID: 14949
// Function ID: 14950
// Name: AccountConfirmPasswordSetting
// Dependencies: [7974, 1085, 10629, 1126, 6680, 2]

// Module 14949 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 6680 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
