// Module ID: 15853
// Function ID: 15854
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [7645, 11142, 1126, 2687, 2028, 2]

// Module 15853 (ActivityPrivacyShareMyActivitySetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import _modDef2687 from "module_2687" /* 2687 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2687.WhdCGP);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2687.UQ9RHJ);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
