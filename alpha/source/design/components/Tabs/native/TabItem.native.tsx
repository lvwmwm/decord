// Module ID: 12477
// Function ID: 12478
// Name: TabItem
// Dependencies: [19, 17, 21, 5090, 5009, 575, 5632, 5619, 12478, 1376, 1114, 9469, 2]
// Exports: TabItem

// Module 12477 (TabItem)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5090 */;
import spring from "spring" /* 5632 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let Pressable;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function TabItemCount(arg0) {
  let activeIndex;
  let count;
  let index;
  let items1;
  let pressed;
  let variant;
  ({ index, activeIndex, pressed } = arg0);
  let sharedValue;
  ({ count, variant } = arg0);
  const tmp = closure_10();
  let obj = sharedValue(5090);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const layoutEffect = react.useLayoutEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj2 = sharedValue(5090);
  class T {
    constructor() {
      let items;
      let obj2;
      let obj4;
      let withSpring;
      const obj = { opacity: obj2.withSpring(sharedValue.get(), COUNT_SPRING_CONFIG), transform: items };
      obj2 = spring;
      const obj3 = { translateX: withSpring(obj4.interpolate(sharedValue.get(), [0, 1], [-10, 0]), COUNT_SPRING_CONFIG) };
      withSpring = spring.withSpring;
      spring;
      items = [obj3];
      obj4 = ReanimatedRexport2;
      return obj;
    }
  }
  let obj3 = { withSpring: sharedValue(5632).withSpring, countAnimationState: sharedValue, COUNT_SPRING_CONFIG, interpolate: sharedValue(5090).interpolate };
  T.__closure = obj3;
  T.__workletHash = 16666672974627;
  T.__initData = __initData2;
  let closure_3;
  const animatedStyle = obj2.useAnimatedStyle(T);
  let tmp7 = closure_11();
  if ("overlay" === variant) {
    tmp7 = closure_12();
  }
  closure_3 = tmp7;
  const fn = function c() {
    let obj2;
    let active = inactive.inactive;
    const tmp2 = pressed.get() >= 0;
    const value = pressed.get();
    const tmp4 = index;
    if (value === index) {
      active = tmp.pressed;
    } else if (tmp2) {
      active = tmp.inactive;
    } else if (tmp5 === tmp4) {
      active = tmp.active;
    }
    const obj = { color: obj2.withSpring(active, TEXT_SPRING_CONFIG, "animate-always") };
    obj2 = index(setItemDimensions[6]);
    return obj;
  };
  const tmp2Result = sharedValue(5090);
  let obj4 = { colors: tmp7, pressed, index, activeIndex, withSpring: tmp2(5632).withSpring, TEXT_SPRING_CONFIG };
  fn.__closure = obj4;
  fn.__workletHash = 11643476765161;
  fn.__initData = __initData;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(fn);
  const obj5 = { style: items1, children: closure_5(sharedValue(5619).Text, { animated: true, variant: "text-sm/medium", style: animatedStyle1, lineClamp: 1, children: count }) };
  items1 = [tmp.count, animatedStyle];
  const View = ReanimatedRexport.View;
  return closure_5(View, obj5);
}
({ View: closure_4, Pressable } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = ReanimatedRexport.createAnimatedComponent(Pressable);
const TEXT_SPRING_CONFIG = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
const COUNT_SPRING_CONFIG = { mass: 2, damping: 30, stiffness: 300, overshootClamping: true };
let createStyles = createStyles_mod;
let obj = { item: { flexShrink: 0, flexBasis: 0, paddingBottom: 14, flexDirection: "row", justifyContent: "center" }, count: obj2, indicatorDot: obj3 };
obj2 = { marginLeft: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: nativeDefault.space.PX_4, alignSelf: "center" };
let closure_10 = createStyles(obj);
createStyles = createStyles_mod;
let obj4 = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.TEXT_BRAND, pressed: nativeDefault.colors.TEXT_BRAND };
let closure_11 = createStyles.createStyleProperties(obj4);
createStyles = createStyles_mod;
let obj5 = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.TEXT_STRONG, pressed: nativeDefault.colors.TEXT_STRONG };
let closure_12 = createStyles.createStyleProperties(obj5);
const __initData = { code: "function TabItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};}" };
const __initData2 = { code: "function TabItemNativeTsx2(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}" };
const __initData3 = { code: "function TabItemNativeTsx3(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}" };
let result = size.fileFinishedImporting("design/components/Tabs/native/TabItem.native.tsx");

export function TabItem(arg0) {
  let count;
  let formatToPlainStringResult;
  let grow;
  let index;
  let indicatorDot;
  let itemCount;
  let items1;
  let label;
  let pressed;
  let state;
  let tmp3Result3;
  let variant;
  ({ label, count, indicatorDot, index } = arg0);
  ({ state, pressed, variant } = arg0);
  ({ itemCount, grow } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, count: 0, indicatorDot: 0, index: 0, itemCount: 0, state: 0, pressed: 0, grow: 0, variant: 0 }));
  const activeIndex = state.activeIndex;
  const setItemDimensions = state.setItemDimensions;
  let tmp2 = closure_10();
  let tmp4 = setItemDimensions;
  let obj = index(setItemDimensions[3]);
  const fn = function y() {
    const obj = { accessibilityState: { selected: activeIndex.get() === index } };
    ({ selected: activeIndex.get() === index });
    return obj;
  };
  fn.__closure = { activeIndex, index };
  fn.__workletHash = 11618929630200;
  fn.__initData = __initData3;
  let closure_3;
  const animatedProps = obj.useAnimatedProps(fn);
  let tmp6 = closure_11();
  if ("overlay" === variant) {
    tmp6 = closure_12();
  }
  closure_3 = tmp6;
  const fn2 = function c() {
    let obj2;
    let active = inactive.inactive;
    const tmp2 = pressed.get() >= 0;
    const value = pressed.get();
    const tmp4 = index;
    if (value === index) {
      active = tmp.pressed;
    } else if (tmp2) {
      active = tmp.inactive;
    } else if (tmp5 === tmp4) {
      active = tmp.active;
    }
    const obj = { color: obj2.withSpring(active, TEXT_SPRING_CONFIG, "animate-always") };
    obj2 = index(setItemDimensions[6]);
    return obj;
  };
  const tmp3Result = index(tmp4[3]);
  let obj2 = { colors: tmp6, pressed, index, activeIndex, withSpring: tmp3(tmp4[6]).withSpring, TEXT_SPRING_CONFIG };
  fn2.__closure = obj2;
  fn2.__workletHash = 11643476765161;
  fn2.__initData = __initData;
  const items = [tmp2.item, ];
  let num = 0;
  const animatedStyle = tmp3Result.useAnimatedStyle(fn2);
  const tmp8 = closure_6;
  const tmp9 = closure_7;
  if (grow) {
    num = 1;
  }
  items[1] = { flexGrow: num };
  const obj3 = {
    style: items,
    onLayout: function handleLayout(nativeEvent) {
      const obj = ReanimatedRexport2;
      obj.runOnUI(setItemDimensions)(index, nativeEvent.nativeEvent.layout);
    },
    accessibilityRole: "tab",
    accessibilityLabel: tmp3Result3.getTabItemA11yName(label, count, indicatorDot),
    accessibilityHint: formatToPlainStringResult,
    animatedProps,
    children: items1
  };
  const merged1 = Object.assign(merged);
  formatToPlainStringResult = undefined;
  tmp3Result3 = index(tmp4[8]);
  const tmp3Result4 = index(tmp4[9]);
  if (tmp3Result4.isAndroid()) {
    const intl = tmp3(tmp4[10]).intl;
    const obj4 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(tmp4[10]).t["4EsQA1"], obj4);
  }
  items1 = [closure_5(index(tmp4[7]).Text, { animated: true, variant: "text-sm/semibold", style: animatedStyle, lineClamp: 1, children: label }), , ];
  let tmp12Result = null;
  if (null != count) {
    const obj5 = { count, index, activeIndex, pressed, variant };
    tmp12Result = tmp12(TabItemCount, obj5);
  }
  items1[1] = tmp12Result;
  let tmp12Result2 = null;
  if (null != indicatorDot) {
    const obj6 = { style: tmp2.indicatorDot, children: closure_5(index(tmp4[11]).IndicatorDot, {}) };
    tmp12Result2 = tmp12(closure_4, obj6);
  }
  items1[2] = tmp12Result2;
  return tmp8(tmp9, obj3);
}
