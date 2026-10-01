// Module ID: 9085
// Function ID: 9086
// Name: SegmentedControlItem
// Dependencies: [19, 17, 21, 4836, 576, 7715, 4566, 5280, 1364, 1115, 4832, 2]
// Exports: SegmentedControlItem

// Module 9085 (SegmentedControlItem)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Pressable: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const SPRING_CONFIG = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles((arg0) => {
  let num;
  const item = { borderRadius: nativeDefault.radii.lg, paddingVertical: num, flexDirection: "row", justifyContent: "center" };
  num = 8;
  if ("experimental_Small" === arg0) {
    num = 4;
  }
  return { item, label: { flexDirection: "column", alignItems: "center", gap: 8 } };
});
createStyles = createStyles_mod;
let obj = { inactive: nativeDefault.colors.TEXT_MUTED, active: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, pressed: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_9 = createStyles.createStyleProperties(obj);
const __initData = { code: "function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}" };
const result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlItem.native.tsx");

export const SegmentedControlItem = function SegmentedControlItem(index) {
  let formatToPlainStringResult;
  let icon;
  let itemCount;
  let items;
  let items1;
  let label;
  let num2;
  let obj7;
  let onPress;
  let onPressIn;
  let onPressOut;
  let style;
  let tmp10;
  let tmp11;
  index = index.index;
  const pressed = index.pressed;
  const variant = index.variant;
  const activeIndex = index.state.activeIndex;
  ({ label, itemCount, icon, onPress, onPressIn, onPressOut, style } = index);
  const tmp = closure_8(variant);
  let tmp2 = closure_9();
  const inactive = tmp2;
  let tmp4 = activeIndex;
  let obj = index(activeIndex[5]);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(activeIndex, (arg0) => ({ selected: arg0 === index }));
  let obj2 = index(activeIndex[6]);
  const fn = function b() {
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
    const obj = { color: obj2.withSpring(active, SPRING_CONFIG, "animate-always") };
    obj2 = spring;
    return obj;
  };
  fn.__closure = { colors: tmp2, pressed, index, activeIndex, withSpring: index(activeIndex[7]).withSpring, SPRING_CONFIG };
  fn.__workletHash = 9369301431547;
  fn.__initData = __initData;
  const obj4 = { style: items, onPress, onPressIn, onPressOut, accessibilityRole: "tab", accessibilityState: derivedStateFromSharedValue, accessibilityHint: formatToPlainStringResult, children: tmp10(tmp11, obj7) };
  items = [tmp.item, style];
  ({ colors: tmp2, pressed, index, activeIndex, withSpring: index(activeIndex[7]).withSpring, SPRING_CONFIG });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  formatToPlainStringResult = undefined;
  const obj5 = index(activeIndex[8]);
  const tmp8 = inactive;
  if (obj5.isAndroid()) {
    const intl = tmp3(tmp4[9]).intl;
    const obj6 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(tmp4[9]).t["4EsQA1"], obj6);
  }
  obj7 = { style: tmp.label, children: items1 };
  items1 = [icon, ];
  const obj8 = { animated: true, variant: "text-sm/semibold", style: animatedStyle, lineClamp: 1, maxFontSizeMultiplier: num2, children: label };
  num2 = undefined;
  const Text = tmp3(tmp4[10]).Text;
  tmp10 = closure_6;
  tmp11 = closure_4;
  if ("experimental_Large" === variant) {
    num2 = 1.5;
  }
  items1[1] = closure_5(Text, obj8);
  return closure_5(tmp8, obj4);
};
