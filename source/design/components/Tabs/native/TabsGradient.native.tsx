// Module ID: 11783
// Function ID: 91413
// Name: useGradientAnimatedStyle
// Dependencies: []
// Exports: default

// Module 11783 (useGradientAnimatedStyle)
function useGradientAnimatedStyle(visible) {
  const arg1 = visible;
  let obj = arg1(dependencyMap[3]);
  const fn = function s() {
    const obj = {};
    let num = 0;
    if (arg0.get()) {
      num = 1;
    }
    obj.opacity = arg0(closure_1[6]).withSpring(num, closure_8);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[6]).withSpring, visible, SPRING_CONFIG: closure_8 };
  fn.__closure = obj;
  fn.__workletHash = 14959306962615;
  fn.__initData = closure_10;
  return obj.useAnimatedStyle(fn);
}
let closure_2 = importAll(dependencyMap[0]);
const HorizontalGradient = arg1(dependencyMap[1]).HorizontalGradient;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]).createAnimatedComponent(importDefault(dependencyMap[4]));
let closure_8 = { <string:1634937736>: "center", <string:1733120470>: 14, <string:1453996748>: "2026-04-channel-pinning" };
const importDefaultResult = importDefault(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ gradient: { flexDirection: "user", columnGap: 45, flexWrap: 45, marginTop: "relative", flexDirection: "100%" }, left: { left: 0 }, right: { right: 0 } });
let closure_10 = { code: "function TabsGradientNativeTsx1(){const{withSpring,visible,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};}" };
let closure_11 = { code: "function TabsGradientNativeTsx2(){const{itemDimensions,state}=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;}" };
let closure_12 = { code: "function TabsGradientNativeTsx3(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;}" };
let closure_13 = { code: "function TabsGradientNativeTsx4(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;}" };
const obj2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Tabs/native/TabsGradient.native.tsx");

export default function TabsGradient(state) {
  state = state.state;
  const arg1 = state;
  const colors = state.colors;
  const dependencyMap = colors;
  const scrollOffset = state.scrollOffset;
  const React = scrollOffset;
  const itemDimensions = state.itemDimensions;
  const HorizontalGradient = itemDimensions;
  const pageWidth = state.pageWidth;
  let obj = arg1(dependencyMap[3]);
  const fn = function f() {
    const value = itemDimensions.get();
    return value.reduce((arg0, width) => {
      width = undefined;
      if (null != width) {
        width = width.width;
      }
      let num = 0;
      if (null != width) {
        num = width;
      }
      return arg0 + num;
    }, 0) + value.length * state.itemSpacing;
  };
  fn.__closure = { itemDimensions, state };
  fn.__workletHash = 456613763143;
  fn.__initData = closure_11;
  const derivedValue = obj.useDerivedValue(fn);
  let obj1 = arg1(dependencyMap[3]);
  const fn2 = function y() {
    let tmp = scrollOffset.get() > 0;
    if (tmp) {
      tmp = derivedValue.get() > pageWidth;
    }
    return tmp;
  };
  fn2.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
  fn2.__workletHash = 13237586618288;
  fn2.__initData = closure_12;
  const tmp2 = useGradientAnimatedStyle(obj1.useDerivedValue(fn2));
  class W {
    constructor() {
      value = scrollOffset.get();
      tmp2 = value < closure_5.get() - pageWidth;
      if (tmp2) {
        tmp3 = closure_5;
        tmp4 = pageWidth;
        tmp2 = closure_5.get() > pageWidth;
      }
      return tmp2;
    }
  }
  W.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
  W.__workletHash = 13808489302165;
  W.__initData = closure_13;
  const obj3 = arg1(dependencyMap[3]);
  const tmp4 = callback2();
  const items = [colors];
  obj = {};
  obj = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors, style: items1, pointerEvents: "none" };
  const items1 = [, , ];
  ({ left: arr2[0], gradient: arr2[1] } = tmp4);
  items1[2] = tmp2;
  const memo = React.useMemo(() => {
    const items = [...closure_1];
    return items.reverse();
  }, items);
  const items2 = [pageWidth(closure_7, obj), ];
  obj1 = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors: memo, style: items3, pointerEvents: "none" };
  const items3 = [, , ];
  ({ right: arr4[0], gradient: arr4[1] } = tmp4);
  items3[2] = useGradientAnimatedStyle(arg1(dependencyMap[3]).useDerivedValue(W));
  items2[1] = pageWidth(closure_7, obj1);
  obj.children = items2;
  return callback(derivedValue, obj);
};
