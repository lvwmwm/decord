// Module ID: 13981
// Function ID: 107032
// Name: sharedValue
// Dependencies: [31, 33, 4130, 689, 8663, 3991, 4131, 2]
// Exports: default

// Module 13981 (sharedValue)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles((width, height) => {
  let obj = {};
  obj = { width, height, backgroundColor: importDefault(689).colors.BORDER_SUBTLE, borderRadius: importDefault(689).radii.sm };
  obj.skeletonCard = obj;
  return obj;
});
let closure_6 = { code: "function SkeletonCardTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/collectibles/native/SkeletonCard.tsx");

export default function _default(width) {
  let COLLECTIBLES_SHOP_CARD_WIDTH = width.width;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = sharedValue(8663).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = width.height;
  sharedValue = undefined;
  if (null == COLLECTIBLES_SHOP_CARD_HEIGHT) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = sharedValue(8663).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const tmp5 = callback(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
  sharedValue = sharedValue(3991).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = sharedValue(outer1_2[5]);
    const result = sharedValue.set(obj.withRepeat(sharedValue(outer1_2[6]).withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(3991);
  const fn = function y() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 5620456625640;
  fn.__initData = closure_6;
  const animatedStyle = sharedValue(3991).useAnimatedStyle(fn);
  const style = [tmp5.skeletonCard, width.style, animatedStyle];
  return jsx(importDefault(3991).View, { style });
};
