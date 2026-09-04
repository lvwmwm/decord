// Module ID: 8791
// Function ID: 8792
// Name: CollectiblesShopPricePlaceholder
// Dependencies: [19, 21, 4481, 709, 4218, 4482, 2]
// Exports: CollectiblesShopPricePlaceholder

// Module 8791 (CollectiblesShopPricePlaceholder)
import ThemesDefault from "Themes" /* 709 */;
import _modDef4218 from "module_4218" /* 4218 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
createCacheKey = { skeletonContainer: null };
createCacheKey = { height: 16, flex: 1, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
let closure_6 = { code: "function CollectiblesShopPricePlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export const CollectiblesShopPricePlaceholder = function CollectiblesShopPricePlaceholder(style) {
  let sharedValue;
  const tmp = callback();
  sharedValue = sharedValue(4218).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = sharedValue(closure_1_2[4]);
    const result = sharedValue.set(obj.withRepeat(sharedValue(closure_1_2[5]).withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(4218);
  const fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10107093534072;
  fn.__initData = closure_6;
  const animatedStyle = sharedValue(4218).useAnimatedStyle(fn);
  style = [tmp.skeletonContainer, style.style, animatedStyle];
  return jsx(_modDef4218.View, { style });
};
