// Module ID: 9543
// Function ID: 9544
// Name: CollectiblesShopPricePlaceholder
// Dependencies: [19, 21, 5009, 575, 5090, 5249, 2]
// Exports: CollectiblesShopPricePlaceholder

// Module 9543 (CollectiblesShopPricePlaceholder)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let set;

let obj2;
const jsx = Fragment.jsx;
let obj = { skeletonContainer: obj2 };
obj2 = { height: 16, flex: 1, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
let closure_5 = createStyles.createStyles(obj);
const __initData = { code: "function CollectiblesShopPricePlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export function CollectiblesShopPricePlaceholder(style) {
  let sharedValue;
  style = style.style;
  const tmp = closure_5();
  let obj = sharedValue(5090);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = ReanimatedRexport.withRepeat;
    ReanimatedRexport;
    const obj = timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const fn = function h() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10107093534072;
  fn.__initData = __initData;
  const obj2 = sharedValue(5090);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const items1 = [tmp.skeletonContainer, style, animatedStyle];
  return jsx(ReanimatedRexportDefault.View, { style: items1 });
}
