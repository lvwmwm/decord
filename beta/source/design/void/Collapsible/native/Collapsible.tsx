// Module ID: 13638
// Function ID: 13639
// Name: Collapsible
// Dependencies: [32, 19, 17, 21, 4836, 576, 4566, 5280, 2]
// Exports: default

// Module 13638 (Collapsible)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const EXPAND_SPRING = { stiffness: 150, overshootClamping: true };
let obj = { collapsible: { position: "relative", overflow: "hidden" }, collapsibleContent: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function CollapsibleTsx1(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}" };
const result = size.fileFinishedImporting("design/void/Collapsible/native/Collapsible.tsx");

export default function Collapsible(isExpanded) {
  let children;
  let closure_1;
  let closure_3;
  let closure_5;
  let collapsibleContent;
  let first1;
  let first2;
  let items3;
  let num;
  let obj4;
  let obj6;
  let style;
  let tmp21;
  isExpanded = isExpanded.isExpanded;
  first1 = undefined;
  _slicedToArray = undefined;
  first2 = undefined;
  closure_5 = undefined;
  let c6;
  ({ children, collapsibleContent, style } = isExpanded);
  const tmp = closure_9();
  let obj = first2;
  const tmp2 = _slicedToArray(first2.useState(false), 2);
  const first = tmp2[0];
  importDefault = tmp4;
  [first1, _slicedToArray] = first2.useState(0);
  [first2, closure_5] = first2.useState(0);
  const items = [first1];
  [][0] = first2;
  const callback = first2.useCallback((nativeEvent) => {
    if (0 === first1) {
      closure_3(nativeEvent.nativeEvent.layout.height);
    }
  }, items);
  if (isExpanded == null) {
    num = 0;
    const sum = first1 + num;
    c6 = sum;
    const tmp14 = first(first1[6]);
    class S {
      constructor() {
        let obj2;
        const obj = { height: obj2.withSpring(c6, EXPAND_SPRING) };
        obj2 = spring;
        return obj;
      }
    }
    let obj2 = { withSpring: first(first1[7]).withSpring, totalHeight: sum, EXPAND_SPRING };
    const useAnimatedStyle = tmp14.useAnimatedStyle;
    S.__closure = obj2;
    S.__workletHash = 1072657539267;
    S.__initData = __initData;
    const items1 = [first, tmp2[1]];
    const animatedStyle = useAnimatedStyle(S);
    const obj3 = { style, children: tmp21(View, obj4) };
    const callback1 = obj.useCallback(() => {
      closure_1(!first);
    }, items1);
    const items2 = [tmp.collapsible, ];
    let tmp23 = null;
    View = require("ReanimatedRexport").View;
    tmp21 = closure_7;
    if (sum > 0) {
      tmp23 = animatedStyle;
    }
    obj4 = { style: items2, children: items3 };
    items2[1] = tmp23;
    const obj5 = { onLayout: callback, children: children(obj6) };
    obj6 = { onPress: callback1 };
    items3 = [c6(closure_5, obj5), ];
    const obj7 = { style: tmp.collapsibleContent, onLayout: tmp10, children: collapsibleContent };
    items3[1] = c6(closure_5, obj7);
    return c6(closure_5, obj3);
  } else {
    num = 0;
  }
  num = first2;
};
