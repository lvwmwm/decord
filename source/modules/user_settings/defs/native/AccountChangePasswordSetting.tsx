// Module ID: 14314
// Function ID: 14315
// Name: route
// Dependencies: [7830, 676, 11006, 1236, 14315, 2]

// Module 14314 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import createToggle from "createToggle" /* 11006 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["CIGa+7"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.ACCOUNT_CHANGE_PASSWORD,
  getComponent() {
    return require(14315).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;
