// Module ID: 16231
// Function ID: 16232
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [8270, 11630, 1119, 2652, 2023, 2]

// Module 16231 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1119 */;
import UserSettings from "UserSettings" /* 2023 */;
import _modDef2652 from "module_2652" /* 2652 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2652.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2652.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
