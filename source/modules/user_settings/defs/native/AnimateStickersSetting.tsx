// Module ID: 14137
// Function ID: 107288
// Name: radio
// Dependencies: [0, 0, 4294967295, 4294967295, 0, 0, 0]

// Module 14137 (radio)
import closure_2 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

const StickerAnimationSettings = arg1(dependencyMap[2]).StickerAnimationSettings;
__exportStarResult1 = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.R5nQkS);
  },
  parent: require("__exportStarResult1").MobileSetting.ACCESSIBILITY,
  useValue: arg1(dependencyMap[3]).AnimateStickers.useSetting,
  onValueChange: function onAnimateStickerSettingValueChange(arg0) {
    const AnimateStickers = arg1(dependencyMap[3]).AnimateStickers;
    AnimateStickers.updateSetting(Number(arg0));
  },
  useOptions: function useAnimateStickerSettingOptions() {
    return React.useMemo(() => {
      let obj = {};
      const intl = callback(closure_1[4]).intl;
      obj.label = intl.string(callback(closure_1[4]).t.Xp+X2U);
      obj.value = constants.ALWAYS_ANIMATE;
      const items = [obj, , ];
      obj = {};
      const intl2 = callback(closure_1[4]).intl;
      obj.label = intl2.string(callback(closure_1[4]).t.IlLT7e);
      obj.value = constants.ANIMATE_ON_INTERACTION;
      items[1] = obj;
      obj = {};
      const intl3 = callback(closure_1[4]).intl;
      obj.label = intl3.string(callback(closure_1[4]).t.IGu8x3);
      obj.value = constants.NEVER_ANIMATE;
      items[2] = obj;
      return items;
    }, []);
  }
};
__exportStarResult1 = __exportStarResult1.createRadio(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/user_settings/defs/native/AnimateStickersSetting.tsx");

export default __exportStarResult1;
