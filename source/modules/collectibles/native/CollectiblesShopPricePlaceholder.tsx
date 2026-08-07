// Module ID: 9363
// Function ID: 9364
// Name: CollectiblesShopPricePlaceholder
// Dependencies: [19, 21, 4302, 712, 4162, 4303, 2]
// Exports: CollectiblesShopPricePlaceholder

// Module 9363 (CollectiblesShopPricePlaceholder)
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { skeletonContainer: null };
createCacheKey = { height: 16, flex: 1, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_6 = { code: "function CollectiblesShopPricePlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("createCacheKey").fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export const CollectiblesShopPricePlaceholder = function CollectiblesShopPricePlaceholder(style) {
  let sharedValue;
  const tmp = createCacheKey();
  sharedValue = sharedValue(4162).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = sharedValue(outer1_2[4]);
    const result = sharedValue.set(obj.withRepeat(sharedValue(outer1_2[5]).withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(4162);
  const fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10107093534072;
  fn.__initData = closure_6;
  const animatedStyle = sharedValue(4162).useAnimatedStyle(fn);
  style = [tmp.skeletonContainer, style.style, animatedStyle];
  return jsx(importDefault(4162).View, { style });
};
