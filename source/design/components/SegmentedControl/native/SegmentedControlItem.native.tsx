// Module ID: 8753
// Function ID: 69210
// Name: SegmentedControlItem
// Dependencies: []
// Exports: SegmentedControlItem

// Module 8753 (SegmentedControlItem)
importAll(dependencyMap[0]);
({ Pressable: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = {};
let obj = arg1(dependencyMap[3]);
let closure_8 = obj.createStyles((arg0) => {
  let obj = {};
  obj = { borderRadius: importDefault(dependencyMap[4]).radii.lg };
  let num = 8;
  if ("experimental_Small" === arg0) {
    num = 4;
  }
  obj.paddingVertical = num;
  obj.flexDirection = "row";
  obj.justifyContent = "center";
  obj.item = obj;
  obj.label = { <string:3461472865>: "Layer 1", <string:1447977218>: 1, <string:1640807382>: null };
  return obj;
});
const tmp4 = arg1(dependencyMap[2]);
obj = { inactive: importDefault(dependencyMap[4]).colors.TEXT_MUTED, active: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_ACTIVE, pressed: importDefault(dependencyMap[4]).colors.INTERACTIVE_TEXT_ACTIVE };
let closure_9 = arg1(dependencyMap[3]).createStyleProperties(obj);
let closure_10 = { code: "function SegmentedControlItemNativeTsx1(){const{colors,pressed,index,activeIndex,withSpring,SPRING_CONFIG}=this.__closure;let color=colors.inactive;const isPressActive=pressed.get()>=0;const isPressed=pressed.get()===index;const isActive=Math.round(activeIndex.get())===index;if(isPressed){color=colors.pressed;}else if(isPressActive){color=colors.inactive;}else if(isActive){color=colors.active;}return{color:withSpring(color,SPRING_CONFIG,'animate-always')};}" };
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControlItem.native.tsx");

export const SegmentedControlItem = function SegmentedControlItem(index) {
  let icon;
  let itemCount;
  let label;
  let onPress;
  let onPressIn;
  let onPressOut;
  let style;
  index = index.index;
  const arg1 = index;
  const pressed = index.pressed;
  const importDefault = pressed;
  const variant = index.variant;
  const activeIndex = index.state.activeIndex;
  const dependencyMap = activeIndex;
  ({ label, itemCount, icon, onPress, onPressIn, onPressOut, style } = index);
  const tmp = callback(variant);
  const tmp2 = callback2();
  let obj = arg1(dependencyMap[5]);
  const derivedStateFromSharedValue = obj.useDerivedStateFromSharedValue(activeIndex, (arg0) => ({ selected: arg0 === index }));
  let obj1 = arg1(dependencyMap[6]);
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
    const tmp = pressed.get() >= 0;
    const tmp3 = index;
    obj.color = index(activeIndex[7]).withSpring(active, closure_7, "animate-always");
    return obj;
  };
  obj = { colors: tmp2, pressed, index, activeIndex, withSpring: arg1(dependencyMap[7]).withSpring, SPRING_CONFIG: closure_7 };
  fn.__closure = obj;
  fn.__workletHash = 9369301431547;
  fn.__initData = closure_10;
  obj = { style: items, onPress, onPressIn, onPressOut, accessibilityRole: "tab", accessibilityState: derivedStateFromSharedValue };
  const items = [tmp.item, style];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let formatToPlainStringResult;
  if (obj5.isAndroid()) {
    const intl = arg1(dependencyMap[9]).intl;
    obj1 = { position: index + 1, tabCount: itemCount };
    formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[9]).t.4EsQA1, obj1);
  }
  obj.accessibilityHint = formatToPlainStringResult;
  const obj2 = { style: tmp.label };
  const items1 = [icon, ];
  const obj3 = { style: animatedStyle };
  let num3;
  if ("experimental_Large" === variant) {
    num3 = 1.5;
  }
  obj3.maxFontSizeMultiplier = num3;
  obj3.children = label;
  items1[1] = closure_5(arg1(dependencyMap[10]).Text, obj3);
  obj2.children = items1;
  obj.children = closure_6(closure_4, obj2);
  return closure_5(tmp2, obj);
};
