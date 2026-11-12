// Module ID: 9698
// Function ID: 9699
// Name: SkeletonCard
// Dependencies: [19, 21, 5170, 575, 9573, 1652, 5402, 2]
// Exports: default

// Module 9698 (SkeletonCard)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let set;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((width, height) => {
  const obj = { skeletonCard: size };
  size = { width, height, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm };
  return obj;
});
let closure_6 = { code: "(function SkeletonCardTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/SkeletonCard.tsx");

export default function _default(width) {
  let sharedValue;
  let tmp10;
  let tmp11;
  let COLLECTIBLES_SHOP_CARD_WIDTH = width.width;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = sharedValue(9573).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = width.height;
  sharedValue = undefined;
  const style = width.style;
  const tmp3 = closure_5;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT == null) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = sharedValue(9573).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const tmp3Result = tmp3(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = _mod1652.withRepeat;
    _mod1652;
    const obj = timing_timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const items1 = [closure_6, sharedValue];
  let c0;
  [tmp10, tmp11] = items1;
  const obj2 = sharedValue(1652);
  class SkeletonCardTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp11];
  SkeletonCardTsx1.__closure = items2;
  SkeletonCardTsx1.__workletHash = 5075628150833;
  SkeletonCardTsx1.__initData = tmp10;
  const animatedStyle = obj2.useAnimatedStyle(SkeletonCardTsx1);
  const items3 = [tmp3Result.skeletonCard, style, animatedStyle];
  return jsx(_modDef1652.View, { style: items3 });
};
