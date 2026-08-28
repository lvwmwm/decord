// Module ID: 14318
// Function ID: 14319
// Name: route
// Dependencies: [7830, 676, 11006, 1236, 7712, 2]

// Module 14318 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import UserSettingsConfirmPasswordWrapped from "UserSettingsConfirmPasswordWrapped" /* 7712 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import createToggle from "createToggle" /* 11006 */;

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
