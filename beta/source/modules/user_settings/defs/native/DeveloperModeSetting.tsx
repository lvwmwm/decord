// Module ID: 15805
// Function ID: 15806
// Name: DeveloperModeSetting
// Dependencies: [8270, 11630, 1119, 2023, 2]

// Module 15805 (DeveloperModeSetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
