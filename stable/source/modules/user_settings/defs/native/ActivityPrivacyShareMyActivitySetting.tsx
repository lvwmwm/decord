// Module ID: 15512
// Function ID: 15513
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [7421, 10874, 1127, 2656, 2027, 2]

// Module 15512 (ActivityPrivacyShareMyActivitySetting)
import intl2 from "intl" /* 1127 */;
import UserSettings from "UserSettings" /* 2027 */;
import _modDef2656 from "module_2656" /* 2656 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2656.WhdCGP);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2656.UQ9RHJ);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
