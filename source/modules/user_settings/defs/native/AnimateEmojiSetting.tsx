// Module ID: 14820
// Function ID: 14821
// Name: toggle
// Dependencies: [8235, 10516, 1236, 4070, 2]

// Module 14820 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import createToggle from "createToggle" /* 10516 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.iIaOlc);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCESSIBILITY,
  useValue: explicitContentFromProto.AnimateEmoji.useSetting,
  onValueChange: explicitContentFromProto.AnimateEmoji.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.iIaOlc);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCESSIBILITY,
  useValue: explicitContentFromProto.AnimateEmoji.useSetting,
  onValueChange: explicitContentFromProto.AnimateEmoji.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AnimateEmojiSetting.tsx");

export default toggle;
