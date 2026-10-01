// Module ID: 11579
// Function ID: 11580
// Name: SearchBarBottomBorder
// Dependencies: [19, 21, 4836, 576, 4566, 5280, 5284, 2]
// Exports: usePinnedSearchBarBottomBorder

// Module 11579 (SearchBarBottomBorder)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const springPresets = tmp(5284);
const jsx = Fragment.jsx;
let obj = { border: obj2 };
obj2 = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
let closure_5 = createStyles.createStyles(obj);
const __initData = { code: "function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}" };
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx");

export const usePinnedSearchBarBottomBorder = function usePinnedSearchBarBottomBorder(arg0) {
  let key;
  let triggerScrollHeight;
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  let tmp = closure_5();
  let obj = triggerScrollHeight(4566);
  const sharedValue = obj.useSharedValue(0);
  const items = [key, sharedValue];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = react.useCallback((offset) => {
    const result = sharedValue.set(offset.offset);
  }, items1);
  const fn = function u() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (sharedValue.get() > triggerScrollHeight) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, springPresets.springStandard) };
    return obj;
  };
  const obj2 = triggerScrollHeight(4566);
  fn.__closure = { withSpring: triggerScrollHeight(5280).withSpring, scrollPosition: sharedValue, triggerScrollHeight, springStandard: triggerScrollHeight(5284).springStandard };
  fn.__workletHash = 5466161440826;
  fn.__initData = __initData;
  const obj4 = { scrollHandler: callback, bottomBorderComponent: null };
  ({ withSpring: triggerScrollHeight(5280).withSpring, scrollPosition: sharedValue, triggerScrollHeight, springStandard: triggerScrollHeight(5284).springStandard });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const items2 = [tmp.border, animatedStyle];
  return obj4;
};
