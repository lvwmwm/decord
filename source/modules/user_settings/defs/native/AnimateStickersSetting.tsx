// Module ID: 14301
// Function ID: 109767
// Name: radio
// Dependencies: [31, 7751, 3806, 3803, 1212, 10127, 2]

// Module 14301 (radio)
import result from "result";
import { StickerAnimationSettings } from "STICKER_PICKER_TAB_PANEL_ID";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.R5nQkS);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").AnimateStickers.useSetting,
  onValueChange: function onAnimateStickerSettingValueChange(arg0) {
    const AnimateStickers = require(3803) /* explicitContentFromProto */.AnimateStickers;
    AnimateStickers.updateSetting(Number(arg0));
  },
  useOptions: function useAnimateStickerSettingOptions() {
    return React.useMemo(() => {
      let obj = {};
      const intl = outer1_0(outer1_1[4]).intl;
      obj.label = intl.string(outer1_0(outer1_1[4]).t["Xp+X2U"]);
      obj.value = outer1_3.ALWAYS_ANIMATE;
      const items = [obj, , ];
      obj = {};
      const intl2 = outer1_0(outer1_1[4]).intl;
      obj.label = intl2.string(outer1_0(outer1_1[4]).t.IlLT7e);
      obj.value = outer1_3.ANIMATE_ON_INTERACTION;
      items[1] = obj;
      obj = {};
      const intl3 = outer1_0(outer1_1[4]).intl;
      obj.label = intl3.string(outer1_0(outer1_1[4]).t.IGu8x3);
      obj.value = outer1_3.NEVER_ANIMATE;
      items[2] = obj;
      return items;
    }, []);
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("STICKER_PICKER_TAB_PANEL_ID").fileFinishedImporting("modules/user_settings/defs/native/AnimateStickersSetting.tsx");

export default createToggle;
