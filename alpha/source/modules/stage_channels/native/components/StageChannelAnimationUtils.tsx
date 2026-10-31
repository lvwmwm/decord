// Module ID: 12022
// Function ID: 12023
// Name: StageChannelAnimationUtils
// Dependencies: [5095, 11856, 11854, 1625, 5254, 2]
// Exports: useStageActionBarAnimation

// Module 12022 (StageChannelAnimationUtils)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import timing from "timing" /* 5254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let Easing;
let obj = { duration: 250, easing: Easing.bezier(0.66, 0, 0.2, 1) };
Easing = ReanimatedRexport.Easing;
let closure_4 = { code: "function StageChannelAnimationUtilsTsx1(){const{isInvited,actionBarHeight,ACTION_BAR_SAFE_AREA_PADDING,safeAreaTop,controlPadding}=this.__closure;return isInvited?actionBarHeight+ACTION_BAR_SAFE_AREA_PADDING+safeAreaTop:controlPadding;}" };
const __initData = { code: "function StageChannelAnimationUtilsTsx2(){const{withTiming,paddingTop,TIMING_CONFIG}=this.__closure;return{paddingTop:withTiming(paddingTop.get(),TIMING_CONFIG)};}" };
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelAnimationUtils.tsx");

export function useStageActionBarAnimation(channelId, controlPadding) {
  let closure_1;
  let derivedValue;
  let getActionBarHeight;
  _require = controlPadding;
  let tmp = require("useIsInvitedToSpeak")();
  importDefault = tmp;
  obj = require("StageChannelHeightHooks");
  getActionBarHeight = obj.useGetActionBarHeight(channelId);
  const top = require("useSafeAreaInsets")().top;
  let obj2 = require("ReanimatedRexport");
  class A {
    constructor() {
      let sum;
      const tmp = closure_1;
      if (tmp) {
        sum = getActionBarHeight + 10 + top;
      } else {
        sum = controlPadding;
      }
      return sum;
    }
  }
  A.__closure = { isInvited: tmp, actionBarHeight: getActionBarHeight, ACTION_BAR_SAFE_AREA_PADDING: 10, safeAreaTop: top, controlPadding };
  A.__workletHash = 2568370943746;
  A.__initData = derivedValue;
  derivedValue = obj2.useDerivedValue(A);
  const fn = function c() {
    let obj2;
    obj = { paddingTop: obj2.withTiming(derivedValue.get(), obj) };
    obj2 = timing;
    return obj;
  };
  const obj3 = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, paddingTop: derivedValue, TIMING_CONFIG: top };
  fn.__workletHash = 16816216105718;
  fn.__initData = __initData;
  ({ withTiming: require("timing").withTiming, paddingTop: derivedValue, TIMING_CONFIG: top });
  return obj3.useAnimatedStyle(fn);
}
