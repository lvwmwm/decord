// Module ID: 11794
// Function ID: 91487
// Name: useGradientAnimatedStyle
// Dependencies: [31, 653, 33, 3991, 4554, 4130, 4542, 2]
// Exports: default

// Module 11794 (useGradientAnimatedStyle)
import result from "result";
import { HorizontalGradient } from "ME";
import jsxProd from "jsxProd";
import LinearGradient from "LinearGradient";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function useGradientAnimatedStyle(visible) {
  const _require = visible;
  let obj = _require(3991);
  const fn = function s() {
    const obj = {};
    let num = 0;
    if (visible.get()) {
      num = 1;
    }
    obj.opacity = visible(outer1_1[6]).withSpring(num, outer1_8);
    return obj;
  };
  obj = { withSpring: _require(4542).withSpring, visible, SPRING_CONFIG: closure_8 };
  fn.__closure = obj;
  fn.__workletHash = 14959306962615;
  fn.__initData = closure_10;
  return obj.useAnimatedStyle(fn);
}
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let closure_8 = { mass: 1, damping: 30, stiffness: 250 };
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ gradient: { width: 50, position: "absolute", top: 0, bottom: 0, zIndex: 100 }, left: { left: 0 }, right: { right: 0 } });
let closure_10 = { code: "function TabsGradientNativeTsx1(){const{withSpring,visible,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};}" };
let closure_11 = { code: "function TabsGradientNativeTsx2(){const{itemDimensions,state}=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;}" };
let closure_12 = { code: "function TabsGradientNativeTsx3(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;}" };
let closure_13 = { code: "function TabsGradientNativeTsx4(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;}" };
const result = require("jsxProd").fileFinishedImporting("design/components/Tabs/native/TabsGradient.native.tsx");

export default function TabsGradient(state) {
  state = state.state;
  const colors = state.colors;
  const scrollOffset = state.scrollOffset;
  const itemDimensions = state.itemDimensions;
  const pageWidth = state.pageWidth;
  let obj = state(colors[3]);
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
  let obj1 = state(colors[3]);
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
  let tmp2 = useGradientAnimatedStyle(obj1.useDerivedValue(fn2));
  class W {
    constructor() {
      value = scrollOffset.get();
      tmp2 = value < c5.get() - pageWidth;
      if (tmp2) {
        tmp3 = c5;
        tmp4 = pageWidth;
        tmp2 = c5.get() > pageWidth;
      }
      return tmp2;
    }
  }
  W.__closure = { scrollOffset, totalItemWidth: derivedValue, pageWidth };
  W.__workletHash = 13808489302165;
  W.__initData = closure_13;
  const obj3 = state(colors[3]);
  const tmp4 = callback2();
  let items = [colors];
  obj = {};
  obj = { start: itemDimensions.START, end: itemDimensions.END, colors, style: items1, pointerEvents: "none" };
  items1 = [, , ];
  ({ left: arr2[0], gradient: arr2[1] } = tmp4);
  items1[2] = tmp2;
  const memo = scrollOffset.useMemo(() => {
    const items = [...colors];
    return items.reverse();
  }, items);
  const items2 = [pageWidth(LinearGradient, obj), ];
  obj1 = { start: itemDimensions.START, end: itemDimensions.END, colors: memo, style: items3, pointerEvents: "none" };
  items3 = [, , ];
  ({ right: arr4[0], gradient: arr4[1] } = tmp4);
  items3[2] = useGradientAnimatedStyle(state(colors[3]).useDerivedValue(W));
  items2[1] = pageWidth(LinearGradient, obj1);
  obj.children = items2;
  return callback(derivedValue, obj);
};
