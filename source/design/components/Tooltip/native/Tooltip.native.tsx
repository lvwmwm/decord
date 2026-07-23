// Module ID: 8566
// Function ID: 68075
// Name: Tooltip
// Dependencies: [57, 31, 27, 33, 4130, 689, 3991, 3834, 8567, 4542, 4126, 2]
// Exports: Tooltip

// Module 8566 (Tooltip)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { Pressable } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
_createForOfIteratorHelperLoose = { container: { position: "absolute", alignItems: "center" } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, maxWidth: 150, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.textContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { textAlign: "center" };
let obj1 = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.arrow = obj1;
_createForOfIteratorHelperLoose.bottomArrow = { borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 6 };
_createForOfIteratorHelperLoose.topArrow = { borderLeftWidth: 6, borderRightWidth: 6, borderBottomWidth: 6 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function TooltipNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
let closure_11 = { code: "function TooltipNativeTsx2(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{borderTopColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always'),borderBottomColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Tooltip/native/Tooltip.native.tsx");

export const Tooltip = function Tooltip(targetMeasurements) {
  let adjustmentX;
  let label;
  let onPress;
  let position;
  let surfaceMeasurements;
  let tooltipX;
  let tooltipY;
  ({ surfaceMeasurements, label, position, onPress } = targetMeasurements);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = sharedValue(token1[6]);
  let num = 0;
  sharedValue = obj.useSharedValue(0);
  let obj1 = sharedValue(token1[7]);
  token = obj1.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  let obj2 = sharedValue(token1[7]);
  token1 = obj2.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  let items = [sharedValue];
  let items1 = [sharedValue];
  let callback = React.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = React.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  const tmp7 = callback(React.useState(null), 2);
  const first = tmp7[0];
  callback = tmp7[1];
  ({ adjustmentX, tooltipX, tooltipY } = token(token1[8])(first, surfaceMeasurements, targetMeasurements.targetMeasurements, position, 4));
  let obj3 = sharedValue(token1[6]);
  class R {
    constructor() {
      obj = {};
      obj2 = outer1_0(outer1_2[9]);
      obj3 = outer1_0(outer1_2[6]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      obj.backgroundColor = obj2.withSpring(obj3.interpolateColor(closure_0.get(), [0, 1], items), outer1_8, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING: closure_8 };
  R.__closure = obj;
  R.__workletHash = 3664740129577;
  R.__initData = closure_10;
  const animatedStyle = obj3.useAnimatedStyle(R);
  let obj5 = sharedValue(token1[6]);
  class P {
    constructor() {
      obj = {};
      obj2 = outer1_0(outer1_2[9]);
      obj3 = outer1_0(outer1_2[6]);
      items = [, ];
      items[0] = closure_1;
      items[1] = closure_2;
      obj.borderTopColor = obj2.withSpring(obj3.interpolateColor(closure_0.get(), [0, 1], items), outer1_8, "animate-always");
      obj4 = outer1_0(outer1_2[9]);
      obj5 = outer1_0(outer1_2[6]);
      items1 = [, ];
      items1[0] = closure_1;
      items1[1] = closure_2;
      obj.borderBottomColor = obj4.withSpring(obj5.interpolateColor(closure_0.get(), [0, 1], items1), outer1_8, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: sharedValue(token1[9]).withSpring, interpolateColor: sharedValue(token1[6]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING: closure_8 };
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
    let obj4 = { left: -adjustmentX };
    items3[2] = obj4;
    items3[3] = animatedStyle1;
    obj3.style = items3;
    tmp14 = callback2(token(token1[6]).View, obj3);
  }
  const items4 = [tmp14, , ];
  obj5 = { style: items5 };
  items5 = [tmp.textContainer, animatedStyle];
  const obj6 = { style: tmp.text, variant: "text-xs/bold", color: "text-overlay-light", children: label };
  obj5.children = callback2(sharedValue(token1[10]).Text, obj6);
  items4[1] = callback2(token(token1[6]).View, obj5);
  let tmp18 = "top" === position;
  if (tmp18) {
    const obj7 = {};
    const items6 = [, , , ];
    ({ arrow: arr7[0], bottomArrow: arr7[1] } = tmp);
    const obj8 = { left: -adjustmentX };
    items6[2] = obj8;
    items6[3] = animatedStyle1;
    obj7.style = items6;
    tmp18 = callback2(token(token1[6]).View, obj7);
  }
  items4[2] = tmp18;
  obj1.children = items4;
  return closure_7(Pressable, obj1);
};
