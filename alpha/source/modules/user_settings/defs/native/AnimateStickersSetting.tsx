// Module ID: 17401
// Function ID: 17402
// Name: AnimateStickersSetting
// Dependencies: [19, 8432, 4842, 4839, 1113, 11539, 2]

// Module 17401 (AnimateStickersSetting)
import intl4 from "intl" /* 1113 */;
import UserSettings from "UserSettings" /* 4839 */;
import StickersConstants from "StickersConstants" /* 4842 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const StickerAnimationSettings = StickersConstants.StickerAnimationSettings;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.R5nQkS);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: UserSettings.AnimateStickers.useSetting,
  onValueChange: function onAnimateStickerSettingValueChange(arg0) {
    const AnimateStickers = UserSettings.AnimateStickers;
    AnimateStickers.updateSetting(Number(arg0));
  },
  useOptions: function useAnimateStickerSettingOptions() {
    return react.useMemo(() => {
      let intl;
      let intl2;
      let intl3;
      const obj = { label: intl.string(intl4.t["Xp+X2U"]), value: constants.ALWAYS_ANIMATE };
      intl = intl4.intl;
      const items = [obj, , ];
      const obj2 = { label: intl2.string(intl4.t.IlLT7e), value: constants.ANIMATE_ON_INTERACTION };
      intl2 = intl4.intl;
      items[1] = obj2;
      const obj3 = { label: intl3.string(intl4.t.IGu8x3), value: constants.NEVER_ANIMATE };
      intl3 = intl4.intl;
      items[2] = obj3;
      return items;
    }, []);
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AnimateStickersSetting.tsx");

export default radio;
