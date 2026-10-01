// Module ID: 12275
// Function ID: 12276
// Name: TabsGradient
// Dependencies: [19, 1074, 21, 4566, 5293, 4836, 5280, 2]
// Exports: default

// Module 12275 (TabsGradient)
import Constants from "Constants" /* 1074 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const HorizontalGradient = Constants.HorizontalGradient;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const SPRING_CONFIG = { mass: 1, damping: 30, stiffness: 250 };
let closure_9 = createStyles.createStyles({ gradient: { width: 50, position: "absolute", top: 0, bottom: 0, zIndex: 100 }, left: { left: 0 }, right: { right: 0 } });
const __initData = { code: "function TabsGradientNativeTsx1(){const{withSpring,visible,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};}" };
const __initData2 = { code: "function TabsGradientNativeTsx2(){const{itemDimensions,state}=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;}" };
const __initData3 = { code: "function TabsGradientNativeTsx3(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;}" };
const __initData4 = { code: "function TabsGradientNativeTsx4(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;}" };
const result = size.fileFinishedImporting("design/components/Tabs/native/TabsGradient.native.tsx");

export default function TabsGradient(state) {
  let derivedValue1;
  let items1;
  let items2;
  let items3;
  function s() {
    const withSpring = derivedValue1(dependencyMap[6]).withSpring;
    let num = 0;
    derivedValue1(dependencyMap[6]);
    if (derivedValue2.get()) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, SPRING_CONFIG) };
    return obj;
  }
  state = state.state;
  const colors = state.colors;
  const scrollOffset = state.scrollOffset;
  const itemDimensions = state.itemDimensions;
  const pageWidth = state.pageWidth;
  let obj = derivedValue1(4566);
  const fn = function f() {
    const value = itemDimensions.get();
    return value.reduce((acc, width) => {
      let num;
      if (width != null) {
        num = width.width;
      }
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0) + value.length * state.itemSpacing;
  };
  fn.__closure = { itemDimensions, state };
  fn.__workletHash = 456613763143;
  fn.__initData = __initData2;
  const derivedValue = obj.useDerivedValue(fn);
  const fn2 = function y() {
    const tmp = scrollOffset.get() > 0 && derivedValue.get() > pageWidth;
    return tmp;
  };
  fn2.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
  fn2.__workletHash = 13237586618288;
  fn2.__initData = __initData3;
  const obj2 = derivedValue1(4566);
  derivedValue1 = obj2.useDerivedValue(fn2);
  const fn3 = s;
  const obj3 = derivedValue1(4566);
  fn3.__closure = { withSpring: derivedValue1(5280).withSpring, visible: derivedValue1, SPRING_CONFIG };
  fn3.__workletHash = 14959306962615;
  fn3.__initData = __initData;
  ({ withSpring: derivedValue1(5280).withSpring, visible: derivedValue1, SPRING_CONFIG });
  const animatedStyle = obj3.useAnimatedStyle(fn3);
  const obj5 = derivedValue1(4566);
  class W {
    constructor() {
      const value = scrollOffset.get();
      const tmp3 = value < derivedValue.get() - pageWidth && derivedValue.get() > tmp2;
      return tmp3;
    }
  }
  W.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
  W.__workletHash = 13808489302165;
  W.__initData = __initData4;
  const derivedValue2 = obj5.useDerivedValue(W);
  const fn4 = s;
  const obj6 = derivedValue1(4566);
  fn4.__closure = { withSpring: derivedValue1(5280).withSpring, visible: derivedValue2, SPRING_CONFIG };
  fn4.__workletHash = 14959306962615;
  fn4.__initData = __initData;
  ({ withSpring: derivedValue1(5280).withSpring, visible: derivedValue2, SPRING_CONFIG });
  const animatedStyle1 = obj6.useAnimatedStyle(fn4);
  const tmp6 = closure_9();
  let items = [colors];
  const obj9 = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors, style: items1, pointerEvents: "none" };
  items1 = [, , ];
  const obj8 = { children: items2 };
  ({ left: arr2[0], gradient: arr2[1] } = tmp6);
  items1[2] = animatedStyle;
  const memo = react.useMemo(() => {
    const items = [...colors];
    return items.reverse();
  }, items);
  items2 = [closure_4(LinearGradient, obj9), ];
  const obj10 = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors: memo, style: items3, pointerEvents: "none" };
  items3 = [, , ];
  ({ right: arr4[0], gradient: arr4[1] } = tmp6);
  items3[2] = animatedStyle1;
  items2[1] = closure_4(LinearGradient, obj10);
  return closure_6(closure_5, obj8);
};
