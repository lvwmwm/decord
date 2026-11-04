// Module ID: 19345
// Function ID: 19346
// Name: useLaunchPadAnimatedStyles
// Dependencies: [11725, 1377, 5141, 12271, 13033, 1627, 1652, 5771, 2]
// Exports: default

// Module 19345 (useLaunchPadAnimatedStyles)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5771 */;
import LaunchPadConstants from "LaunchPadConstants" /* 11725 */;
import useAnimatedKeyboardHeightDefault from "useAnimatedKeyboardHeight" /* 12271 */;
import useWindowDimensionsSharedValueDefault from "useWindowDimensionsSharedValue" /* 13033 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let _undefined, _undefined2;

const LAUNCH_PAD_SPRING_CONFIG = LaunchPadConstants.LAUNCH_PAD_SPRING_CONFIG;
let closure_4 = PlatformUtils.isAndroid();
let closure_5 = createStyles.createStyles({ launchPad: { position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1 }, launchPadCover: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#000" } });
let closure_6 = { code: "(function useLaunchPadAnimatedStylesNativeTsx1(finished){let[gestureState,launchPadSharedState,launchPadShown]=this.__closure;if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}})" };
let closure_7 = { code: "(function useLaunchPadAnimatedStylesNativeTsx2(){let[withSpring,interpolate,launchPadSharedState,windowDimensions,LAUNCH_PAD_SPRING_CONFIG,_worklet_6239738479703_init_data,gestureState,launchPadShown,IS_ANDROID,height]=this.__closure;return{transform:[{translateX:withSpring(interpolate(launchPadSharedState.get(),[0,1],[windowDimensions.get().width-16,0]),LAUNCH_PAD_SPRING_CONFIG,'animate-always',function useLaunchPadAnimatedStylesNativeTsx1Factory([_worklet_6239738479703_init_data,gestureState,launchPadSharedState,launchPadShown]){const useLaunchPadAnimatedStylesNativeTsx1=function(finished){if(!finished||gestureState.get().active)return;if(launchPadSharedState.get()===1||launchPadSharedState.get()===0){launchPadShown.set(launchPadSharedState.get()===1);}};useLaunchPadAnimatedStylesNativeTsx1.__closure=[gestureState,launchPadSharedState,launchPadShown];useLaunchPadAnimatedStylesNativeTsx1.__workletHash=6239738479703;useLaunchPadAnimatedStylesNativeTsx1.__initData=_worklet_6239738479703_init_data;return useLaunchPadAnimatedStylesNativeTsx1;}([_worklet_6239738479703_init_data,gestureState,launchPadSharedState,launchPadShown]))}],bottom:IS_ANDROID?0:height.get()};})" };
let closure_8 = { code: "(function useLaunchPadAnimatedStylesNativeTsx3(){let[withSpring,interpolate,launchPadSharedState,LAUNCH_PAD_SPRING_CONFIG]=this.__closure;return{opacity:withSpring(interpolate(launchPadSharedState.get(),[0,1],[0,0.6]),LAUNCH_PAD_SPRING_CONFIG,'animate-always')};})" };
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadAnimatedStyles.native.tsx");

export default function useLaunchpadAnimatedStyles(launchPadSharedState) {
  let gestureState;
  let items4;
  let items5;
  let launchPadShown;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp8;
  let tmp9;
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  ({ gestureState, launchPadShown } = launchPadSharedState);
  let tmp = closure_5();
  let tmp3 = useAnimatedKeyboardHeightDefault();
  const tmp4 = useWindowDimensionsSharedValueDefault();
  const tmp5 = require;
  const top = useSafeAreaInsetsDefault().top;
  const tmp6 = _mod1652;
  let items = [closure_7, , , , , , , , , , ];
  const useAnimatedStyle = tmp6.useAnimatedStyle;
  items[1] = spring_spring.withSpring;
  items[2] = _mod1652.interpolate;
  items[3] = launchPadSharedState;
  items[4] = tmp4;
  items[5] = LAUNCH_PAD_SPRING_CONFIG;
  items[6] = closure_6;
  items[7] = gestureState;
  items[8] = launchPadShown;
  items[9] = closure_4;
  items[10] = tmp3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  function useLaunchPadAnimatedStylesNativeTsx2() {
    let items3;
    let num;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let useLaunchPadAnimatedStylesNativeTsx1;
    let tmp = c0;
    const value = _undefined2.get();
    const items = [_undefined3.get().width - 16, 0];
    let tmp3 = _undefined(value, [0, 1], items);
    const items1 = [c5, c6, _undefined2, c7];
    c0 = undefined;
    _undefined = undefined;
    _undefined2 = undefined;
    [tmp5, tmp6, tmp7, tmp8] = items1;
    const obj = { transform: items3, bottom: num };
    const obj2 = { translateX: tmp(tmp3, c4, "animate-always", useLaunchPadAnimatedStylesNativeTsx1) };
    useLaunchPadAnimatedStylesNativeTsx1 = function useLaunchPadAnimatedStylesNativeTsx1(arg0) {
      const tmp = arg0 && !_undefined.get().active;
      if (tmp) {
        const tmp3 = 1 !== _undefined2.get() && 0 !== obj.get();
        if (!tmp3) {
          const result = _undefined3.set(1 === obj.get());
        }
      }
    };
    const items2 = [tmp6, tmp7, tmp8];
    useLaunchPadAnimatedStylesNativeTsx1.__closure = items2;
    useLaunchPadAnimatedStylesNativeTsx1.__workletHash = 6239738479703;
    useLaunchPadAnimatedStylesNativeTsx1.__initData = tmp5;
    items3 = [obj2];
    num = 0;
    if (!c8) {
      num = _undefined4.get();
    }
    return obj;
  }
  let items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  useLaunchPadAnimatedStylesNativeTsx2.__closure = items1;
  useLaunchPadAnimatedStylesNativeTsx2.__workletHash = 1394437830917;
  useLaunchPadAnimatedStylesNativeTsx2.__initData = tmp8;
  const tmp7 = LAUNCH_PAD_SPRING_CONFIG;
  const animatedStyle = useAnimatedStyle(useLaunchPadAnimatedStylesNativeTsx2);
  let items2 = [closure_8, , , , ];
  const useAnimatedStyle2 = _mod1652.useAnimatedStyle;
  _mod1652;
  items2[1] = spring_spring.withSpring;
  items2[2] = _mod1652.interpolate;
  items2[3] = launchPadSharedState;
  items2[4] = tmp7;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp21, tmp22, tmp23, tmp24, tmp25] = items2;
  function useLaunchPadAnimatedStylesNativeTsx3() {
    const obj = { opacity: _undefined(_undefined2(_undefined3.get(), [0, 1], [0, 0.6]), c3, "animate-always") };
    return obj;
  }
  let items3 = [tmp22, tmp23, tmp24, tmp25];
  useLaunchPadAnimatedStylesNativeTsx3.__closure = items3;
  useLaunchPadAnimatedStylesNativeTsx3.__workletHash = 7887737074117;
  useLaunchPadAnimatedStylesNativeTsx3.__initData = tmp21;
  let obj = { launchPadCoverStyles: items4, launchPadStyles: items5 };
  items4 = [tmp.launchPadCover, useAnimatedStyle2(useLaunchPadAnimatedStylesNativeTsx3)];
  items5 = [tmp.launchPad, animatedStyle, { paddingTop: top }];
  return obj;
};
