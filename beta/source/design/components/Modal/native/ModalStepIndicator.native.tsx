// Module ID: 13994
// Function ID: 13995
// Name: ModalStepIndicator
// Dependencies: [19, 17, 21, 4836, 576, 4566, 4531, 5280, 1115, 2125, 2]
// Exports: ModalStepIndicator

// Module 13994 (ModalStepIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import _modDef2125 from "module_2125" /* 2125 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

function StepPill(isActive) {
  let num;
  let sharedValue;
  isActive = isActive.isActive;
  let TEXT_BRAND = isActive.activeColor;
  if (TEXT_BRAND === undefined) {
    TEXT_BRAND = num(sharedValue[4]).colors.TEXT_BRAND;
  }
  let BACKGROUND_MOD_STRONG = isActive.inactiveColor;
  if (BACKGROUND_MOD_STRONG === undefined) {
    BACKGROUND_MOD_STRONG = num(sharedValue[4]).colors.BACKGROUND_MOD_STRONG;
  }
  num = isActive.inactiveOpacity;
  if (num === undefined) {
    num = 1;
  }
  sharedValue = undefined;
  let token;
  let token1;
  let num2 = 0;
  const tmp5 = closure_7();
  const useSharedValue = isActive(sharedValue[5]).useSharedValue;
  isActive(sharedValue[5]);
  if (isActive) {
    num2 = 1;
  }
  sharedValue = useSharedValue(num2);
  const tmp6Result = isActive(sharedValue[6]);
  token = tmp6Result.useToken(TEXT_BRAND);
  const tmp6Result3 = isActive(sharedValue[6]);
  token1 = tmp6Result3.useToken(BACKGROUND_MOD_STRONG);
  let items = [isActive, sharedValue];
  const effect = token.useEffect(() => {
    num = 0;
    if (isActive) {
      num = 1;
    }
    set = sharedValue.set;
    const obj = spring;
    const result = set(obj.withSpring(num, closure_6));
  }, items);
  const tmp6Result4 = isActive(sharedValue[5]);
  class I {
    constructor() {
      let items;
      let items1;
      let obj2;
      let obj3;
      let obj4;
      const obj = { width: obj2.interpolate(sharedValue.get(), [0, 1], [12, 36]), backgroundColor: obj3.interpolateColor(sharedValue.get(), [0, 1], items), opacity: obj4.interpolate(sharedValue.get(), [0, 1], items1) };
      items = [token1, token];
      obj2 = ReanimatedRexport;
      items1 = [num, 1];
      obj3 = ReanimatedRexport;
      obj4 = ReanimatedRexport;
      return obj;
    }
  }
  let obj = { interpolate: tmp6(tmp7[5]).interpolate, sharedValue, WIDTH_INACTIVE: 12, WIDTH_ACTIVE: 36, interpolateColor: tmp6(tmp7[5]).interpolateColor, inactiveColor: token1, activeColor: token, inactiveOpacity: num };
  I.__closure = obj;
  I.__workletHash = 12485955218699;
  I.__initData = __initData;
  const animatedStyle = tmp6Result4.useAnimatedStyle(I);
  let items1 = [animatedStyle, tmp5.stepPill];
  return jsx(num(sharedValue[5]).View, { style: items1 });
}
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = { overshootClamping: true };
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", gap: 4 }, stepPill: { height: 4, borderRadius: 2 } });
const __initData = { code: "function ModalStepIndicatorNativeTsx1(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}" };
let result = size.fileFinishedImporting("design/components/Modal/native/ModalStepIndicator.native.tsx");

export const ModalStepIndicator = function ModalStepIndicator(arg0) {
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
      return <View accessible accessibilityRole="progressbar" accessibilityLabel={intl.string(_modDef2125.KUwsC0)} accessibilityValue={range} importantForAccessibility="yes" style={tmp.container}>{items}</View>;
    }
  }
};
