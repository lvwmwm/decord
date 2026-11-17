// Module ID: 18125
// Function ID: 18126
// Name: DisplayMediaLinksSetting
// Dependencies: [9213, 12612, 1113, 5135, 2]

// Module 18125 (DisplayMediaLinksSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 5135 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
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
