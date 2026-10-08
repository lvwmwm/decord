// Module ID: 16112
// Function ID: 16113
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [7966, 11262, 1126, 2731, 2040, 2]

// Module 16112 (ActivityPrivacyShareMyActivitySetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2040 */;
import _modDef2731 from "module_2731" /* 2731 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2731.WhdCGP);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2731.UQ9RHJ);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
