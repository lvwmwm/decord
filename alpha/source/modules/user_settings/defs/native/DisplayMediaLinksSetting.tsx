// Module ID: 17714
// Function ID: 17715
// Name: DisplayMediaLinksSetting
// Dependencies: [8524, 11703, 1113, 4995, 2]

// Module 17714 (DisplayMediaLinksSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4995 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.U47N1p);
  },
  parent: MobileUserSettings.CHAT,
  useValue: UserSettings.InlineEmbedMedia.useSetting,
  onValueChange: UserSettings.InlineEmbedMedia.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaLinksSetting.tsx");

export default toggle;
