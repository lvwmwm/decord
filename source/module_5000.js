// Module ID: 5000
// Function ID: 42811
// Dependencies: []

// Module 5000
const _module = require(dependencyMap[0]);
while (true) {
  let tmp4 = _module;
  let tmp5 = null;
  let tmp6 = null != _module;
  let useSharedValue = tmp6;
  if (!tmp6) {
    break;
  } else {
    useSharedValue = tmp3.useSharedValue;
    // break
  }
  let obj = {};
  let str = "function pnpm_reanimatedWrapperTs1(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}";
  obj.code = "function pnpm_reanimatedWrapperTs1(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}";
  let tmp7 = obj;
  let tmp8 = _module;
  let tmp9 = undefined === _module;
  let setGestureState = tmp9;
  if (!tmp9) {
    let tmp10 = _module;
    setGestureState = _module.setGestureState;
  }
  if (!setGestureState) {
    let tmp11 = _module;
    function pnpm_reanimatedWrapperTs1() {
      console.warn(require(dependencyMap[1]).tagMessage("Please use newer version of react-native-reanimated in order to control state of the gestures."));
    }
    obj = {};
    let tmp12 = dependencyMap;
    let num = 1;
    obj.tagMessage = require(dependencyMap[1]).tagMessage;
    pnpm_reanimatedWrapperTs1.__closure = obj;
    let num2 = 12835327155090;
    pnpm_reanimatedWrapperTs1.__workletHash = 12835327155090;
    pnpm_reanimatedWrapperTs1.__initData = obj;
    _module.setGestureState = pnpm_reanimatedWrapperTs1;
  }
  exports.Reanimated = _module;
}
