// Module ID: 16529
// Function ID: 16530
// Name: ChatEmojiEmoticonsSetting
// Dependencies: [8260, 11084, 1128, 2044, 2]

// Module 16529 (ChatEmojiEmoticonsSetting)
import intl2 from "intl" /* 1128 */;
import UserSettings from "UserSettings" /* 2044 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["79qal8"]);
  },
  useDescription() {
    const intl = intl2.intl;
    const obj = {
      emojiHook(arg0) {
        return arg0;
      }
    };
    return intl.formatToPlainString(intl2.t.GejoQK, obj);
  },
  parent: MobileUserSettings.CHAT,
  useValue: UserSettings.ConvertEmoticons.useSetting,
  onValueChange: UserSettings.ConvertEmoticons.updateSetting
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChatEmojiEmoticonsSetting.tsx");

export default toggle;
