// Module ID: 9328
// Function ID: 9329
// Name: SegmentedControlItem
// Dependencies: [19, 17, 21, 5170, 575, 8948, 1652, 5793, 1377, 1113, 5783, 2]
// Exports: SegmentedControlItem

// Module 9328 (SegmentedControlItem)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5793 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 8948 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Pressable: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
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
let closure_10 = { code: "(function SegmentedControlItemNativeTsx1(){let[colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG]=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};})" };
const result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlItem.native.tsx");

export function SegmentedControlItem(index) {
  let formatToPlainStringResult;
  let icon;
  let itemCount;
  let items2;
  let items3;
  let label;
  let num2;
  let obj4;
  let onPress;
  let onPressIn;
  let onPressOut;
  let pressed;
  let style;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp18;
  let tmp19;
  let tmp7;
  let tmp8;
  let tmp9;
  index = index.index;
  const variant = index.variant;
  const activeIndex = index.state.activeIndex;
  ({ label, itemCount, icon, onPress, onPressIn, onPressOut, pressed, style } = index);
  const tmp = closure_8(variant);
  let tmp4 = dependencyMap;
  let tmp2 = closure_9();
  let obj = useStateFromSharedValue;
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(activeIndex, (arg0) => ({ selected: arg0 === index }));
  const items = [closure_10, tmp2, pressed, index, activeIndex, , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[5] = spring_spring.withSpring;
  items[6] = closure_7;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
  class SegmentedControlItemNativeTsx1 {
    constructor() {
      let active = _undefined.inactive;
      const tmp2 = _undefined2.get() >= 0;
      const value = _undefined2.get();
      const tmp4 = c2;
      if (value === c2) {
        active = tmp.pressed;
      } else if (tmp2) {
        active = tmp.inactive;
      } else if (tmp5 === tmp4) {
        active = tmp.active;
      }
      const obj = { color: _undefined3(active, c5, "animate-always") };
      return obj;
    }
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  SegmentedControlItemNativeTsx1.__closure = items1;
  SegmentedControlItemNativeTsx1.__workletHash = 3234787560194;
  SegmentedControlItemNativeTsx1.__initData = tmp7;
  const obj2 = { style: items2, onPress, onPressIn, onPressOut, accessibilityRole: "tab", accessibilityState: derivedStateFromSharedValue, accessibilityHint: formatToPlainStringResult, children: tmp18(tmp19, obj4) };
  items2 = [tmp.item, style];
  const animatedStyle = useAnimatedStyle(SegmentedControlItemNativeTsx1);
  formatToPlainStringResult = undefined;
  const tmp16 = _false;
  const tmp3Result = PlatformUtils;
  if (tmp3Result.isAndroid()) {
    const intl = tmp3(1113).intl;
    const obj3 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(1113).t["4EsQA1"], obj3);
  }
  obj4 = { style: tmp.label, children: items3 };
  items3 = [icon, ];
  const obj5 = { animated: true, variant: "body-sm/semibold", style: animatedStyle, lineClamp: 1, maxFontSizeMultiplier: num2, children: label };
  num2 = undefined;
  const Text = tmp3(5783).Text;
  tmp18 = metroRequire;
  tmp19 = React3;
  if ("experimental_Large" === variant) {
    num2 = 1.5;
  }
  items3[1] = hasOwnProperty(Text, obj5);
  return hasOwnProperty(tmp16, obj2);
}
