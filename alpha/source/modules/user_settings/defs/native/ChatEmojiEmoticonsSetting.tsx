// Module ID: 14992
// Function ID: 14993
// Name: ChatEmojiEmoticonsSetting
// Dependencies: [7412, 10993, 1115, 2020, 2]

// Module 14992 (ChatEmojiEmoticonsSetting)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import SettingsConstants from "SettingsConstants" /* 7412 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["79qal8"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.GejoQK, {
      emojiHook(arg0) {
        return arg0;
      }
    });
  },
  parent: SettingsConstants.MobileUserSettings.CHAT,
  useValue: UserSettings.ConvertEmoticons.useSetting,
  onValueChange: UserSettings.ConvertEmoticons.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChatEmojiEmoticonsSetting.tsx");

export default toggle;
