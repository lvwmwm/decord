// Module ID: 18091
// Function ID: 18092
// Name: ChatEmojiEmoticonsSetting
// Dependencies: [9202, 12406, 1113, 5131, 2]

// Module 18091 (ChatEmojiEmoticonsSetting)
import intl2 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 5131 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
