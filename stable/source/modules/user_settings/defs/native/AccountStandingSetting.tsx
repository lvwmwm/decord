// Module ID: 14283
// Function ID: 14284
// Name: AccountStandingSetting
// Dependencies: [7421, 1086, 10874, 1127, 14284, 14287, 2]

// Module 14283 (AccountStandingSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 14284 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["16r9jm"]);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: useAccountStandingStatusLabel.useAccountStandingStatusLabel,
  screen: {
    route: UserSettingsSections.ACCOUNT_STANDING,
    getComponent() {
      return require("SettingsAccountStandingScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountStandingSetting.tsx");

export default route;
