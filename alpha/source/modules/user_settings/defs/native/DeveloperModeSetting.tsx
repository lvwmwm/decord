// Module ID: 15633
// Function ID: 15634
// Name: DeveloperModeSetting
// Dependencies: [7966, 11262, 1126, 2040, 2]

// Module 15633 (DeveloperModeSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ObIb1Q);
  },
  parent: MobileUserSettings.ADVANCED,
  useValue: UserSettings.DeveloperMode.useSetting,
  onValueChange: UserSettings.DeveloperMode.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DeveloperModeSetting.tsx");

export default toggle;
