// Module ID: 14704
// Function ID: 14705
// Name: route
// Dependencies: [7906, 673, 11400, 1233, 6933, 2]

// Module 14704 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import UserSettingsConfirmPasswordWrapped from "UserSettingsConfirmPasswordWrapped" /* 6933 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["7qKDrE"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.ACCOUNT_CONFIRM_PASSWORD,
  getComponent() {
    return UserSettingsConfirmPasswordWrapped.UserSettingsConfirmPasswordWrapped;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountConfirmPasswordSetting.tsx");

export default route;
