// Module ID: 8769
// Function ID: 69299
// Name: CollectiblesShopPricePlaceholder
// Dependencies: [31, 33, 4130, 689, 3991, 4131, 2]
// Exports: CollectiblesShopPricePlaceholder

// Module 8769 (CollectiblesShopPricePlaceholder)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 16, flex: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
_createForOfIteratorHelperLoose.skeletonContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_6 = { code: "function CollectiblesShopPricePlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export const CollectiblesShopPricePlaceholder = function CollectiblesShopPricePlaceholder(style) {
  const tmp = _createForOfIteratorHelperLoose();
  sharedValue = sharedValue(3991).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = sharedValue(outer1_2[4]);
    const result = sharedValue.set(obj.withRepeat(sharedValue(outer1_2[5]).withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(3991);
  const fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10107093534072;
  fn.__initData = closure_6;
  const animatedStyle = sharedValue(3991).useAnimatedStyle(fn);
  style = [tmp.skeletonContainer, style.style, animatedStyle];
  return jsx(importDefault(3991).View, { style });
};
