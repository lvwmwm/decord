// Module ID: 8800
// Function ID: 69489
// Name: SegmentedControlItem
// Dependencies: [31, 27, 33, 4130, 689, 8321, 3991, 4542, 477, 1212, 4126, 2]
// Exports: SegmentedControlItem

// Module 8800 (SegmentedControlItem)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Pressable: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let closure_8 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { borderRadius: importDefault(689).radii.lg };
  let num = 8;
  if ("experimental_Small" === arg0) {
    num = 4;
  }
  obj.paddingVertical = num;
  obj.flexDirection = "row";
  obj.justifyContent = "center";
  obj.item = obj;
  obj.label = { flexDirection: "column", alignItems: "center", gap: 8 };
  return obj;
});
_createForOfIteratorHelperLoose = { inactive: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, active: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, pressed: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyleProperties(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}" };
const result = require("jsxProd").fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlItem.native.tsx");

export const SegmentedControlItem = function SegmentedControlItem(index) {
  let icon;
  let itemCount;
  let label;
  let onPress;
  let onPressIn;
  let onPressOut;
  let style;
  index = index.index;
  const pressed = index.pressed;
  const variant = index.variant;
  const activeIndex = index.state.activeIndex;
  ({ label, itemCount, icon, onPress, onPressIn, onPressOut, style } = index);
  let tmp = callback(variant);
  const tmp2 = _createForOfIteratorHelperLoose();
  let closure_3 = tmp2;
  let obj = index(activeIndex[5]);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(activeIndex, (arg0) => ({ selected: arg0 === index }));
  let obj1 = index(activeIndex[6]);
  const fn = function b() {
    let active = tmp2.inactive;
    const value = pressed.get();
    if (value === index) {
      active = tmp2.pressed;
    } else if (tmp) {
      active = tmp2.inactive;
    } else if (tmp4 === tmp3) {
      active = tmp2.active;
    }
    const obj = {};
    tmp = pressed.get() >= 0;
    tmp3 = index;
    obj.color = index(activeIndex[7]).withSpring(active, outer1_7, "animate-always");
    return obj;
  };
  obj = { colors: tmp2, pressed, index, activeIndex, withSpring: index(activeIndex[7]).withSpring, SPRING_CONFIG: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 9369301431547;
  fn.__initData = closure_10;
  obj = { style: items, onPress, onPressIn, onPressOut, accessibilityRole: "tab", accessibilityState: derivedStateFromSharedValue };
  items = [tmp.item, style];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let formatToPlainStringResult;
  if (obj5.isAndroid()) {
    const intl = index(activeIndex[9]).intl;
    obj1 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(index(activeIndex[9]).t["4EsQA1"], obj1);
  }
  obj.accessibilityHint = formatToPlainStringResult;
  const obj2 = { style: tmp.label };
  const items1 = [icon, ];
  const obj3 = { animated: true, variant: "text-sm/semibold", style: animatedStyle, lineClamp: 1 };
  let num3;
  if ("experimental_Large" === variant) {
    num3 = 1.5;
  }
  obj3.maxFontSizeMultiplier = num3;
  obj3.children = label;
  items1[1] = closure_5(index(activeIndex[10]).Text, obj3);
  obj2.children = items1;
  obj.children = closure_6(closure_4, obj2);
  return closure_5(closure_3, obj);
};
