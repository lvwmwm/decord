// Module ID: 15732
// Function ID: 15733
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [7612, 11211, 1115, 2653, 2021, 2]

// Module 15732 (ActivityPrivacyShareMyActivitySetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import _modDef2653 from "module_2653" /* 2653 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2653.WhdCGP);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2653.UQ9RHJ);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
