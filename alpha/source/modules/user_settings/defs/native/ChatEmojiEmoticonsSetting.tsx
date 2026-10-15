// Module ID: 16414
// Function ID: 16415
// Name: ChatEmojiEmoticonsSetting
// Dependencies: [8210, 10991, 1126, 2041, 2]

// Module 16414 (ChatEmojiEmoticonsSetting)
import intl2 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
