// Module ID: 13060
// Function ID: 100922
// Name: Collapsible
// Dependencies: [57, 31, 27, 33, 4130, 689, 3991, 4542, 2]
// Exports: default

// Module 13060 (Collapsible)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = { stiffness: 150, overshootClamping: true };
_createForOfIteratorHelperLoose = { collapsible: { position: "relative", overflow: "hidden" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.collapsibleContent = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function CollapsibleTsx1(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("design/void/Collapsible/native/Collapsible.tsx");

export default function Collapsible(isExpanded) {
  let children;
  let collapsibleContent;
  let style;
  isExpanded = isExpanded.isExpanded;
  let first1;
  let callback;
  let first2;
  let closure_5;
  let callback2;
  ({ children, collapsibleContent, style } = isExpanded);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(first2.useState(false), 2);
  const first = tmp2[0];
  const importDefault = tmp4;
  let tmp5 = first;
  if (null != isExpanded) {
    tmp5 = isExpanded;
  }
  const tmp6 = callback(first2.useState(0), 2);
  first1 = tmp6[0];
  callback = tmp6[1];
  const tmp8 = callback(first2.useState(0), 2);
  first2 = tmp8[0];
  closure_5 = tmp8[1];
  const items = [first1];
  const items1 = [first2];
  callback = first2.useCallback((nativeEvent) => {
    if (0 === first1) {
      callback(nativeEvent.nativeEvent.layout.height);
    }
  }, items);
  let num = 0;
  const callback1 = first2.useCallback((nativeEvent) => {
    if (0 === first2) {
      callback2(nativeEvent.nativeEvent.layout.height);
    }
  }, items1);
  if (tmp5) {
    num = first2;
  }
  const sum = first1 + num;
  callback2 = sum;
  let obj = first(first1[6]);
  class S {
    constructor() {
      obj = {};
      obj2 = outer1_0(c2[7]);
      obj.height = obj2.withSpring(c6, outer1_8);
      return obj;
    }
  }
  obj = { withSpring: first(first1[7]).withSpring, totalHeight: sum, EXPAND_SPRING: closure_8 };
  S.__closure = obj;
  S.__workletHash = 1072657539267;
  S.__initData = closure_10;
  const items2 = [first, tmp2[1]];
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style };
  callback2 = first2.useCallback(() => {
    tmp4(!first);
  }, items2);
  const obj1 = {};
  const items3 = [tmp.collapsible, ];
  let tmp18 = null;
  if (sum > 0) {
    tmp18 = animatedStyle;
  }
  items3[1] = tmp18;
  obj1.style = items3;
  const items4 = [callback2(closure_5, { onLayout: callback, children: children({ onPress: callback2 }) }), callback2(closure_5, { style: tmp.collapsibleContent, onLayout: callback1, children: collapsibleContent })];
  obj1.children = items4;
  obj.children = closure_7(importDefault(first1[6]).View, obj1);
  return callback2(closure_5, obj);
};
