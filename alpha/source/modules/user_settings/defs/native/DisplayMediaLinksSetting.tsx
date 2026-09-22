// Module ID: 15745
// Function ID: 15746
// Name: DisplayMediaLinksSetting
// Dependencies: [8237, 11729, 1115, 2020, 2]

// Module 15745 (DisplayMediaLinksSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import SettingsConstants from "SettingsConstants" /* 8237 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
