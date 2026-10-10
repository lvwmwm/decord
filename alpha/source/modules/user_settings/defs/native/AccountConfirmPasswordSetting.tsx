// Module ID: 15008
// Function ID: 15009
// Name: AccountConfirmPasswordSetting
// Dependencies: [7992, 1085, 10663, 1126, 6681, 2]

// Module 15008 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 6681 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
