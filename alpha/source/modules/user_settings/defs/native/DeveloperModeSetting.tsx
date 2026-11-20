// Module ID: 16825
// Function ID: 16826
// Name: DeveloperModeSetting
// Dependencies: [8592, 11817, 1112, 4619, 2]

// Module 16825 (DeveloperModeSetting)
import intl2 from "intl" /* 1112 */;
import UserSettings from "UserSettings" /* 4619 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
