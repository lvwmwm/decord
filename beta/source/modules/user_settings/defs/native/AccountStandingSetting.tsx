// Module ID: 15036
// Function ID: 15037
// Name: AccountStandingSetting
// Dependencies: [8270, 1078, 11630, 1119, 15037, 15040, 2]

// Module 15036 (AccountStandingSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 15037 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["16r9jm"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: useAccountStandingStatusLabel.useAccountStandingStatusLabel,
  screen: {
    route: Constants.UserSettingsSections.ACCOUNT_STANDING,
    getComponent() {
      return require("SettingsAccountStandingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountStandingSetting.tsx");

export default route;
