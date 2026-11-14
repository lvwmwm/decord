// Module ID: 10444
// Function ID: 10445
// Name: CollectiblesShopPricePlaceholder
// Dependencies: [19, 21, 5306, 575, 1655, 5548, 2]
// Exports: CollectiblesShopPricePlaceholder

// Module 10444 (CollectiblesShopPricePlaceholder)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
let set;

let obj2;
const jsx = Fragment.jsx;
let obj = { skeletonContainer: obj2 };
obj2 = { height: 16, flex: 1, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_5 = createStyles.createStyles(obj);
let closure_6 = { code: "(function CollectiblesShopPricePlaceholderTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export function CollectiblesShopPricePlaceholder(style) {
  let tmp5;
  let tmp6;
  let sharedValue;
  style = style.style;
  const tmp = closure_5();
  let obj = sharedValue(1655);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const withRepeat = _mod1655.withRepeat;
    _mod1655;
    const obj = timing_timing;
    const result = set(withRepeat(obj.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const items1 = [closure_6, sharedValue];
  let c0;
  [tmp5, tmp6] = items1;
  const obj2 = sharedValue(1655);
  class CollectiblesShopPricePlaceholderTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp6];
  CollectiblesShopPricePlaceholderTsx1.__closure = items2;
  CollectiblesShopPricePlaceholderTsx1.__workletHash = 9548968657761;
  CollectiblesShopPricePlaceholderTsx1.__initData = tmp5;
  const animatedStyle = obj2.useAnimatedStyle(CollectiblesShopPricePlaceholderTsx1);
  const items3 = [tmp.skeletonContainer, style, animatedStyle];
  return jsx(_modDef1655.View, { style: items3 });
}
