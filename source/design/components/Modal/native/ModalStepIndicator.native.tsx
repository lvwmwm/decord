// Module ID: 13087
// Function ID: 100839
// Name: StepPill
// Dependencies: [31, 27, 33, 4130, 689, 3991, 3834, 4542, 1212, 1936, 2]
// Exports: ModalStepIndicator

// Module 13087 (StepPill)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function StepPill(isActive) {
  isActive = isActive.isActive;
  let TEXT_BRAND = isActive.activeColor;
  if (TEXT_BRAND === undefined) {
    TEXT_BRAND = num3(sharedValue[4]).colors.TEXT_BRAND;
  }
  let BACKGROUND_MOD_STRONG = isActive.inactiveColor;
  if (BACKGROUND_MOD_STRONG === undefined) {
    BACKGROUND_MOD_STRONG = num3(sharedValue[4]).colors.BACKGROUND_MOD_STRONG;
  }
  num3 = isActive.inactiveOpacity;
  if (num3 === undefined) {
    num3 = 1;
  }
  sharedValue = undefined;
  let token;
  let token1;
  let obj = isActive(sharedValue[5]);
  let num4 = 0;
  if (isActive) {
    num4 = 1;
  }
  sharedValue = obj.useSharedValue(num4);
  const tmp5 = callback();
  token = isActive(sharedValue[6]).useToken(TEXT_BRAND);
  let obj2 = isActive(sharedValue[6]);
  token1 = isActive(sharedValue[6]).useToken(BACKGROUND_MOD_STRONG);
  let items = [isActive, sharedValue];
  const effect = token.useEffect(() => {
    let num = 0;
    if (isActive) {
      num = 1;
    }
    const result = sharedValue.set(isActive(sharedValue[7]).withSpring(num, outer1_6));
  }, items);
  let obj3 = isActive(sharedValue[6]);
  class I {
    constructor() {
      obj = {};
      obj2 = isActive(c2[5]);
      obj.width = obj2.interpolate(c2.get(), [0, 1], [12, 36]);
      obj3 = isActive(c2[5]);
      items = [, ];
      items[0] = BACKGROUND_MOD_STRONG;
      items[1] = c3;
      obj.backgroundColor = obj3.interpolateColor(c2.get(), [0, 1], items);
      obj4 = isActive(c2[5]);
      items1 = [, ];
      items1[0] = c1;
      items1[1] = 1;
      obj.opacity = obj4.interpolate(c2.get(), [0, 1], items1);
      return obj;
    }
  }
  obj = { interpolate: isActive(sharedValue[5]).interpolate, sharedValue, WIDTH_INACTIVE: 12, WIDTH_ACTIVE: 36, interpolateColor: isActive(sharedValue[5]).interpolateColor, inactiveColor: token1, activeColor: token, inactiveOpacity: num3 };
  I.__closure = obj;
  I.__workletHash = 12485955218699;
  I.__initData = closure_8;
  const animatedStyle = isActive(sharedValue[5]).useAnimatedStyle(I);
  const style = [animatedStyle, tmp5.stepPill];
  return jsx(num3(sharedValue[5]).View, { style });
}
let closure_6 = { overshootClamping: true };
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row", gap: 4 }, stepPill: { height: 4, borderRadius: 2 } });
let closure_8 = { code: "function ModalStepIndicatorNativeTsx1(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}" };
let result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalStepIndicator.native.tsx");

export const ModalStepIndicator = function ModalStepIndicator(arg0) {
  let activeColor;
  let currentStep;
  let inactiveColor;
  let inactiveOpacity;
  let totalSteps;
  ({ currentStep, totalSteps } = arg0);
  ({ activeColor, inactiveColor, inactiveOpacity } = arg0);
  const tmp = callback();
  if (totalSteps <= 0) {
    let obj = { style: tmp.container };
    return <View style={tmp.container} />;
  } else {
    const items = [];
    for (let num = 0; num < totalSteps; num = num + 1) {
      let tmp2 = jsx;
      let tmp3 = StepPill;
      obj = { isActive: num === currentStep, activeColor, inactiveColor, inactiveOpacity };
      let arr = items.push(<StepPill key={num} isActive={num === currentStep} activeColor={activeColor} inactiveColor={inactiveColor} inactiveOpacity={inactiveOpacity} />);
    }
    if (currentStep < 0) {
      obj = { style: tmp.container, children: items };
      return <View style={tmp.container}>{items}</View>;
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj1 = { accessible: true, accessibilityRole: "progressbar", accessibilityLabel: intl.string(importDefault(1936).KUwsC0), accessibilityValue: null, importantForAccessibility: "yes" };
      const obj2 = { min: 1, max: totalSteps, now: currentStep + 1 };
      obj1.accessibilityValue = obj2;
      obj1.style = tmp.container;
      obj1.children = items;
      return <View accessible accessibilityRole="progressbar" accessibilityLabel={intl.string(importDefault(1936).KUwsC0)} accessibilityValue={null} importantForAccessibility="yes" />;
    }
  }
};
