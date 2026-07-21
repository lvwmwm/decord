// Module ID: 15521
// Function ID: 118448
// Name: useLaunchpadAnimatedStyles
// Dependencies: []
// Exports: default

// Module 15521 (useLaunchpadAnimatedStyles)
const LAUNCH_PAD_SPRING_CONFIG = require(dependencyMap[0]).LAUNCH_PAD_SPRING_CONFIG;
const _module = require(dependencyMap[1]);
let closure_4 = _module.isAndroid();
const _module1 = require(dependencyMap[2]);
let closure_5 = _module1.createStyles({ launchPad: { <string:1638155601>: "Array", <string:2911785703>: "isArray", <string:291738931>: "constructor", <string:3327292578>: null, <string:1396137408>: null }, launchPadCover: {} });
let closure_6 = { code: "function useLaunchPadAnimatedStylesNativeTsx1(){const{withSpring,interpolate,launchPadSharedState,windowDimensions,LAUNCH_PAD_SPRING_CONFIG,gestureState,launchPadShown,IS_ANDROID,height}=this.__closure;return{transform:[{translateX:withSpring(interpolate(launchPadSharedState.get(),[0,1],[windowDimensions.get().width-16,0]),LAUNCH_PAD_SPRING_CONFIG,'animate-always',function(finished){'worklet';if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}})}],bottom:IS_ANDROID?0:height.get()};}" };
let closure_7 = { code: "function useLaunchPadAnimatedStylesNativeTsx2(finished){const{gestureState,launchPadSharedState,launchPadShown}=this.__closure;if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}}" };
let closure_8 = { code: "function useLaunchPadAnimatedStylesNativeTsx3(){const{withSpring,interpolate,launchPadSharedState,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,0.6]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')};}" };
const _module2 = require(dependencyMap[8]);
const result = _module2.fileFinishedImporting("modules/launchpad/native/useLaunchPadAnimatedStyles.native.tsx");

export default function useLaunchpadAnimatedStyles(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const require = launchPadSharedState;
  const gestureState = launchPadSharedState.gestureState;
  const importDefault = gestureState;
  const launchPadShown = launchPadSharedState.launchPadShown;
  const dependencyMap = launchPadShown;
  const tmp = callback();
  const tmp2 = importDefault(dependencyMap[3])();
  const LAUNCH_PAD_SPRING_CONFIG = tmp2;
  const tmp3 = importDefault(dependencyMap[4])();
  let closure_4 = tmp3;
  let obj = require(dependencyMap[6]);
  const fn = function _() {
    let obj = {};
    obj = {};
    const obj3 = launchPadSharedState(launchPadShown[7]);
    const value = launchPadSharedState.get();
    const items = [tmp3.get().width - 16, ];
    let num = 0;
    items[1] = 0;
    const fn = function h(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = !closure_1.get().active;
      }
      if (tmp) {
        let tmp4 = 1 !== store.get();
        if (tmp4) {
          tmp4 = 0 !== store.get();
        }
        if (!tmp4) {
          const result = closure_2.set(1 === store.get());
        }
      }
    };
    obj = { gestureState, launchPadSharedState, launchPadShown };
    fn.__closure = obj;
    fn.__workletHash = 7028378249389;
    fn.__initData = closure_7;
    obj.translateX = obj3.withSpring(launchPadSharedState(launchPadShown[6]).interpolate(value, ["replace", "then"], items), tmp2, "animate-always", fn);
    const items1 = [obj];
    obj.transform = items1;
    if (!tmp3) {
      num = tmp2.get();
    }
    obj.bottom = num;
    return obj;
  };
  obj = { withSpring: require(dependencyMap[7]).withSpring, interpolate: require(dependencyMap[6]).interpolate, launchPadSharedState, windowDimensions: tmp3, LAUNCH_PAD_SPRING_CONFIG, gestureState, launchPadShown, IS_ANDROID: closure_4, height: tmp2 };
  fn.__closure = obj;
  fn.__workletHash = 1628632614770;
  fn.__initData = closure_6;
  const animatedStyle = obj.useAnimatedStyle(fn);
  class P {
    constructor() {
      obj = {};
      obj2 = launchPadSharedState(launchPadShown[7]);
      obj3 = launchPadSharedState(launchPadShown[6]);
      obj.opacity = obj2.withSpring(obj3.interpolate(launchPadSharedState.get(), ["replace", "then"], [null, null]), closure_3, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: require(dependencyMap[7]).withSpring, interpolate: require(dependencyMap[6]).interpolate, launchPadSharedState, LAUNCH_PAD_SPRING_CONFIG };
  P.__closure = obj;
  P.__workletHash = 6964438968188;
  P.__initData = closure_8;
  const obj1 = {};
  const items = [tmp.launchPadCover, require(dependencyMap[6]).useAnimatedStyle(P)];
  obj1.launchPadCoverStyles = items;
  const items1 = [tmp.launchPad, animatedStyle, { paddingTop: importDefault(dependencyMap[5])().top }];
  obj1.launchPadStyles = items1;
  return obj1;
};
