// Module ID: 14688
// Function ID: 14689
// Name: route
// Dependencies: [7906, 673, 11400, 1233, 14689, 14692, 2]

// Module 14688 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 14689 */;
import createToggle from "createToggle" /* 11400 */;

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
    return require(14692) /* SettingsAccountStandingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountStandingSetting.tsx");

export default route;
