// Module ID: 15794
// Function ID: 15795
// Name: AccountConfirmPasswordSetting
// Dependencies: [8260, 1087, 11065, 1128, 6959, 2]

// Module 15794 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 6959 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
