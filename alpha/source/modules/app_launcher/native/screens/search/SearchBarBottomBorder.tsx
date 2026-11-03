// Module ID: 12562
// Function ID: 12563
// Name: SearchBarBottomBorder
// Dependencies: [19, 21, 5141, 575, 1652, 5757, 5758, 2]
// Exports: usePinnedSearchBarBottomBorder

// Module 12562 (SearchBarBottomBorder)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5757 */;
import springPresets from "springPresets" /* 5758 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { border: obj2 };
obj2 = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
let closure_5 = createStyles.createStyles(obj);
let closure_6 = { code: "(function SearchBarBottomBorderTsx1(){let[withSpring,scrollPosition,triggerScrollHeight,springStandard]=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};})" };
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx");

export function usePinnedSearchBarBottomBorder(arg0) {
  let key;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  let tmp9;
  let triggerScrollHeight;
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  let tmp = closure_5();
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(0);
  const items = [key, sharedValue];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = react.useCallback((offset) => {
    const result = sharedValue.set(offset.offset);
  }, items1);
  const items2 = [closure_6, , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items2[1] = spring_spring.withSpring;
  items2[2] = sharedValue;
  items2[3] = triggerScrollHeight;
  items2[4] = springPresets.springStandard;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp7, tmp8, tmp9, tmp10, tmp11] = items2;
  class SearchBarBottomBorderTsx1 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (_undefined.get() > c2) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c3) };
      return obj;
    }
  }
  const items3 = [tmp8, tmp9, tmp10, tmp11];
  SearchBarBottomBorderTsx1.__closure = items3;
  SearchBarBottomBorderTsx1.__workletHash = 6638827003107;
  SearchBarBottomBorderTsx1.__initData = tmp7;
  const obj2 = { scrollHandler: callback, bottomBorderComponent: null };
  const animatedStyle = useAnimatedStyle(SearchBarBottomBorderTsx1);
  const items4 = [tmp.border, animatedStyle];
  return obj2;
}
