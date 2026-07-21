// Module ID: 10759
// Function ID: 83611
// Name: useStageActionBarAnimation
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: useStageActionBarAnimation

// Module 10759 (useStageActionBarAnimation)
import { Easing } from "__exportStarResult1";

const obj = { duration: 250 };
obj.easing = Easing.bezier(0.66, 0, 0.2, 1);
let closure_4 = { code: "function StageChannelAnimationUtilsTsx1(){const{isInvited,actionBarHeight,ACTION_BAR_SAFE_AREA_PADDING,safeAreaTop,controlPadding}=this.__closure;return isInvited?actionBarHeight+ACTION_BAR_SAFE_AREA_PADDING+safeAreaTop:controlPadding;}" };
let closure_5 = { code: "function StageChannelAnimationUtilsTsx2(){const{withTiming,paddingTop,TIMING_CONFIG}=this.__closure;return{paddingTop:withTiming(paddingTop.get(),TIMING_CONFIG)};}" };
const result = require("__exportStarResult1").fileFinishedImporting("modules/stage_channels/native/components/StageChannelAnimationUtils.tsx");

export const useStageActionBarAnimation = function useStageActionBarAnimation(channelId, controlPadding) {
  const require = controlPadding;
  const tmp = importDefault(dependencyMap[1])();
  const importDefault = tmp;
  let obj = require(dependencyMap[2]);
  const getActionBarHeight = obj.useGetActionBarHeight(channelId);
  const dependencyMap = getActionBarHeight;
  const top = importDefault(dependencyMap[3])().top;
  obj = top;
  class A {
    constructor() {
      if (closure_1) {
        tmp2 = closure_2;
        num = 10;
        tmp3 = top;
        sum = closure_2 + 10 + top;
      } else {
        sum = controlPadding;
      }
      return sum;
    }
  }
  obj = { isInvited: tmp, actionBarHeight: getActionBarHeight, ACTION_BAR_SAFE_AREA_PADDING: 10, safeAreaTop: top, controlPadding };
  A.__closure = obj;
  A.__workletHash = 2568370943746;
  A.__initData = closure_4;
  const derivedValue = require(dependencyMap[0]).useDerivedValue(A);
  closure_4 = derivedValue;
  const obj2 = require(dependencyMap[0]);
  const fn = function c() {
    const obj = { paddingTop: arg1(getActionBarHeight[4]).withTiming(derivedValue.get(), top) };
    return obj;
  };
  obj = { withTiming: require(dependencyMap[4]).withTiming, paddingTop: derivedValue, TIMING_CONFIG: obj };
  fn.__closure = obj;
  fn.__workletHash = 16816216105718;
  fn.__initData = closure_5;
  return require(dependencyMap[0]).useAnimatedStyle(fn);
};
