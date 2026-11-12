// Module ID: 16476
// Function ID: 16477
// Name: Collapsible
// Dependencies: [32, 19, 17, 21, 5243, 575, 1652, 5876, 2]
// Exports: default

// Module 16476 (Collapsible)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5876 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;

let metroImportDefault;
let metroRequire;
let obj2;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = { stiffness: 150, overshootClamping: true };
let obj = { collapsible: { position: "relative", overflow: "hidden" }, collapsibleContent: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = { code: "(function CollapsibleTsx1(){let[withSpring,totalHeight,EXPAND_SPRING]=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};})" };
const result = size.fileFinishedImporting("design/void/Collapsible/native/Collapsible.tsx");

export default function Collapsible(isExpanded) {
  let children;
  let closure_3;
  let closure_5;
  let collapsibleContent;
  let first1;
  let first2;
  let items5;
  let num;
  let obj3;
  let obj5;
  let style;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp26;
  isExpanded = isExpanded.isExpanded;
  first1 = undefined;
  closure_3 = undefined;
  first2 = undefined;
  closure_5 = undefined;
  ({ children, collapsibleContent, style } = isExpanded);
  const tmp = closure_9();
  let obj = react;
  const tmp2 = _slicedToArray(react.useState(false), 2);
  const first = tmp2[0];
  let closure_1 = tmp4;
  [first1, closure_3] = react.useState(0);
  [first2, closure_5] = react.useState(0);
  const items = [first1];
  [][0] = first2;
  const callback = react.useCallback((nativeEvent) => {
    if (0 === first1) {
      closure_3(nativeEvent.nativeEvent.layout.height);
    }
  }, items);
  if (isExpanded == null) {
    num = 0;
    const sum = first1 + num;
    const items1 = [closure_10, , , ];
    const useAnimatedStyle = _mod1652.useAnimatedStyle;
    _mod1652;
    items1[1] = spring_spring.withSpring;
    items1[2] = sum;
    items1[3] = closure_8;
    let c0;
    let c1;
    let c2;
    [tmp18, tmp19, tmp20, tmp21] = items1;
    class CollapsibleTsx1 {
      constructor() {
        const obj = { height: _undefined(c1, c2) };
        return obj;
      }
    }
    const items2 = [tmp19, tmp20, tmp21];
    CollapsibleTsx1.__closure = items2;
    CollapsibleTsx1.__workletHash = 912890471066;
    CollapsibleTsx1.__initData = tmp18;
    const items3 = [first, tmp2[1]];
    const animatedStyle = useAnimatedStyle(CollapsibleTsx1);
    const obj2 = { style, children: tmp26(View, obj3) };
    const callback1 = obj.useCallback(() => {
      closure_1(!first);
    }, items3);
    const items4 = [tmp.collapsible, ];
    let tmp28 = null;
    View = _modDef1652.View;
    tmp26 = metroImportDefault;
    if (sum > 0) {
      tmp28 = animatedStyle;
    }
    obj3 = { style: items4, children: items5 };
    items4[1] = tmp28;
    const obj4 = { onLayout: callback, children: children(obj5) };
    obj5 = { onPress: callback1 };
    items5 = [metroRequire(View, obj4), ];
    const obj6 = { style: tmp.collapsibleContent, onLayout: tmp10, children: collapsibleContent };
    items5[1] = metroRequire(View, obj6);
    return metroRequire(View, obj2);
  } else {
    num = 0;
  }
  num = first2;
};
