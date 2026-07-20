// Module ID: 12957
// Function ID: 98605
// Name: StepPill
// Dependencies: []
// Exports: ModalStepIndicator

// Module 12957 (StepPill)
function StepPill(isActive) {
  isActive = isActive.isActive;
  const arg1 = isActive;
  let TEXT_BRAND = isActive.activeColor;
  if (TEXT_BRAND === undefined) {
    TEXT_BRAND = importDefault(dependencyMap[4]).colors.TEXT_BRAND;
  }
  let BACKGROUND_MOD_STRONG = isActive.inactiveColor;
  if (BACKGROUND_MOD_STRONG === undefined) {
    BACKGROUND_MOD_STRONG = importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG;
  }
  let num3 = isActive.inactiveOpacity;
  if (num3 === undefined) {
    num3 = 1;
  }
  const importDefault = num3;
  let dependencyMap;
  let React;
  let View;
  let obj = arg1(dependencyMap[5]);
  let num4 = 0;
  if (isActive) {
    num4 = 1;
  }
  const sharedValue = obj.useSharedValue(num4);
  dependencyMap = sharedValue;
  const tmp5 = callback();
  const token = arg1(dependencyMap[6]).useToken(TEXT_BRAND);
  React = token;
  const obj2 = arg1(dependencyMap[6]);
  const token1 = arg1(dependencyMap[6]).useToken(BACKGROUND_MOD_STRONG);
  View = token1;
  const items = [isActive, sharedValue];
  const effect = React.useEffect(() => {
    let num = 0;
    if (isActive) {
      num = 1;
    }
    const result = sharedValue.set(isActive(sharedValue[7]).withSpring(num, closure_6));
  }, items);
  const obj3 = arg1(dependencyMap[6]);
  class T {
    constructor() {
      obj = {};
      obj2 = isActive(closure_2[5]);
      obj.width = obj2.interpolate(closure_2.get(), [null, null], []);
      obj3 = isActive(closure_2[5]);
      items = [, ];
      items[0] = BACKGROUND_MOD_STRONG;
      items[1] = closure_3;
      obj.backgroundColor = obj3.interpolateColor(closure_2.get(), [null, null], items);
      obj4 = isActive(closure_2[5]);
      items1 = [, ];
      items1[0] = closure_1;
      items1[1] = 1;
      obj.opacity = obj4.interpolate(closure_2.get(), [null, null], items1);
      return obj;
    }
  }
  obj = { interpolate: arg1(dependencyMap[5]).interpolate, sharedValue, WIDTH_INACTIVE: 12, WIDTH_ACTIVE: 36, interpolateColor: arg1(dependencyMap[5]).interpolateColor, inactiveColor: token1, activeColor: token, inactiveOpacity: num3 };
  T.__closure = obj;
  T.__workletHash = 12485955218699;
  T.__initData = closure_8;
  const animatedStyle = arg1(dependencyMap[5]).useAnimatedStyle(T);
  const style = [animatedStyle, tmp5.stepPill];
  return jsx(importDefault(dependencyMap[5]).View, { style });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = { overshootClamping: true };
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: { 0: null, 9223372036854775807: null }, stepPill: { "Bool(false)": "isArray", "Bool(false)": "current" } });
let closure_8 = { code: "function ModalStepIndicatorNativeTsx1(){const{interpolate,sharedValue,WIDTH_INACTIVE,WIDTH_ACTIVE,interpolateColor,inactiveColor,activeColor,inactiveOpacity}=this.__closure;return{width:interpolate(sharedValue.get(),[0,1],[WIDTH_INACTIVE,WIDTH_ACTIVE]),backgroundColor:interpolateColor(sharedValue.get(),[0,1],[inactiveColor,activeColor]),opacity:interpolate(sharedValue.get(),[0,1],[inactiveOpacity,1])};}" };
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Modal/native/ModalStepIndicator.native.tsx");

export const ModalStepIndicator = function ModalStepIndicator(totalSteps) {
  let activeColor;
  let currentStep;
  let inactiveColor;
  let inactiveOpacity;
  totalSteps = totalSteps.totalSteps;
  ({ currentStep, activeColor, inactiveColor, inactiveOpacity } = totalSteps);
  const items = [];
  let num = 0;
  if (0 < totalSteps) {
    do {
      let tmp2 = closure_5;
      let tmp3 = closure_9;
      let obj = { isActive: num === currentStep, activeColor, inactiveColor, inactiveOpacity };
      let arr = items.push(closure_5(closure_9, obj, num));
      num = num + 1;
    } while (num < totalSteps);
  }
  obj = { style: callback().container, children: items };
  return <View {...obj} />;
};
