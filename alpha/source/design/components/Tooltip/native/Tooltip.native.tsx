// Module ID: 10144
// Function ID: 10145
// Name: Tooltip
// Dependencies: [32, 19, 17, 21, 5143, 575, 1652, 5734, 10145, 5773, 5763, 2]
// Exports: Tooltip

// Module 10144 (Tooltip)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5734 */;
import Text_Text from "Text/Text" /* 5763 */;
import spring_spring from "spring/spring" /* 5773 */;
import reactDefault from "react" /* 10145 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
const Pressable = react_native.Pressable;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = { mass: 1, overshootClamping: true, damping: 27, stiffness: 300 };
let createStyles = createStyles_mod;
let obj = { container: { position: "absolute", alignItems: "center" }, horizontalContainer: { flexDirection: "row" }, textContainer: obj2, text: { textAlign: "center" }, arrow: size, bottomArrow: { borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 6 }, topArrow: { borderLeftWidth: 6, borderRightWidth: 6, borderBottomWidth: 6 }, leftArrow: { borderTopWidth: 6, borderBottomWidth: 6, borderRightWidth: 6 }, rightArrow: { borderTopWidth: 6, borderBottomWidth: 6, borderLeftWidth: 6 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, maxWidth: 150, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
size = { width: 0, height: 0, borderStyle: "solid", borderLeftColor: "transparent", borderRightColor: "transparent", borderTopColor: nativeDefault.colors.BACKGROUND_BRAND, borderBottomColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_9 = createStyles(obj);
let closure_10 = { code: "(function TooltipNativeTsx1(){let[withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING]=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always')};})" };
let closure_11 = { code: "(function TooltipNativeTsx2(){let[withSpring,interpolateColor,pressed,backgroundColor,backgroundColorPressed,ON_PRESS_SPRING,isHorizontal]=this.__closure;const color=withSpring(interpolateColor(pressed.get(),[0,1],[backgroundColor,backgroundColorPressed]),ON_PRESS_SPRING,'animate-always');return{borderTopColor:isHorizontal?'transparent':color,borderBottomColor:isHorizontal?'transparent':color,borderLeftColor:isHorizontal?color:'transparent',borderRightColor:isHorizontal?color:'transparent'};})" };
size = size_mod;
let result = size.fileFinishedImporting("design/components/Tooltip/native/Tooltip.native.tsx");

export function Tooltip(targetMeasurements) {
  let adjustmentX;
  let adjustmentY;
  let c1;
  let items10;
  let items11;
  let items12;
  let items6;
  let items7;
  let items8;
  let items9;
  let label;
  let obj10;
  let onPress;
  let position;
  let surfaceMeasurements;
  let tmp11;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp38;
  let tmp41Result;
  let tooltipX;
  let tooltipY;
  ({ surfaceMeasurements, label, position, onPress } = targetMeasurements);
  c1 = undefined;
  targetMeasurements = targetMeasurements.targetMeasurements;
  let tmp = closure_9();
  let tmp3 = dependencyMap;
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE);
  let items = [sharedValue];
  const items1 = [sharedValue];
  const callback = react.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = react.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  [tmp11, c1] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const tmp12 = reactDefault(tmp11, surfaceMeasurements, targetMeasurements, position, 4);
  ({ adjustmentX, adjustmentY } = tmp12);
  let tmp14 = tmp13;
  ({ tooltipX, tooltipY } = tmp12);
  if ("left" !== position) {
    let str = "right";
    tmp14 = "right" === position;
  }
  const items2 = [closure_10, , , , , , ];
  const useAnimatedStyle = tmp2(1652).useAnimatedStyle;
  _mod1652;
  items2[1] = spring_spring.withSpring;
  items2[2] = _mod1652.interpolateColor;
  items2[3] = sharedValue;
  items2[4] = token;
  items2[5] = token1;
  items2[6] = closure_8;
  let c0;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items2;
  class TooltipNativeTsx1 {
    constructor() {
      let items;
      const obj = { backgroundColor: _undefined(_undefined2(_undefined3.get(), [0, 1], items), c5, "animate-always") };
      items = [c3, c4];
      return obj;
    }
  }
  const items3 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
  TooltipNativeTsx1.__closure = items3;
  TooltipNativeTsx1.__workletHash = 1253049499792;
  TooltipNativeTsx1.__initData = tmp17;
  const animatedStyle = useAnimatedStyle(TooltipNativeTsx1);
  const items4 = [closure_11, , , , , , , ];
  const useAnimatedStyle2 = tmp2(1652).useAnimatedStyle;
  _mod1652;
  items4[1] = spring_spring.withSpring;
  items4[2] = _mod1652.interpolateColor;
  items4[3] = sharedValue;
  items4[4] = token;
  items4[5] = token1;
  items4[6] = closure_8;
  items4[7] = tmp14;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  let c6;
  [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items4;
  class TooltipNativeTsx2 {
    constructor() {
      let tmp3;
      let tmp4;
      const items = [c3, c4];
      const tmp = _undefined(_undefined2(_undefined3.get(), [0, 1], items), c5, "animate-always");
      let str = "transparent";
      let str2 = "transparent";
      if (!c6) {
        str2 = tmp;
      }
      const obj = { borderTopColor: str2, borderBottomColor: tmp3, borderLeftColor: tmp4, borderRightColor: str };
      tmp3 = str;
      if (!c6) {
        tmp3 = tmp;
      }
      tmp4 = str;
      if (c6) {
        tmp4 = tmp;
      }
      if (c6) {
        str = tmp;
      }
      return obj;
    }
  }
  const items5 = [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  TooltipNativeTsx2.__closure = items5;
  TooltipNativeTsx2.__workletHash = 10252270917599;
  TooltipNativeTsx2.__initData = tmp26;
  const animatedStyle2 = useAnimatedStyle2(TooltipNativeTsx2);
  const obj4 = {
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
    style: items6,
    children: items9
  };
  items6 = [tmp.container, , ];
  let horizontalContainer;
  const tmp35 = metroImportDefault;
  const tmp36 = Pressable;
  if (tmp14) {
    horizontalContainer = tmp.horizontalContainer;
  }
  items6[1] = horizontalContainer;
  let num = 0;
  if (null != tmp11) {
    num = 1;
  }
  items6[2] = { opacity: num, top: tooltipY, left: tooltipX };
  if ("bottom" === position) {
    const obj5 = { style: items7 };
    items7 = [, , , ];
    ({ arrow: arr9[0], topArrow: arr9[1] } = tmp);
    const obj6 = { left: -adjustmentX };
    items7[2] = obj6;
    items7[3] = animatedStyle2;
    tmp38 = metroRequire(tmp5(1652).View, obj5);
  } else {
    let str2 = "right";
    tmp38 = null;
    if ("right" === position) {
      const obj7 = { style: items8 };
      items8 = [, , , ];
      ({ arrow: arr8[0], leftArrow: arr8[1] } = tmp);
      const obj8 = { top: -adjustmentY };
      items8[2] = obj8;
      items8[3] = animatedStyle2;
      tmp38 = metroRequire(tmp5(1652).View, obj7);
    }
  }
  items9 = [tmp38, , ];
  const obj9 = { style: items10, children: metroRequire(Text_Text.Text, obj10) };
  items10 = [tmp.textContainer, animatedStyle];
  const View = tmp5(1652).View;
  obj10 = { style: tmp.text, variant: "body-xs/semibold", color: "text-overlay-light", children: label };
  items9[1] = metroRequire(View, obj9);
  if ("top" === position) {
    const obj11 = { style: items11 };
    items11 = [, , , ];
    ({ arrow: arr13[0], bottomArrow: arr13[1] } = tmp);
    const obj12 = { left: -adjustmentX };
    items11[2] = obj12;
    items11[3] = animatedStyle2;
    tmp41Result = tmp41(tmp5(1652).View, obj11);
  } else {
    tmp41Result = null;
    if ("left" === position) {
      const obj13 = { style: items12 };
      items12 = [, , , ];
      ({ arrow: arr12[0], rightArrow: arr12[1] } = tmp);
      const obj14 = { top: -adjustmentY };
      items12[2] = obj14;
      items12[3] = animatedStyle2;
      tmp41Result = tmp41(tmp5(1652).View, obj13);
    }
  }
  items9[2] = tmp41Result;
  return tmp35(tmp36, obj4);
}
