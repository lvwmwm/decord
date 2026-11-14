// Module ID: 13263
// Function ID: 13264
// Name: TabItem
// Dependencies: [19, 17, 21, 1655, 5306, 575, 5939, 5929, 1708, 13264, 1380, 1113, 9487, 2]
// Exports: TabItem

// Module 13263 (TabItem)
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import spring_spring from "spring/spring" /* 5939 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const module_1655 = _mod1655;
let active, value;

let Pressable;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp2;
const Text_Text = tmp2(5929);
function useAnimatedTextStyle(arg0) {
  let activeIndex;
  let index;
  let pressed;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let variant;
  ({ index, activeIndex, pressed, variant } = arg0);
  let tmp = closure_11();
  if ("overlay" === variant) {
    tmp = closure_12();
  }
  let tmp2 = _mod1655;
  const items = [closure_13, tmp, pressed, index, activeIndex, , ];
  const useAnimatedStyle = tmp2.useAnimatedStyle;
  items[5] = spring_spring.withSpring;
  items[6] = closure_8;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class TabItemNativeTsx1 {
    constructor() {
      tmp = closure_0;
      active = closure_0.inactive;
      tmp2 = closure_1.get() >= 0;
      value = closure_1.get();
      tmp4 = closure_2;
      if (value === closure_2) {
        active = tmp.pressed;
      } else if (tmp2) {
        active = tmp.inactive;
      } else if (tmp5 === tmp4) {
        active = tmp.active;
      }
      obj = { color: closure_4(active, closure_5, "animate-always") };
      return obj;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
  TabItemNativeTsx1.__closure = items1;
  TabItemNativeTsx1.__workletHash = 3107632073840;
  TabItemNativeTsx1.__initData = tmp3;
  return useAnimatedStyle(TabItemNativeTsx1);
}
function TabItemCount(arg0) {
  let activeIndex;
  let count;
  let index;
  let items3;
  let pressed;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp7;
  let tmp8;
  let tmp9;
  let variant;
  ({ count, index, activeIndex, pressed, variant } = arg0);
  const tmp = closure_10();
  let obj = _mod1655;
  const sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const layoutEffect = react.useLayoutEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [closure_15, , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items1[1] = spring_spring.withSpring;
  items1[2] = sharedValue;
  items1[3] = closure_9;
  items1[4] = _mod1655.interpolate;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp7, tmp8, tmp9, tmp10, tmp11] = items1;
  class TabItemNativeTsx2 {
    constructor() {
      let items;
      const obj = { opacity: _undefined(_undefined2.get(), c2), transform: items };
      items = [{ translateX: _undefined(_undefined3(_undefined2.get(), [0, 1], [-10, 0]), c2) }];
      ({ translateX: _undefined(_undefined3(_undefined2.get(), [0, 1], [-10, 0]), c2) });
      return obj;
    }
  }
  const items2 = [tmp8, tmp9, tmp10, tmp11];
  TabItemNativeTsx2.__closure = items2;
  TabItemNativeTsx2.__workletHash = 15126685663834;
  TabItemNativeTsx2.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(TabItemNativeTsx2);
  const obj2 = { style: items3, children: hasOwnProperty(Text_Text.Text, { animated: true, variant: "body-sm/medium", style: tmp13, lineClamp: 1, children: count }) };
  items3 = [tmp.count, animatedStyle];
  tmp13 = useAnimatedTextStyle({ index, activeIndex, pressed, variant });
  const View = module_1655.View;
  return hasOwnProperty(View, obj2);
}
({ View: closure_4, Pressable } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = module_1655.createAnimatedComponent(Pressable);
let closure_8 = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let closure_9 = { mass: 2, damping: 30, stiffness: 300, overshootClamping: true };
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
let closure_13 = { code: "(function TabItemNativeTsx1(){let[colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG]=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};})" };
let closure_15 = { code: "(function TabItemNativeTsx2(){let[withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate]=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};})" };
let closure_17 = { code: "(function TabItemNativeTsx3(){let[activeIndex,index]=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};})" };
let result = size.fileFinishedImporting("design/components/Tabs/native/TabItem.native.tsx");

export function TabItem(arg0) {
  let IndicatorDot;
  let activeIndex;
  let c1;
  let count;
  let formatToPlainStringResult;
  let grow;
  let index;
  let indicatorDot;
  let itemCount;
  let items3;
  let label;
  let obj6;
  let pressed;
  let state;
  let tmp3Result;
  let tmp5;
  let tmp6;
  let tmp7;
  let variant;
  ({ label, count, indicatorDot, index } = arg0);
  ({ state, pressed, variant } = arg0);
  ({ itemCount, grow } = arg0);
  const merged = Object.assign(arg0, Object.assign({ label: 0, count: 0, indicatorDot: 0, index: 0, itemCount: 0, state: 0, pressed: 0, grow: 0, variant: 0 }));
  ({ activeIndex, setItemDimensions: c1 } = state);
  const tmp2 = closure_10();
  let obj = index(1655);
  const items = [closure_17, activeIndex, index];
  let c0;
  c1 = undefined;
  [tmp5, tmp6, tmp7] = items;
  class TabItemNativeTsx3 {
    constructor() {
      const obj = { accessibilityState: { selected: _undefined.get() === c1 } };
      ({ selected: _undefined.get() === c1 });
      return obj;
    }
  }
  const items1 = [tmp6, tmp7];
  TabItemNativeTsx3.__closure = items1;
  TabItemNativeTsx3.__workletHash = 5168414867841;
  TabItemNativeTsx3.__initData = tmp5;
  let num = 0;
  const animatedProps = obj.useAnimatedProps(TabItemNativeTsx3);
  const items2 = [tmp2.item, ];
  const tmp10 = closure_6;
  const tmp11 = closure_7;
  const tmp9 = useAnimatedTextStyle({ index, activeIndex, pressed, variant });
  if (grow) {
    num = 1;
  }
  const obj2 = {
    style: items2,
    onLayout: function handleLayout(nativeEvent) {
      const obj = _mod1708;
      obj.scheduleOnUI(c1, index, nativeEvent.nativeEvent.layout);
    },
    accessibilityRole: "tab",
    accessibilityLabel: tmp3Result.getTabItemA11yName(label, count, indicatorDot),
    accessibilityHint: formatToPlainStringResult,
    animatedProps,
    children: items3
  };
  items2[1] = { flexGrow: num };
  const merged1 = Object.assign(merged);
  formatToPlainStringResult = undefined;
  tmp3Result = index(13264);
  const tmp3Result2 = index(1380);
  if (tmp3Result2.isAndroid()) {
    const intl = tmp3(1113).intl;
    const obj3 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(1113).t["4EsQA1"], obj3);
  }
  items3 = [closure_5(index(5929).Text, { animated: true, variant: "body-sm/semibold", style: tmp9, lineClamp: 1, children: label }), , ];
  let tmp14Result = null;
  if (null != count) {
    const obj4 = { count, index, activeIndex, pressed, variant };
    tmp14Result = tmp14(TabItemCount, obj4);
  }
  items3[1] = tmp14Result;
  let tmp14Result2 = null;
  if (null != indicatorDot) {
    let str = "primary";
    const obj5 = { style: tmp2.indicatorDot, children: closure_5(IndicatorDot, obj6) };
    IndicatorDot = tmp3(9487).IndicatorDot;
    const tmp18 = closure_4;
    if ("overlay" === variant) {
      str = "neutral";
    }
    obj6 = { variant: str };
    tmp14Result2 = tmp14(tmp18, obj5);
  }
  items3[2] = tmp14Result2;
  return tmp10(tmp11, obj2);
}
