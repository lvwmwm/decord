// Module ID: 15217
// Function ID: 15218
// Name: DisplayMediaLinksSetting
// Dependencies: [7612, 11211, 1115, 2021, 2]

// Module 15217 (DisplayMediaLinksSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2021 */;
import SettingsConstants from "SettingsConstants" /* 7612 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
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
