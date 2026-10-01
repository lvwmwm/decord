// Module ID: 16795
// Function ID: 16796
// Name: useLaunchPadAnimatedStyles
// Dependencies: [11002, 1364, 4836, 16269, 11515, 1613, 4566, 5280, 2]
// Exports: default

// Module 16795 (useLaunchPadAnimatedStyles)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11002 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let LAUNCH_PAD_SPRING_CONFIG = LaunchPadConstants.LAUNCH_PAD_SPRING_CONFIG;
let IS_ANDROID = PlatformUtils.isAndroid();
let closure_5 = createStyles.createStyles({ launchPad: { position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }, launchPadCover: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#000" } });
const __initData = { code: "function useLaunchPadAnimatedStylesNativeTsx1(){const{withSpring,interpolate,launchPadSharedState,windowDimensions,LAUNCH_PAD_SPRING_CONFIG,gestureState,launchPadShown,IS_ANDROID,height}=this.__closure;return{transform:[{translateX:withSpring(interpolate(launchPadSharedState.get(),[0,1],[windowDimensions.get().width-16,0]),LAUNCH_PAD_SPRING_CONFIG,'animate-always',function(finished){'worklet';if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}})}],bottom:IS_ANDROID?0:height.get()};}" };
let closure_7 = { code: "function useLaunchPadAnimatedStylesNativeTsx2(finished){const{gestureState,launchPadSharedState,launchPadShown}=this.__closure;if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}}" };
const __initData2 = { code: "function useLaunchPadAnimatedStylesNativeTsx3(){const{withSpring,interpolate,launchPadSharedState,LAUNCH_PAD_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,0.6]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')};}" };
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadAnimatedStyles.native.tsx");

export default function useLaunchpadAnimatedStyles(launchPadSharedState) {
  let closure_3;
  let closure_4;
  let items;
  let items1;
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const gestureState = launchPadSharedState.gestureState;
  const launchPadShown = launchPadSharedState.launchPadShown;
  let tmp = closure_5();
  let tmp2 = gestureState(launchPadShown[3])();
  LAUNCH_PAD_SPRING_CONFIG = tmp2;
  let tmp3 = gestureState(launchPadShown[4])();
  IS_ANDROID = tmp3;
  const top = gestureState(launchPadShown[5])().top;
  let obj = launchPadSharedState(launchPadShown[6]);
  let fn = function _() {
    let fn;
    let interpolate;
    let items;
    let items1;
    let num;
    let value;
    let withSpring;
    const obj = { transform: items1, bottom: num };
    const obj2 = { translateX: withSpring(interpolate(value, [0, 1], items), LAUNCH_PAD_SPRING_CONFIG, "animate-always", fn) };
    let tmp = spring;
    withSpring = tmp.withSpring;
    interpolate = ReanimatedRexport.interpolate;
    value = launchPadSharedState.get();
    items = [closure_4.get().width - 16, ];
    num = 0;
    items[1] = 0;
    fn = function h(arg0) {
      const tmp = arg0 && !gestureState.get().active;
      if (tmp) {
        const tmp3 = 1 !== launchPadSharedState.get() && 0 !== obj.get();
        if (!tmp3) {
          const result = launchPadShown.set(1 === obj.get());
        }
      }
    };
    const obj3 = { gestureState, launchPadSharedState, launchPadShown };
    fn.__closure = obj3;
    fn.__workletHash = 7028378249389;
    fn.__initData = __initData;
    items1 = [obj2];
    const tmp4 = closure_4;
    if (!tmp4) {
      num = closure_3.get();
    }
    return obj;
  };
  let obj2 = { withSpring: launchPadSharedState(launchPadShown[7]).withSpring, interpolate: launchPadSharedState(launchPadShown[6]).interpolate, launchPadSharedState, windowDimensions: tmp3, LAUNCH_PAD_SPRING_CONFIG, gestureState, launchPadShown, IS_ANDROID, height: tmp2 };
  fn.__closure = obj2;
  fn.__workletHash = 1628632614770;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = launchPadSharedState(launchPadShown[6]);
  class P {
    constructor() {
      let obj2;
      let withSpring;
      const obj = { opacity: withSpring(obj2.interpolate(launchPadSharedState.get(), [0, 1], [0, 0.6]), LAUNCH_PAD_SPRING_CONFIG, "animate-always") };
      withSpring = spring.withSpring;
      spring;
      obj2 = ReanimatedRexport;
      return obj;
    }
  }
  P.__closure = { withSpring: launchPadSharedState(launchPadShown[7]).withSpring, interpolate: launchPadSharedState(launchPadShown[6]).interpolate, launchPadSharedState, LAUNCH_PAD_SPRING_CONFIG };
  P.__workletHash = 6964438968188;
  P.__initData = __initData2;
  const obj5 = { launchPadCoverStyles: items, launchPadStyles: items1 };
  items = [tmp.launchPadCover, ];
  ({ withSpring: launchPadSharedState(launchPadShown[7]).withSpring, interpolate: launchPadSharedState(launchPadShown[6]).interpolate, launchPadSharedState, LAUNCH_PAD_SPRING_CONFIG });
  items[1] = obj3.useAnimatedStyle(P);
  items1 = [tmp.launchPad, animatedStyle, { paddingTop: top }];
  return obj5;
};
