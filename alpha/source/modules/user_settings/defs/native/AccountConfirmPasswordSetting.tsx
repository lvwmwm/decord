// Module ID: 14841
// Function ID: 14842
// Name: AccountConfirmPasswordSetting
// Dependencies: [7966, 1085, 11262, 1126, 6673, 2]

// Module 14841 (AccountConfirmPasswordSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import UserSettingsConfirmPassword from "UserSettingsConfirmPassword" /* 6673 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
