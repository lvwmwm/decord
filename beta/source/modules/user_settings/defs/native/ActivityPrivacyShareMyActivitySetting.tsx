// Module ID: 17411
// Function ID: 17412
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [8712, 11942, 1112, 2992, 4738, 2]

// Module 17411 (ActivityPrivacyShareMyActivitySetting)
import intl2 from "intl" /* 1112 */;
import _modDef2992 from "module_2992" /* 2992 */;
import UserSettings from "UserSettings" /* 4738 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2992.WhdCGP);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2992.UQ9RHJ);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
