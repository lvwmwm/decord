// Module ID: 17584
// Function ID: 17585
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [8365, 11248, 1125, 2705, 4832, 2]

// Module 17584 (ActivityPrivacyShareMyActivitySetting)
import intl2 from "intl" /* 1125 */;
import _modDef2705 from "module_2705" /* 2705 */;
import UserSettings from "UserSettings" /* 4832 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2705.WhdCGP);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2705.UQ9RHJ);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
