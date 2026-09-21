// Module ID: 15806
// Function ID: 15807
// Name: DeveloperModeSetting
// Dependencies: [8233, 11725, 1115, 2019, 2]

// Module 15806 (DeveloperModeSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.ObIb1Q);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: UserSettings.DeveloperMode.useSetting,
  onValueChange: UserSettings.DeveloperMode.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DeveloperModeSetting.tsx");

export default toggle;
