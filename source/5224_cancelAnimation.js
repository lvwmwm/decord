// Module ID: 5224
// Function ID: 45205
// Name: cancelAnimation
// Dependencies: [1582, 5221]

// Module 5224 (cancelAnimation)
import cancelAnimation from "cancelAnimation";

while (true) {
  let tmp4 = cancelAnimation;
  let tmp5 = null;
  let tmp6 = null != cancelAnimation;
  let useSharedValue = tmp6;
  if (!tmp6) {
    break;
  } else {
    useSharedValue = tmp3.useSharedValue;
    break;
  }
  let obj = {};
  let str = "function pnpm_reanimatedWrapperTs1(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}";
  obj.code = "function pnpm_reanimatedWrapperTs1(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}";
  let tmp7 = obj;
  let tmp8 = cancelAnimation;
  let tmp9 = undefined === cancelAnimation;
  let setGestureState = tmp9;
  if (!tmp9) {
    let tmp10 = cancelAnimation;
    setGestureState = cancelAnimation.setGestureState;
  }
  if (!setGestureState) {
    let tmp11 = cancelAnimation;
    function pnpm_reanimatedWrapperTs1() {
      console.warn(require(5221) /* hasProperty */.tagMessage("Please use newer version of react-native-reanimated in order to control state of the gestures."));
    }
    obj = {};
    let tmp12 = dependencyMap;
    let num = 1;
    obj.tagMessage = require("hasProperty").tagMessage;
    pnpm_reanimatedWrapperTs1.__closure = obj;
    let num2 = 12835327155090;
    pnpm_reanimatedWrapperTs1.__workletHash = 12835327155090;
    pnpm_reanimatedWrapperTs1.__initData = obj;
    cancelAnimation.setGestureState = pnpm_reanimatedWrapperTs1;
  }
  exports.Reanimated = cancelAnimation;
}
