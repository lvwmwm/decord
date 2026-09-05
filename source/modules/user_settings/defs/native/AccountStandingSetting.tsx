// Module ID: 14763
// Function ID: 14764
// Name: route
// Dependencies: [7975, 1074, 11468, 1114, 14764, 14767, 2]

// Module 14763 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 14764 */;
import createToggle from "createToggle" /* 11468 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["16r9jm"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing: useAccountStandingStatusLabel.useAccountStandingStatusLabel,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.ACCOUNT_STANDING,
  getComponent() {
    return require(14767) /* SettingsAccountStandingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountStandingSetting.tsx");

export default route;
