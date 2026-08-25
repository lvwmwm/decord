// Module ID: 14871
// Function ID: 14872
// Name: toggle
// Dependencies: [8235, 10516, 1236, 4070, 2]

// Module 14871 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import createToggle from "createToggle" /* 10516 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["79qal8"]);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue: explicitContentFromProto.ConvertEmoticons.useSetting,
  onValueChange: explicitContentFromProto.ConvertEmoticons.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["79qal8"]);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue: explicitContentFromProto.ConvertEmoticons.useSetting,
  onValueChange: explicitContentFromProto.ConvertEmoticons.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ChatEmojiEmoticonsSetting.tsx");

export default toggle;
