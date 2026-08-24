// Module ID: 14789
// Function ID: 14790
// Name: toggle
// Dependencies: [8238, 10708, 1236, 4069, 2]

// Module 14789 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4069 */;
import MobileUserSettings from "MobileUserSettings" /* 8238 */;
import createToggle from "createToggle" /* 10708 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9ptHSs"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCESSIBILITY,
  useValue: explicitContentFromProto.GifAutoPlay.useSetting,
  onValueChange: explicitContentFromProto.GifAutoPlay.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9ptHSs"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCESSIBILITY,
  useValue: explicitContentFromProto.GifAutoPlay.useSetting,
  onValueChange: explicitContentFromProto.GifAutoPlay.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AutoplayGifSetting.tsx");

export default toggle;
