// Module ID: 15027
// Function ID: 15028
// Name: AccountStandingSetting
// Dependencies: [8238, 1078, 11594, 1119, 15028, 15031, 2]

// Module 15027 (AccountStandingSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 15028 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
