// Module ID: 14775
// Function ID: 14776
// Name: route
// Dependencies: [7975, 1074, 11468, 1114, 14776, 2]

// Module 14775 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11468 */;

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
    return require(14776).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountChangePasswordSetting.tsx");

export default route;
