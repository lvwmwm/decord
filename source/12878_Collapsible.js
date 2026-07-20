// Module ID: 12878
// Function ID: 98365
// Name: Collapsible
// Dependencies: []
// Exports: default

// Module 12878 (Collapsible)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = {};
let obj = arg1(dependencyMap[4]);
obj = { collapsible: {} };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH };
obj.collapsibleContent = obj;
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function CollapsibleTsx1(){const{withSpring,totalHeight,EXPAND_SPRING}=this.__closure;return{height:withSpring(totalHeight,EXPAND_SPRING)};}" };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/void/Collapsible/native/Collapsible.tsx");

export default function Collapsible(isExpanded) {
  let children;
  let collapsibleContent;
  let style;
  isExpanded = isExpanded.isExpanded;
  let dependencyMap;
  let callback;
  let React;
  let closure_5;
  let sum;
  ({ children, collapsibleContent, style } = isExpanded);
  const tmp = callback2();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const arg1 = first;
  const importDefault = tmp4;
  let tmp5 = first;
  if (null != isExpanded) {
    tmp5 = isExpanded;
  }
  const tmp6 = callback(React.useState(0), 2);
  const first1 = tmp6[0];
  dependencyMap = first1;
  callback = tmp6[1];
  const tmp8 = callback(React.useState(0), 2);
  const first2 = tmp8[0];
  React = first2;
  closure_5 = tmp8[1];
  const items = [first1];
  const items1 = [first2];
  callback = React.useCallback((nativeEvent) => {
    if (0 === first1) {
      callback(nativeEvent.nativeEvent.layout.height);
    }
  }, items);
  let num = 0;
  const callback1 = React.useCallback((nativeEvent) => {
    if (0 === first2) {
      callback2(nativeEvent.nativeEvent.layout.height);
    }
  }, items1);
  if (tmp5) {
    num = first2;
  }
  sum = first1 + num;
  let obj = arg1(dependencyMap[6]);
  class S {
    constructor() {
      obj = {};
      obj2 = closure_0(closure_2[7]);
      obj.height = obj2.withSpring(closure_6, closure_8);
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[7]).withSpring, totalHeight: sum, EXPAND_SPRING: closure_8 };
  S.__closure = obj;
  S.__workletHash = 1072657539267;
  S.__initData = closure_10;
  const items2 = [first, tmp2[1]];
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style };
  const callback2 = React.useCallback(() => {
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
  const items4 = [sum(closure_5, { onLayout: callback, children: children({ onPress: callback2 }) }), sum(closure_5, { style: tmp.collapsibleContent, onLayout: callback1, children: collapsibleContent })];
  obj1.children = items4;
  obj.children = closure_7(importDefault(dependencyMap[6]).View, obj1);
  return sum(closure_5, obj);
};
