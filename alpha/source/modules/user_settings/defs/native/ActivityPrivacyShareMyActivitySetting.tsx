// Module ID: 16232
// Function ID: 16233
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [8233, 11725, 1115, 2648, 2019, 2]

// Module 16232 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import _modDef2648 from "module_2648" /* 2648 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2648.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2648.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
