// Module ID: 15736
// Function ID: 15737
// Name: DisplayMediaLinksSetting
// Dependencies: [8265, 11754, 1115, 2019, 2]

// Module 15736 (DisplayMediaLinksSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.U47N1p);
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue: UserSettings.InlineEmbedMedia.useSetting,
  onValueChange: UserSettings.InlineEmbedMedia.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaLinksSetting.tsx");

export default toggle;
