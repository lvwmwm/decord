// Module ID: 13996
// Function ID: 13997
// Name: ModalStepIndicator
// Dependencies: [19, 17, 21, 5243, 575, 1652, 5839, 5876, 1113, 2199, 2]
// Exports: ModalStepIndicator

// Module 13996 (ModalStepIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef2199 from "module_2199" /* 2199 */;
import spring_spring from "spring/spring" /* 5876 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let set;

function StepPill(isActive) {
  let sharedValue;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  isActive = isActive.isActive;
  let TEXT_BRAND = isActive.activeColor;
  if (TEXT_BRAND === undefined) {
    TEXT_BRAND = sharedValue(575).colors.TEXT_BRAND;
  }
  let BACKGROUND_MOD_STRONG = isActive.inactiveColor;
  if (BACKGROUND_MOD_STRONG === undefined) {
    BACKGROUND_MOD_STRONG = sharedValue(575).colors.BACKGROUND_MOD_STRONG;
  }
  let num = isActive.inactiveOpacity;
  if (num === undefined) {
    num = 1;
  }
  sharedValue = undefined;
  let num2 = 0;
  const tmp5 = closure_7();
  const useSharedValue = isActive(1652).useSharedValue;
  isActive(1652);
  if (isActive) {
    num2 = 1;
  }
  sharedValue = useSharedValue(num2);
  const tmp6Result = isActive(5839);
  const token = tmp6Result.useToken(TEXT_BRAND);
  let items = [isActive, sharedValue];
  const tmp6Result3 = isActive(5839);
  const token1 = tmp6Result3.useToken(BACKGROUND_MOD_STRONG);
  const effect = react.useEffect(() => {
    let num = 0;
    if (isActive) {
      num = 1;
    }
    set = sharedValue.set;
    const obj = spring_spring;
    const result = set(obj.withSpring(num, closure_6));
  }, items);
  let items1 = [closure_8, , , , , , , , ];
  const useAnimatedStyle = isActive(1652).useAnimatedStyle;
  isActive(1652);
  items1[1] = isActive(1652).interpolate;
  items1[2] = sharedValue;
  items1[3] = 12;
  items1[4] = 36;
  items1[5] = isActive(1652).interpolateColor;
  items1[6] = token1;
  items1[7] = token;
  items1[8] = num;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items1;
  class ModalStepIndicatorNativeTsx1 {
    constructor() {
      let items;
      let items1;
      let items2;
      const obj = { width: _undefined(_undefined2.get(), [0, 1], items), backgroundColor: _undefined3(_undefined2.get(), [0, 1], items1), opacity: _undefined(_undefined2.get(), [0, 1], items2) };
      items = [c2, c3];
      items1 = [c5, c6];
      items2 = [c7, 1];
      return obj;
    }
  }
  let items2 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
  ModalStepIndicatorNativeTsx1.__closure = items2;
  ModalStepIndicatorNativeTsx1.__workletHash = 1125363098386;
  ModalStepIndicatorNativeTsx1.__initData = tmp14;
  const animatedStyle = useAnimatedStyle(ModalStepIndicatorNativeTsx1);
  const items3 = [animatedStyle, tmp5.stepPill];
  return jsx(sharedValue(1652).View, { style: items3 });
}
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = { overshootClamping: true };
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", gap: 4 }, stepPill: { height: 4, borderRadius: 2 } });
let closure_8 = { code: "(function ModalStepIndicatorNativeTsx1(){let[interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity]=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};})" };
let result = size.fileFinishedImporting("design/components/Modal/native/ModalStepIndicator.native.tsx");

export function ModalStepIndicator(arg0) {
  let activeColor;
  let currentStep;
  let inactiveColor;
  let inactiveOpacity;
  let totalSteps;
  ({ currentStep, totalSteps } = arg0);
  ({ activeColor, inactiveColor, inactiveOpacity } = arg0);
  const tmp = closure_7();
  if (totalSteps <= 0) {
    return <View style={tmp.container} />;
  } else {
    let num;
    const items = [];
    for (let num = 0; num < totalSteps; num = num + 1) {
      let arr = items.push(<StepPill key={num} isActive={num === currentStep} activeColor={activeColor} inactiveColor={inactiveColor} inactiveOpacity={inactiveOpacity} />);
    }
    if (currentStep < 0) {
      return <View style={tmp.container}>{items}</View>;
    } else {
      const intl = intl2.intl;
      const range = { min: 1, max: totalSteps, now: currentStep + 1 };
      return <View accessible accessibilityRole="progressbar" accessibilityLabel={intl.string(_modDef2199.KUwsC0)} accessibilityValue={range} importantForAccessibility="yes" style={tmp.container}>{items}</View>;
    }
  }
}
