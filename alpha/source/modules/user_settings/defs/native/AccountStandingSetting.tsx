// Module ID: 16292
// Function ID: 16293
// Name: AccountStandingSetting
// Dependencies: [8365, 1084, 11248, 1125, 16293, 16296, 2]

// Module 16292 (AccountStandingSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 16293 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
