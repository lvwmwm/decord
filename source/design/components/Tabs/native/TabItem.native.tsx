// Module ID: 11650
// Function ID: 90405
// Name: useAnimatedTextStyle
// Dependencies: [31, 27, 33, 3991, 4130, 689, 4542, 4126, 477, 1212, 2]
// Exports: TabItem

// Module 11650 (useAnimatedTextStyle)
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_4;
let closure_5;
const require = arg1;
function useAnimatedTextStyle(index) {
  index = index.index;
  const activeIndex = index.activeIndex;
  const pressed = index.pressed;
  let c3;
  let tmp = _createForOfIteratorHelperLoose();
  if ("gradient-background" === index.variant) {
    tmp = callback3();
  }
  c3 = tmp;
  let obj = index(pressed[3]);
  const fn = function c() {
    let active = _undefined.inactive;
    const value = pressed.get();
    if (value === index) {
      active = _undefined.pressed;
    } else if (tmp) {
      active = _undefined.inactive;
    } else if (tmp4 === tmp3) {
      active = _undefined.active;
    }
    const obj = {};
    tmp = pressed.get() >= 0;
    tmp3 = index;
    obj.color = index(pressed[6]).withSpring(active, outer1_7, "animate-always");
    return obj;
  };
  obj = { colors: tmp, pressed, index, activeIndex, withSpring: index(pressed[6]).withSpring, TEXT_SPRING_CONFIG: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 11643476765161;
  fn.__initData = closure_12;
  return obj.useAnimatedStyle(fn);
}
function TabItemCount(arg0) {
  let activeIndex;
  let count;
  let index;
  let pressed;
  let variant;
  ({ count, index, activeIndex, pressed, variant } = arg0);
  let obj = sharedValue(3991);
  sharedValue = obj.useSharedValue(0);
  let items = [sharedValue];
  const layoutEffect = React.useLayoutEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj1 = sharedValue(3991);
  class T {
    constructor() {
      obj = {};
      obj2 = outer1_0(outer1_2[6]);
      obj.opacity = obj2.withSpring(closure_0.get(), outer1_8);
      obj = {};
      obj4 = outer1_0(outer1_2[6]);
      obj5 = outer1_0(outer1_2[3]);
      items = [, ];
      items[0] = -10;
      items[1] = 0;
      obj.translateX = obj4.withSpring(obj5.interpolate(closure_0.get(), [0, 1], items), outer1_8);
      items1 = [];
      items1[0] = obj;
      obj.transform = items1;
      return obj;
    }
  }
  obj = { withSpring: sharedValue(4542).withSpring, countAnimationState: sharedValue, COUNT_SPRING_CONFIG: closure_8, interpolate: sharedValue(3991).interpolate };
  T.__closure = obj;
  T.__workletHash = 16666672974627;
  T.__initData = closure_13;
  const animatedStyle = obj1.useAnimatedStyle(T);
  const tmp = callback2();
  obj = { style: items1 };
  items1 = [tmp.count, animatedStyle];
  obj1 = { animated: true, variant: "text-sm/medium", style: useAnimatedTextStyle({ index, activeIndex, pressed, variant }), lineClamp: 1, children: count };
  obj.children = callback(sharedValue(4126).Text, obj1);
  return callback(importDefault(3991).View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = require("module_3991").createAnimatedComponent(require("get ActivityIndicator").Pressable);
let closure_7 = { mass: 0.3, damping: 13, stiffness: 250, overshootClamping: true };
let closure_8 = { mass: 2, damping: 30, stiffness: 300, overshootClamping: true };
let obj = { item: { flexShrink: 0, flexBasis: 0, paddingBottom: 14, flexDirection: "row", justifyContent: "center" } };
obj = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.count = obj;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
_createForOfIteratorHelperLoose = { inactive: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, active: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND, pressed: require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyleProperties(_createForOfIteratorHelperLoose);
let closure_11 = _createForOfIteratorHelperLoose.createStyleProperties({ inactive: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, active: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG, pressed: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG });
let closure_12 = { code: "function TabItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};}" };
let closure_13 = { code: "function TabItemNativeTsx2(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}" };
let closure_14 = { code: "function TabItemNativeTsx3(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}" };
let obj2 = { inactive: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, active: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG, pressed: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG };
let result = require("jsxProd").fileFinishedImporting("design/components/Tabs/native/TabItem.native.tsx");

export const TabItem = function TabItem(arg0) {
  let count;
  let grow;
  let index;
  let itemCount;
  let label;
  let pressed;
  let state;
  let variant;
  ({ count, index } = arg0);
  ({ state, pressed, variant } = arg0);
  let obj = { label: 0, count: 0, index: 0, itemCount: 0, state: 0, pressed: 0, grow: 0, variant: 0 };
  ({ label, itemCount, grow } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const activeIndex = state.activeIndex;
  const setItemDimensions = state.setItemDimensions;
  let obj1 = index(setItemDimensions[3]);
  const fn = function f() {
    let obj = {};
    obj = { selected: activeIndex.get() === index };
    obj.accessibilityState = obj;
    return obj;
  };
  fn.__closure = { activeIndex, index };
  fn.__workletHash = 11618929630200;
  fn.__initData = closure_14;
  const animatedProps = obj1.useAnimatedProps(fn);
  obj = {};
  const items = [callback2().item, ];
  obj = {};
  let num = 0;
  const tmp3 = callback2();
  if (grow) {
    num = 1;
  }
  obj.flexGrow = num;
  items[1] = obj;
  obj.style = items;
  const merged1 = Object.assign(merged);
  obj["onLayout"] = function onLayout(nativeEvent) {
    index(setItemDimensions[3]).runOnUI(setItemDimensions)(index, nativeEvent.nativeEvent.layout);
  };
  obj["accessibilityRole"] = "tab";
  const tmp5 = useAnimatedTextStyle({ index, activeIndex, pressed, variant });
  const tmp6 = closure_5;
  const tmp7 = closure_6;
  let formatToPlainStringResult;
  if (obj5.isAndroid()) {
    const intl = index(setItemDimensions[9]).intl;
    obj1 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(index(setItemDimensions[9]).t["4EsQA1"], obj1);
  }
  obj["accessibilityHint"] = formatToPlainStringResult;
  obj["animatedProps"] = animatedProps;
  const obj2 = { animated: true, variant: "text-sm/semibold", style: tmp5, lineClamp: 1, children: label };
  const items1 = [callback(index(setItemDimensions[7]).Text, obj2), ];
  let tmp12 = null;
  if (null != count) {
    const obj3 = { count, index, activeIndex, pressed, variant };
    tmp12 = callback(TabItemCount, obj3);
  }
  items1[1] = tmp12;
  obj["children"] = items1;
  return tmp6(tmp7, obj);
};
