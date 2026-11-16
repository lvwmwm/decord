// Module ID: 12221
// Function ID: 12222
// Name: StageChannelAnimationUtils
// Dependencies: [1652, 11357, 12050, 1627, 5402, 2]
// Exports: useStageActionBarAnimation

// Module 12221 (StageChannelAnimationUtils)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import useIsInvitedToSpeakDefault from "useIsInvitedToSpeak" /* 11357 */;
import StageChannelHeightHooks from "StageChannelHeightHooks" /* 12050 */;
import size from "module_2" /* 2 */;

let sum, tmp3, tmp4;

let Easing;
let obj = { duration: 250, easing: Easing.bezier(0.66, 0, 0.2, 1) };
Easing = _mod1652.Easing;
let closure_4 = { code: "(function StageChannelAnimationUtilsTsx1(){let[isInvited,actionBarHeight,ACTION_BAR_SAFE_AREA_PADDING,safeAreaTop,controlPadding]=this.__closure;return isInvited?actionBarHeight+ACTION_BAR_SAFE_AREA_PADDING+safeAreaTop:controlPadding;})" };
let closure_5 = { code: "(function StageChannelAnimationUtilsTsx2(){let[withTiming,paddingTop,TIMING_CONFIG]=this.__closure;return{paddingTop:withTiming(paddingTop.get(),TIMING_CONFIG)};})" };
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelAnimationUtils.tsx");

export function useStageActionBarAnimation(channelId, arg1) {
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp = dependencyMap;
  const tmp2 = useIsInvitedToSpeakDefault();
  obj = StageChannelHeightHooks;
  const getActionBarHeight = obj.useGetActionBarHeight(channelId);
  const top = useSafeAreaInsetsDefault().top;
  const items = [closure_4, tmp2, getActionBarHeight, 10, top, arg1];
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items;
  const obj2 = _mod1652;
  class StageChannelAnimationUtilsTsx1 {
    constructor() {
      tmp = closure_0;
      if (tmp) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        tmp5 = closure_3;
        sum = closure_1 + closure_2 + closure_3;
      } else {
        sum = closure_4;
      }
      return sum;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10];
  StageChannelAnimationUtilsTsx1.__closure = items1;
  StageChannelAnimationUtilsTsx1.__workletHash = 554637474683;
  StageChannelAnimationUtilsTsx1.__initData = tmp5;
  const derivedValue = obj2.useDerivedValue(StageChannelAnimationUtilsTsx1);
  const items2 = [closure_5, , , ];
  const useAnimatedStyle = tmp3(1652).useAnimatedStyle;
  _mod1652;
  items2[1] = timing_timing.withTiming;
  items2[2] = derivedValue;
  items2[3] = obj;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items2;
  class StageChannelAnimationUtilsTsx2 {
    constructor() {
      obj = { paddingTop: closure_0(closure_1.get(), closure_2) };
      return obj;
    }
  }
  const items3 = [tmp14, tmp15, tmp16];
  StageChannelAnimationUtilsTsx2.__closure = items3;
  StageChannelAnimationUtilsTsx2.__workletHash = 6071132596271;
  StageChannelAnimationUtilsTsx2.__initData = tmp13;
  return useAnimatedStyle(StageChannelAnimationUtilsTsx2);
}
