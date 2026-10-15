// Module ID: 16903
// Function ID: 16904
// Name: ActivityPrivacyShareMyActivitySetting
// Dependencies: [8210, 10991, 1126, 2736, 2041, 2]

// Module 16903 (ActivityPrivacyShareMyActivitySetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import _modDef2736 from "module_2736" /* 2736 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2736.WhdCGP);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2736.UQ9RHJ);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: UserSettings.ShowCurrentGame.useSetting,
  onValueChange: UserSettings.ShowCurrentGame.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyShareMyActivitySetting.tsx");

export default toggle;
