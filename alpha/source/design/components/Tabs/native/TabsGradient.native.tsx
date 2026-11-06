// Module ID: 14574
// Function ID: 14575
// Name: TabsGradient
// Dependencies: [19, 1072, 21, 1652, 5745, 5170, 5791, 2]
// Exports: default

// Module 14574 (TabsGradient)
import Constants from "Constants" /* 1072 */;
import _mod1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5745 */;
import spring_spring from "spring/spring" /* 5791 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const module_1652 = _mod1652;

let closure_4;
let hasOwnProperty;
let metroRequire;
function useGradientAnimatedStyle(tmpResult) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp = _mod1652;
  const items = [closure_10, , , ];
  const useAnimatedStyle = tmp.useAnimatedStyle;
  items[1] = spring_spring.withSpring;
  items[2] = tmpResult;
  items[3] = closure_8;
  let c0;
  let c1;
  let c2;
  [tmp2, tmp3, tmp4, tmp5] = items;
  class TabsGradientNativeTsx1 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get()) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items1 = [tmp3, tmp4, tmp5];
  TabsGradientNativeTsx1.__closure = items1;
  TabsGradientNativeTsx1.__workletHash = 15771419844398;
  TabsGradientNativeTsx1.__initData = tmp2;
  return useAnimatedStyle(TabsGradientNativeTsx1);
}
const HorizontalGradient = Constants.HorizontalGradient;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
let closure_8 = { mass: 1, damping: 30, stiffness: 250 };
let closure_9 = createStyles.createStyles({ gradient: { width: 50, position: "absolute", top: 0, bottom: 0, zIndex: 100 }, left: { left: 0 }, right: { right: 0 } });
let closure_10 = { code: "(function TabsGradientNativeTsx1(){let[withSpring,visible,SPRING_CONFIG]=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};})" };
let closure_12 = { code: "(function TabsGradientNativeTsx2(){let[itemDimensions,state]=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;})" };
let closure_13 = { code: "(function TabsGradientNativeTsx3(){let[scrollOffset,totalItemWidth,pageWidth]=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;})" };
let closure_14 = { code: "(function TabsGradientNativeTsx4(){let[scrollOffset,totalItemWidth,pageWidth]=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;})" };
const result = size.fileFinishedImporting("design/components/Tabs/native/TabsGradient.native.tsx");

export default function TabsGradient(arg0) {
  let colors;
  let items7;
  let items8;
  let items9;
  let pageWidth;
  let scrollOffset;
  let state;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ state, colors } = arg0);
  ({ scrollOffset, pageWidth } = state);
  let tmp = require;
  const tmp2 = dependencyMap;
  const itemDimensions = state.itemDimensions;
  let items = [closure_12, itemDimensions, state];
  let c0;
  let c1;
  [tmp3, tmp4, tmp5] = items;
  const obj = _mod1652;
  class TabsGradientNativeTsx2 {
    constructor() {
      value = closure_0.get();
      return value.reduce((acc, width) => {
        let num;
        if (width != null) {
          num = width.width;
        }
        if (num == null) {
          num = 0;
        }
        return acc + num;
      }, 0) + value.length * closure_1.itemSpacing;
    }
  }
  const items1 = [tmp4, tmp5];
  TabsGradientNativeTsx2.__closure = items1;
  TabsGradientNativeTsx2.__workletHash = 829705063742;
  TabsGradientNativeTsx2.__initData = tmp3;
  const derivedValue = obj.useDerivedValue(TabsGradientNativeTsx2);
  const items2 = [closure_13, scrollOffset, derivedValue, pageWidth];
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp7, tmp8, tmp9, tmp10] = items2;
  const tmpResult = _mod1652;
  class TabsGradientNativeTsx3 {
    constructor() {
      const tmp = _undefined.get() > 0 && _undefined2.get() > c2;
      return tmp;
    }
  }
  const items3 = [tmp8, tmp9, tmp10];
  TabsGradientNativeTsx3.__closure = items3;
  TabsGradientNativeTsx3.__workletHash = 2315316338857;
  TabsGradientNativeTsx3.__initData = tmp7;
  const items4 = [closure_14, scrollOffset, derivedValue, pageWidth];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items4;
  const tmp12 = useGradientAnimatedStyle(tmpResult.useDerivedValue(TabsGradientNativeTsx3));
  const tmp11 = useGradientAnimatedStyle;
  const tmpResult2 = _mod1652;
  class TabsGradientNativeTsx4 {
    constructor() {
      const value = _undefined.get();
      const tmp3 = value < _undefined2.get() - c2 && _undefined2.get() > tmp2;
      return tmp3;
    }
  }
  const items5 = [tmp14, tmp15, tmp16];
  TabsGradientNativeTsx4.__closure = items5;
  TabsGradientNativeTsx4.__workletHash = 2346791353228;
  TabsGradientNativeTsx4.__initData = tmp13;
  const tmp11Result = tmp11(tmpResult2.useDerivedValue(TabsGradientNativeTsx4));
  const tmp18 = closure_9();
  const items6 = [colors];
  const obj3 = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors, style: items7, pointerEvents: "none" };
  items7 = [, , ];
  const obj2 = { children: items8 };
  ({ left: arr8[0], gradient: arr8[1] } = tmp18);
  items7[2] = tmp12;
  const memo = react.useMemo(() => {
    const items = [...colors];
    return items.reverse();
  }, items6);
  items8 = [React3(LinearGradient, obj3), ];
  const obj4 = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors: memo, style: items9, pointerEvents: "none" };
  items9 = [, , ];
  ({ right: arr10[0], gradient: arr10[1] } = tmp18);
  items9[2] = tmp11Result;
  items8[1] = React3(LinearGradient, obj4);
  return metroRequire(hasOwnProperty, obj2);
};
