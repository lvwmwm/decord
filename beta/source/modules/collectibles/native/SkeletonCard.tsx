// Module ID: 8337
// Function ID: 8338
// Name: SkeletonCard
// Dependencies: [19, 21, 4836, 576, 8226, 4566, 4837, 2]
// Exports: default

// Module 8337 (SkeletonCard)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((width, height) => {
  const obj = { skeletonCard: size };
  size = { width, height, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm };
  return obj;
});
const __initData = { code: "function SkeletonCardTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/SkeletonCard.tsx");

export default function _default(width) {
  let sharedValue;
  let COLLECTIBLES_SHOP_CARD_WIDTH = width.width;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = sharedValue(8226).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = width.height;
  sharedValue = undefined;
  const style = width.style;
  const tmp3 = closure_5;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT == null) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = sharedValue(8226).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const tmp3Result = tmp3(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
  let obj = sharedValue(4566);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    const obj = timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const obj2 = sharedValue(4566);
  class C {
    constructor() {
      const obj = { opacity: sharedValue.get() };
      return obj;
    }
  }
  C.__closure = { opacity: sharedValue };
  C.__workletHash = 5620456625640;
  C.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(C);
  const items1 = [tmp3Result.skeletonCard, style, animatedStyle];
  return jsx(ReanimatedRexportDefault.View, { style: items1 });
};
