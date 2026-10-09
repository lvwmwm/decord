// Module ID: 9416
// Function ID: 9417
// Name: Tooltip
// Dependencies: [32, 19, 17, 21, 5091, 587, 558, 576, 4811, 4779, 9417, 5375, 5087, 2]

// Module 9416 (Tooltip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import spring from "spring" /* 5375 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const Pressable = react_native.Pressable;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const ON_PRESS_SPRING = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", alignItems: "center" }, horizontalContainer: { flexDirection: "row" }, textContainer: obj2, text: { textAlign: "center" }, arrow: size, bottomArrow: { borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 6 }, topArrow: { borderLeftWidth: 6, borderRightWidth: 6, borderBottomWidth: 6 }, leftArrow: { borderTopWidth: 6, borderBottomWidth: 6, borderRightWidth: 6 }, rightArrow: { borderTopWidth: 6, borderBottomWidth: 6, borderLeftWidth: 6 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, maxWidth: 150, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
size = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_9 = createStyles(obj);
const __initData = { code: "function TooltipNativeTsx1(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,\"animate-always\")};}" };
const __initData2 = { code: "function TooltipNativeTsx2(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING,isHorizontal}=this.__closure;const color=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,\"animate-always\");return{borderTopColor:isHorizontal?\"transparent\":color,borderBottomColor:isHorizontal?\"transparent\":color,borderLeftColor:isHorizontal?color:\"transparent\",borderRightColor:isHorizontal?color:\"transparent\"};}" };
const __initData3 = { code: "function TooltipNativeTsx3(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const __initData4 = { code: "function TooltipNativeTsx4(){const{withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING,isHorizontal}=this.__closure;const color=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{borderTopColor:isHorizontal?'transparent':color,borderBottomColor:isHorizontal?'transparent':color,borderLeftColor:isHorizontal?color:'transparent',borderRightColor:isHorizontal?color:'transparent'};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function Tooltip(arg0) {
  let adjustmentX;
  let adjustmentY;
  let closure_4;
  let label;
  let onPress;
  let position;
  let sharedValue;
  let surfaceMeasurements;
  let targetMeasurements;
  let tmp12;
  let token;
  let token1;
  let tooltipX;
  let tooltipY;
  const tmp = sharedValue;
  let obj = sharedValue(token1[7]);
  const cResult = obj.c(48);
  ({ targetMeasurements, surfaceMeasurements, label, position, onPress } = arg0);
  let tmp4 = closure_9();
  let obj2 = sharedValue(token1[8]);
  sharedValue = obj2.useSharedValue(0);
  const obj3 = sharedValue(token1[9]);
  token = obj3.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  const obj4 = sharedValue(token1[9]);
  token1 = obj4.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  if (cResult[0] !== sharedValue) {
    const fn = function h() {
      const result = sharedValue.set(1);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
  }
  if (cResult[2] !== sharedValue) {
    class T {
      constructor() {
        const result = sharedValue.set(0);
      }
    }
    cResult[2] = sharedValue;
    cResult[3] = T;
  } else {
    class T {
      constructor() {
        const result = sharedValue.set(0);
      }
    }
  }
  const tmp11 = _slicedToArray(react.useState(null), 2);
  [tmp12, _slicedToArray] = tmp11;
  ({ adjustmentX, adjustmentY, tooltipX, tooltipY } = token(token1[10])(tmp12, surfaceMeasurements, targetMeasurements, position, 4));
  let tmp15 = "left" === position;
  token(token1[10])(tmp12, surfaceMeasurements, targetMeasurements, position, 4);
  if (!tmp15) {
    class T {
      constructor() {
        const result = sharedValue.set(0);
      }
    }
    tmp15 = "right" === position;
  }
  react = tmp15;
  const tmpResult = tmp(token1[8]);
  class O {
    constructor() {
      let items;
      let obj2;
      let withSpring;
      const obj = { backgroundColor: withSpring(obj2.interpolateColor(sharedValue.get(), [0, 1], items), ON_PRESS_SPRING, "animate-always") };
      withSpring = spring.withSpring;
      spring;
      items = [token, token1];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  O.__closure = { withSpring: tmp(token1[11]).withSpring, interpolateColor: tmp(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  O.__workletHash = 15323606626185;
  O.__initData = __initData;
  ({ withSpring: tmp(token1[11]).withSpring, interpolateColor: tmp(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING });
  const animatedStyle = tmpResult.useAnimatedStyle(O);
  const fn2 = function v() {
    let tmp4;
    let tmp5;
    const withSpring = spring.withSpring;
    spring;
    const items = [token, token1];
    const obj = ReanimatedRexport;
    const withSpringResult = withSpring(obj.interpolateColor(sharedValue.get(), [0, 1], items), ON_PRESS_SPRING, "animate-always");
    let str = "transparent";
    let str2 = "transparent";
    if (!closure_4) {
      str2 = withSpringResult;
    }
    const obj2 = { borderTopColor: str2, borderBottomColor: tmp4, borderLeftColor: tmp5, borderRightColor: str };
    tmp4 = str;
    if (!closure_4) {
      tmp4 = withSpringResult;
    }
    tmp5 = str;
    if (closure_4) {
      tmp5 = withSpringResult;
    }
    if (closure_4) {
      str = withSpringResult;
    }
    return obj2;
  };
  const tmpResult2 = tmp(token1[8]);
  fn2.__closure = { withSpring: tmp(token1[11]).withSpring, interpolateColor: tmp(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING, isHorizontal: tmp15 };
  fn2.__workletHash = 4511400204486;
  fn2.__initData = __initData2;
  ({ withSpring: tmp(token1[11]).withSpring, interpolateColor: tmp(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING, isHorizontal: tmp15 });
  const animatedStyle1 = tmpResult2.useAnimatedStyle(fn2);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
        _slicedToArray(size);
      }
    }
    cResult[4] = I;
  } else {
    class I {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
        _slicedToArray(size);
      }
    }
  }
  if (tmp15) {
    class I {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
        _slicedToArray(size);
      }
    }
  }
  if (null != tmp12) {
    class I {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
        _slicedToArray(size);
      }
    }
  }
  if (cResult[5] === 0) {
    class I {
      constructor(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
        _slicedToArray(size);
      }
    }
  }
  const rect = { opacity: num4, top: tooltipY, left: tooltipX };
  cResult[5] = 0;
  cResult[6] = tooltipX;
  cResult[7] = tooltipY;
  cResult[8] = rect;
}) : (function Tooltip(targetMeasurements) {
  let _undefined;
  let adjustmentX;
  let adjustmentY;
  let c3;
  let closure_4;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let label;
  let obj12;
  let onPress;
  let position;
  let surfaceMeasurements;
  let tmp11;
  let tmp20;
  let tmp23Result;
  let tooltipX;
  let tooltipY;
  ({ surfaceMeasurements, label, position, onPress } = targetMeasurements);
  let sharedValue;
  let token;
  let token1;
  _slicedToArray = undefined;
  react = undefined;
  targetMeasurements = targetMeasurements.targetMeasurements;
  const tmp = closure_9();
  let obj = sharedValue(token1[8]);
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(token1[9]);
  let tmp5 = token;
  token = obj2.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  const obj3 = sharedValue(token1[9]);
  token1 = obj3.useToken(token(token1[5]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  let items = [sharedValue];
  const items1 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  [tmp11, c3] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const tmp12 = token(token1[10])(tmp11, surfaceMeasurements, targetMeasurements, position, 4);
  ({ adjustmentX, adjustmentY } = tmp12);
  let tmp14 = tmp13;
  ({ tooltipX, tooltipY } = tmp12);
  if ("left" !== position) {
    let str = "right";
    tmp14 = "right" === position;
  }
  react = tmp14;
  const tmp2Result = sharedValue(token1[8]);
  class R {
    constructor() {
      let items;
      let obj2;
      let withSpring;
      const obj = { backgroundColor: withSpring(obj2.interpolateColor(sharedValue.get(), [0, 1], items), ON_PRESS_SPRING, "animate-always") };
      withSpring = spring.withSpring;
      spring;
      items = [token, token1];
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  R.__closure = { withSpring: sharedValue(token1[11]).withSpring, interpolateColor: sharedValue(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING };
  R.__workletHash = 17276673117291;
  R.__initData = __initData3;
  ({ withSpring: sharedValue(token1[11]).withSpring, interpolateColor: sharedValue(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING });
  const animatedStyle = tmp2Result.useAnimatedStyle(R);
  const tmp2Result2 = sharedValue(token1[8]);
  class P {
    constructor() {
      let tmp4;
      let tmp5;
      const withSpring = spring.withSpring;
      spring;
      const items = [token, token1];
      const obj = ReanimatedRexport;
      const withSpringResult = withSpring(obj.interpolateColor(sharedValue.get(), [0, 1], items), ON_PRESS_SPRING, "animate-always");
      let str = "transparent";
      let str2 = "transparent";
      if (!closure_4) {
        str2 = withSpringResult;
      }
      const obj2 = { borderTopColor: str2, borderBottomColor: tmp4, borderLeftColor: tmp5, borderRightColor: str };
      tmp4 = str;
      if (!closure_4) {
        tmp4 = withSpringResult;
      }
      tmp5 = str;
      if (closure_4) {
        tmp5 = withSpringResult;
      }
      if (closure_4) {
        str = withSpringResult;
      }
      return obj2;
    }
  }
  P.__closure = { withSpring: sharedValue(token1[11]).withSpring, interpolateColor: sharedValue(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING, isHorizontal: tmp14 };
  P.__workletHash = 17324086721760;
  P.__initData = __initData4;
  ({ withSpring: sharedValue(token1[11]).withSpring, interpolateColor: sharedValue(token1[8]).interpolateColor, pressed: sharedValue, backgroundColor: token, backgroundColorPressed: token1, ON_PRESS_SPRING, isHorizontal: tmp14 });
  const animatedStyle1 = tmp2Result2.useAnimatedStyle(P);
  const obj6 = {
    disabled: null == onPress,
    onPress,
    onLayout(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
      _undefined(size);
    },
    onPressIn: callback,
    onPressOut: callback1,
    accessibilityLabel: label,
    accessibilityRole: "button",
    style: items2,
    children: items5
  };
  items2 = [tmp.container, , ];
  let horizontalContainer;
  const tmp17 = closure_7;
  const tmp18 = Pressable;
  if (tmp14) {
    horizontalContainer = tmp.horizontalContainer;
  }
  items2[1] = horizontalContainer;
  let num = 0;
  if (null != tmp11) {
    num = 1;
  }
  items2[2] = { opacity: num, top: tooltipY, left: tooltipX };
  if ("bottom" === position) {
    const obj7 = { style: items3 };
    items3 = [, , , ];
    ({ arrow: arr5[0], topArrow: arr5[1] } = tmp);
    const obj8 = { left: -adjustmentX };
    items3[2] = obj8;
    items3[3] = animatedStyle1;
    tmp20 = closure_6(tmp5(tmp3[8]).View, obj7);
  } else {
    let str2 = "right";
    tmp20 = null;
    if ("right" === position) {
      const obj9 = { style: items4 };
      items4 = [, , , ];
      ({ arrow: arr4[0], leftArrow: arr4[1] } = tmp);
      const obj10 = { top: -adjustmentY };
      items4[2] = obj10;
      items4[3] = animatedStyle1;
      tmp20 = closure_6(tmp5(tmp3[8]).View, obj9);
    }
  }
  items5 = [tmp20, , ];
  const obj11 = { style: items6, children: closure_6(sharedValue(token1[12]).Text, obj12) };
  items6 = [tmp.textContainer, animatedStyle];
  const View = tmp5(tmp3[8]).View;
  obj12 = { style: tmp.text, variant: "text-xs/bold", color: "text-overlay-light", children: label };
  items5[1] = closure_6(View, obj11);
  if ("top" === position) {
    const obj13 = { style: items7 };
    items7 = [, , , ];
    ({ arrow: arr9[0], bottomArrow: arr9[1] } = tmp);
    const obj14 = { left: -adjustmentX };
    items7[2] = obj14;
    items7[3] = animatedStyle1;
    tmp23Result = tmp23(tmp5(tmp3[8]).View, obj13);
  } else {
    tmp23Result = null;
    if ("left" === position) {
      const obj15 = { style: items8 };
      items8 = [, , , ];
      ({ arrow: arr8[0], rightArrow: arr8[1] } = tmp);
      const obj16 = { top: -adjustmentY };
      items8[2] = obj16;
      items8[3] = animatedStyle1;
      tmp23Result = tmp23(tmp5(tmp3[8]).View, obj15);
    }
  }
  items5[2] = tmp23Result;
  return tmp17(tmp18, obj6);
});
size = size_mod;
let result = size.fileFinishedImporting("design/components/Tooltip/native/Tooltip.native.tsx");

export const Tooltip = tmp4;
