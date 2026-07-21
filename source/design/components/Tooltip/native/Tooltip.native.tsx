// Module ID: 8558
// Function ID: 68023
// Name: Tooltip
// Dependencies: []
// Exports: Tooltip

// Module 8558 (Tooltip)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const Pressable = arg1(dependencyMap[2]).Pressable;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = {};
let obj = arg1(dependencyMap[4]);
obj = { container: {} };
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8, paddingVertical: importDefault(dependencyMap[5]).space.PX_4, borderRadius: importDefault(dependencyMap[5]).radii.sm, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
obj.textContainer = obj;
obj.text = { textAlign: "center" };
const tmp2 = arg1(dependencyMap[3]);
obj.arrow = { borderTopColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderBottomColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
obj.bottomArrow = { horizontal: "secondary", showsHorizontalScrollIndicator: "none", style: "absolute" };
obj.topArrow = { contentContainerStyle: "secondary", decelerationRate: "none", height: "absolute" };
let closure_9 = obj.createStyles(obj);
let closure_10 = { code: "function TooltipNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
let closure_11 = { code: "function TooltipNativeTsx2(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{borderTopColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always'),borderBottomColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const obj1 = { borderTopColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND, borderBottomColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BRAND };
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/components/Tooltip/native/Tooltip.native.tsx");

export const Tooltip = function Tooltip(targetMeasurements) {
  let adjustmentX;
  let label;
  let onPress;
  let position;
  let surfaceMeasurements;
  let tooltipX;
  let tooltipY;
  ({ surfaceMeasurements, label, position, onPress } = targetMeasurements);
  const tmp = callback3();
  let obj = arg1(dependencyMap[6]);
  let num = 0;
  const sharedValue = obj.useSharedValue(0);
  const arg1 = sharedValue;
  let obj1 = arg1(dependencyMap[7]);
  const token = obj1.useToken(importDefault(dependencyMap[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  const importDefault = token;
  let obj2 = arg1(dependencyMap[7]);
  const token1 = obj2.useToken(importDefault(dependencyMap[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  const dependencyMap = token1;
  const items = [sharedValue];
  const items1 = [sharedValue];
  let callback = React.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = React.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  const tmp7 = callback(React.useState(null), 2);
  const first = tmp7[0];
  callback = tmp7[1];
  ({ adjustmentX, tooltipX, tooltipY } = importDefault(dependencyMap[8])(first, surfaceMeasurements, targetMeasurements.targetMeasurements, position, 4));
  let obj3 = arg1(dependencyMap[6]);
  class R {
    constructor() {
      obj = {};
      obj2 = closure_0(closure_2[9]);
      obj3 = closure_0(closure_2[6]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      obj.backgroundColor = obj2.withSpring(obj3.interpolateColor(closure_0.get(), ["replace", "then"], items), closure_8, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[9]).withSpring, interpolateColor: arg1(dependencyMap[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING: closure_8 };
  R.__closure = obj;
  R.__workletHash = 3664740129577;
  R.__initData = closure_10;
  const animatedStyle = obj3.useAnimatedStyle(R);
  let obj5 = arg1(dependencyMap[6]);
  class P {
    constructor() {
      obj = {};
      obj2 = closure_0(closure_2[9]);
      obj3 = closure_0(closure_2[6]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      obj.borderTopColor = obj2.withSpring(obj3.interpolateColor(closure_0.get(), ["replace", "then"], items), closure_8, "animate-always");
      obj4 = closure_0(closure_2[9]);
      obj5 = closure_0(closure_2[6]);
      items1 = [, ];
      items1[0] = closure_1;
      items1[1] = closure_2;
      obj.borderBottomColor = obj4.withSpring(obj5.interpolateColor(closure_0.get(), ["replace", "then"], items1), closure_8, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[9]).withSpring, interpolateColor: arg1(dependencyMap[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING: closure_8 };
  P.__closure = obj;
  P.__workletHash = 11850141175626;
  P.__initData = closure_11;
  const animatedStyle1 = obj5.useAnimatedStyle(P);
  obj1 = {
    disabled: null == onPress,
    onPress,
    onLayout(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      callback({ width: nativeEvent.layout.width, height: nativeEvent.layout.height });
    },
    onPressIn: callback,
    onPressOut: callback1,
    accessibilityLabel: label,
    accessibilityRole: "button"
  };
  const items2 = [tmp.container, ];
  obj2 = {};
  if (null != first) {
    num = 1;
  }
  obj2.opacity = num;
  obj2.top = tooltipY;
  obj2.left = tooltipX;
  items2[1] = obj2;
  obj1.style = items2;
  let tmp14 = "bottom" === position;
  if (tmp14) {
    obj3 = {};
    const items3 = [, , , ];
    ({ arrow: arr4[0], topArrow: arr4[1] } = tmp);
    const obj4 = { left: -adjustmentX };
    items3[2] = obj4;
    items3[3] = animatedStyle1;
    obj3.style = items3;
    tmp14 = callback2(importDefault(dependencyMap[6]).View, obj3);
  }
  const items4 = [tmp14, , ];
  obj5 = { style: items5 };
  const items5 = [tmp.textContainer, animatedStyle];
  const obj6 = { delete: 369098752, dispatch: 16777216, raw: 882, style: tmp.text, children: label };
  obj5.children = callback2(arg1(dependencyMap[10]).Text, obj6);
  items4[1] = callback2(importDefault(dependencyMap[6]).View, obj5);
  let tmp18 = "top" === position;
  if (tmp18) {
    const obj7 = {};
    const items6 = [, , , ];
    ({ arrow: arr7[0], bottomArrow: arr7[1] } = tmp);
    const obj8 = { left: -adjustmentX };
    items6[2] = obj8;
    items6[3] = animatedStyle1;
    obj7.style = items6;
    tmp18 = callback2(importDefault(dependencyMap[6]).View, obj7);
  }
  items4[2] = tmp18;
  obj1.children = items4;
  return closure_7(Pressable, obj1);
};
