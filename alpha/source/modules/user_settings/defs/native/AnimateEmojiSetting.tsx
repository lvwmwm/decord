// Module ID: 15692
// Function ID: 15693
// Name: AnimateEmojiSetting
// Dependencies: [7992, 10663, 1126, 2041, 2]

// Module 15692 (AnimateEmojiSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.iIaOlc);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: UserSettings.AnimateEmoji.useSetting,
  onValueChange: UserSettings.AnimateEmoji.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AnimateEmojiSetting.tsx");

export default toggle;
