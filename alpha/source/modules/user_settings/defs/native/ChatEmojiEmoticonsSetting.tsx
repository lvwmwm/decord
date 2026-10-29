// Module ID: 17335
// Function ID: 17336
// Name: ChatEmojiEmoticonsSetting
// Dependencies: [8387, 11302, 1125, 4833, 2]

// Module 17335 (ChatEmojiEmoticonsSetting)
import intl2 from "intl" /* 1125 */;
import UserSettings from "UserSettings" /* 4833 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
