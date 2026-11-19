// Module ID: 17450
// Function ID: 17451
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [8593, 11875, 1113, 2891, 4617, 2]

// Module 17450 (ActivityPrivacyShareMyActivitySetting)
import intl2 from "intl" /* 1113 */;
import _modDef2891 from "module_2891" /* 2891 */;
import UserSettings from "UserSettings" /* 4617 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2891.WhdCGP);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2891.UQ9RHJ);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
