// Module ID: 15982
// Function ID: 15983
// Name: AccountConfirmPasswordSetting
// Dependencies: [8318, 1087, 11181, 1128, 7074, 2]

// Module 15982 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 7074 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
