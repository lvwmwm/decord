// Module ID: 11639
// Function ID: 90331
// Name: useAnimatedTextStyle
// Dependencies: []
// Exports: TabItem

// Module 11639 (useAnimatedTextStyle)
function useAnimatedTextStyle(index) {
  index = index.index;
  const arg1 = index;
  const activeIndex = index.activeIndex;
  const importDefault = activeIndex;
  const pressed = index.pressed;
  const dependencyMap = pressed;
  let closure_3;
  let tmp = callback3();
  if ("gradient-background" === index.variant) {
    tmp = callback4();
  }
  closure_3 = tmp;
  let obj = arg1(dependencyMap[3]);
  const fn = function c() {
    let active = tmp.inactive;
    const tmp = pressed.get() >= 0;
    const value = pressed.get();
    if (value === index) {
      active = tmp.pressed;
    } else if (tmp) {
      active = tmp.inactive;
    } else if (tmp4 === index) {
      active = tmp.active;
    }
    const obj = { color: index(pressed[6]).withSpring(active, closure_7, "animate-always") };
    return obj;
  };
  obj = { colors: tmp, pressed, index, activeIndex, withSpring: arg1(dependencyMap[6]).withSpring, TEXT_SPRING_CONFIG: closure_7 };
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
  let obj = arg1(dependencyMap[3]);
  const sharedValue = obj.useSharedValue(0);
  const arg1 = sharedValue;
  const items = [sharedValue];
  const layoutEffect = React.useLayoutEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  const tmp = callback2();
  class T {
    constructor() {
      obj = {};
      obj2 = closure_0(closure_2[6]);
      obj.opacity = obj2.withSpring(closure_0.get(), closure_8);
      obj = {};
      obj4 = closure_0(closure_2[6]);
      obj5 = closure_0(closure_2[3]);
      items = [, ];
      items[0] = -10;
      items[1] = 0;
      obj.translateX = obj4.withSpring(obj5.interpolate(closure_0.get(), ["Text", "lc"], items), closure_8);
      items1 = [];
      items1[0] = obj;
      obj.transform = items1;
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[6]).withSpring, countAnimationState: sharedValue, COUNT_SPRING_CONFIG: closure_8, interpolate: arg1(dependencyMap[3]).interpolate };
  T.__closure = obj;
  T.__workletHash = 16666672974627;
  T.__initData = closure_13;
  const animatedStyle = arg1(dependencyMap[3]).useAnimatedStyle(T);
  const obj2 = arg1(dependencyMap[3]);
  obj = { style: items1 };
  const items1 = [tmp.count, animatedStyle];
  obj.children = callback(arg1(dependencyMap[7]).Text, { style: useAnimatedTextStyle({ index, activeIndex, pressed, variant }), children: count });
  return callback(importDefault(dependencyMap[3]).View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]).createAnimatedComponent(arg1(dependencyMap[1]).Pressable);
let closure_7 = {};
let closure_8 = {};
let obj1 = arg1(dependencyMap[4]);
let obj = { item: { "Bool(true)": null, "Bool(true)": "6ac82e47fbd4ea8331f749e0f8f68b4b", "Bool(true)": "voice_bar_bluetooth", "Bool(true)": "png", "Bool(true)": true } };
obj = { marginLeft: importDefault(dependencyMap[5]).space.PX_8 };
obj.count = obj;
let closure_9 = obj1.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[3]);
obj1 = { inactive: importDefault(dependencyMap[5]).colors.TEXT_MUTED, active: importDefault(dependencyMap[5]).colors.TEXT_BRAND, pressed: importDefault(dependencyMap[5]).colors.TEXT_BRAND };
let closure_10 = arg1(dependencyMap[4]).createStyleProperties(obj1);
const obj5 = arg1(dependencyMap[4]);
const obj7 = arg1(dependencyMap[4]);
let closure_11 = obj7.createStyleProperties({ inactive: importDefault(dependencyMap[5]).colors.TEXT_MUTED, active: importDefault(dependencyMap[5]).colors.TEXT_STRONG, pressed: importDefault(dependencyMap[5]).colors.TEXT_STRONG });
let closure_12 = { code: "function TabItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,TEXT_SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,TEXT_SPRING_CONFIG,'animate-always')};}" };
let closure_13 = { code: "function TabItemNativeTsx2(){const{withSpring,countAnimationState,COUNT_SPRING_CONFIG,interpolate}=this.__closure;return{opacity:withSpring(countAnimationState.get(),COUNT_SPRING_CONFIG),transform:[{translateX:withSpring(interpolate(countAnimationState.get(),[0,1],[-10,0]),COUNT_SPRING_CONFIG)}]};}" };
let closure_14 = { code: "function TabItemNativeTsx3(){const{activeIndex,index}=this.__closure;return{accessibilityState:{selected:activeIndex.get()===index}};}" };
const obj2 = { inactive: importDefault(dependencyMap[5]).colors.TEXT_MUTED, active: importDefault(dependencyMap[5]).colors.TEXT_STRONG, pressed: importDefault(dependencyMap[5]).colors.TEXT_STRONG };
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/components/Tabs/native/TabItem.native.tsx");

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
  const arg1 = index;
  ({ state, pressed, variant } = arg0);
  let obj = { -1940751007: null, 1402481848: 0.6, -939064316: "BounceOutRight", 996279043: null, -1402318250: 0.6, -765285269: "BounceOutLeft", -465873583: null, 933550700: 0.6 };
  ({ label, itemCount, grow } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const activeIndex = state.activeIndex;
  const importDefault = activeIndex;
  const dependencyMap = state.setItemDimensions;
  let obj1 = arg1(dependencyMap[3]);
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
    const intl = arg1(dependencyMap[9]).intl;
    obj1 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[9]).t.4EsQA1, obj1);
  }
  obj["accessibilityHint"] = formatToPlainStringResult;
  obj["animatedProps"] = animatedProps;
  const items1 = [callback(arg1(dependencyMap[7]).Text, { style: tmp5, children: label }), ];
  let tmp12 = null;
  if (null != count) {
    const obj2 = { count, index, activeIndex, pressed, variant };
    tmp12 = callback(TabItemCount, obj2);
  }
  items1[1] = tmp12;
  obj["children"] = items1;
  return tmp6(tmp7, obj);
};
