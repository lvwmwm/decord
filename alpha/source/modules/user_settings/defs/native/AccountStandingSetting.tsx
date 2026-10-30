// Module ID: 16581
// Function ID: 16582
// Name: AccountStandingSetting
// Dependencies: [8424, 1072, 11505, 1114, 16582, 16585, 2]

// Module 16581 (AccountStandingSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import useAccountStandingStatusLabel from "useAccountStandingStatusLabel" /* 16582 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
