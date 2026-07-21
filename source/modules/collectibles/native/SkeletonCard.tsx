// Module ID: 13857
// Function ID: 104804
// Name: sharedValue
// Dependencies: []
// Exports: default

// Module 13857 (sharedValue)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = arg1(dependencyMap[2]).createStyles((width, height) => {
  let obj = {};
  obj = { width, height, backgroundColor: importDefault(dependencyMap[3]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[3]).radii.sm };
  obj.skeletonCard = obj;
  return obj;
});
let closure_6 = { code: "function SkeletonCardTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/collectibles/native/SkeletonCard.tsx");

export default function _default(width) {
  let COLLECTIBLES_SHOP_CARD_WIDTH = width.width;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = arg1(dependencyMap[4]).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = width.height;
  let arg1;
  if (null == COLLECTIBLES_SHOP_CARD_HEIGHT) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = arg1(dependencyMap[4]).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const tmp5 = callback(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
  const sharedValue = arg1(dependencyMap[5]).useSharedValue(0.3);
  arg1 = sharedValue;
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = sharedValue(closure_2[5]);
    const result = sharedValue.set(obj.withRepeat(sharedValue(closure_2[6]).withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const obj = arg1(dependencyMap[5]);
  const fn = function y() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 5620456625640;
  fn.__initData = closure_6;
  const animatedStyle = arg1(dependencyMap[5]).useAnimatedStyle(fn);
  const style = [tmp5.skeletonCard, width.style, animatedStyle];
  return jsx(importDefault(dependencyMap[5]).View, { style });
};
