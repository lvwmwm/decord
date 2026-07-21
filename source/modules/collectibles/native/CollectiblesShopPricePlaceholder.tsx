// Module ID: 8720
// Function ID: 69017
// Name: CollectiblesShopPricePlaceholder
// Dependencies: []
// Exports: CollectiblesShopPricePlaceholder

// Module 8720 (CollectiblesShopPricePlaceholder)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { "Bool(false)": "Group 11", "Bool(false)": 2, borderRadius: importDefault(dependencyMap[3]).radii.xs, backgroundColor: importDefault(dependencyMap[3]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj.skeletonContainer = obj;
let closure_5 = obj.createStyles(obj);
let closure_6 = { code: "function CollectiblesShopPricePlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export const CollectiblesShopPricePlaceholder = function CollectiblesShopPricePlaceholder(style) {
  const tmp = callback();
  const sharedValue = arg1(dependencyMap[4]).useSharedValue(0.3);
  const arg1 = sharedValue;
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = sharedValue(closure_2[4]);
    const result = sharedValue.set(obj.withRepeat(sharedValue(closure_2[5]).withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const obj = arg1(dependencyMap[4]);
  const fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10107093534072;
  fn.__initData = closure_6;
  const animatedStyle = arg1(dependencyMap[4]).useAnimatedStyle(fn);
  style = [tmp.skeletonContainer, style.style, animatedStyle];
  return jsx(importDefault(dependencyMap[4]).View, { style });
};
