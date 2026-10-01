// Module ID: 14563
// Function ID: 14564
// Name: BountiesModalProgress
// Dependencies: [32, 19, 17, 21, 4836, 576, 4566, 4837, 4840, 2]
// Exports: default

// Module 14563 (BountiesModalProgress)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4837 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let num, tmp2, tmp3;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const timingPresets = tmp(4840);
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  let obj2;
  let rect;
  let rect1;
  const obj = { progressContainer: { height: 4 }, progressTrack: obj2, progressBar: rect, progressBarGlowLayer: rect1 };
  obj2 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, opacity: 0.54 };
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  rect = { position: "absolute", height: "100%", left: 0, bottom: 0, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_300, shadowOffset: { width: 0, height: 0 }, shadowRadius: 8, shadowOpacity: 1, elevation: 4, shadowColor: "#30C773" };
  rect1 = { position: "absolute", height: "100%", left: 0, bottom: 0, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.unsafe_rawColors.GREEN_300, shadowOffset: { width: 0, height: 0 }, shadowRadius: 12, shadowOpacity: 1, elevation: 8, shadowColor: nativeDefault.unsafe_rawColors.GREEN_300 };
  return obj;
});
const __initData = { code: "function BountiesModalProgressTsx1(){const{withTiming,visible,timingFast}=this.__closure;return{opacity:withTiming(visible?1:0,timingFast)};}" };
const __initData2 = { code: "function BountiesModalProgressTsx2(){const{withTiming,progress,shouldSkipAnimation,timingNone,timingFast}=this.__closure;return{width:withTiming(progress*100+\"%\",shouldSkipAnimation?timingNone:timingFast,'animate-always')};}" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalProgress.tsx");

export default function BountiesModalProgress(progress) {
  let items;
  let items1;
  let items2;
  let items3;
  let shouldSkipAnimation;
  let tmp4;
  progress = progress.progress;
  const visible = progress.visible;
  shouldSkipAnimation = undefined;
  const style = progress.style;
  let tmp = closure_9();
  [shouldSkipAnimation, tmp4] = react.useState(false);
  const tmp5 = _slicedToArray(react.useState(progress), 2);
  const first1 = tmp5[0];
  if (progress !== first1) {
    tmp5[1](progress);
    tmp4(progress < first1);
  }
  let obj = progress(shouldSkipAnimation[6]);
  class O {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      tmp3 = closure_0(closure_2[7]);
      num = 0;
      withTiming = tmp3.withTiming;
      if (visible) {
        num = 1;
      }
      obj = { opacity: withTiming(num, tmp(tmp2[8]).timingFast) };
      return obj;
    }
  }
  O.__closure = { withTiming: progress(shouldSkipAnimation[7]).withTiming, visible, timingFast: progress(shouldSkipAnimation[8]).timingFast };
  O.__workletHash = 5158131592262;
  O.__initData = __initData;
  ({ withTiming: progress(shouldSkipAnimation[7]).withTiming, visible, timingFast: progress(shouldSkipAnimation[8]).timingFast });
  const animatedStyle = obj.useAnimatedStyle(O);
  const obj3 = progress(shouldSkipAnimation[6]);
  class B {
    constructor() {
      tmp = closure_0(closure_2[7]);
      withTiming = tmp.withTiming;
      result = 100 * progress;
      tmp3 = closure_0(closure_2[8]);
      obj = { width: withTiming(`${tmp2}%`, closure_2 ? tmp3.timingNone : tmp3.timingFast, "animate-always") };
      return obj;
    }
  }
  B.__closure = { withTiming: progress(shouldSkipAnimation[7]).withTiming, progress, shouldSkipAnimation, timingNone: progress(shouldSkipAnimation[8]).timingNone, timingFast: progress(shouldSkipAnimation[8]).timingFast };
  B.__workletHash = 15586067343237;
  B.__initData = __initData2;
  ({ withTiming: progress(shouldSkipAnimation[7]).withTiming, progress, shouldSkipAnimation, timingNone: progress(shouldSkipAnimation[8]).timingNone, timingFast: progress(shouldSkipAnimation[8]).timingFast });
  const animatedStyle1 = obj3.useAnimatedStyle(B);
  const obj5 = { style: items, children: items1 };
  items = [tmp.progressContainer, style, animatedStyle];
  const obj6 = { style: tmp.progressTrack };
  const View = visible(shouldSkipAnimation[6]).View;
  items1 = [closure_7(closure_6, obj6), , ];
  const obj7 = { style: items2 };
  items2 = [tmp.progressBarGlowLayer, animatedStyle1];
  items1[1] = closure_7(visible(shouldSkipAnimation[6]).View, obj7);
  const obj8 = { style: items3 };
  items3 = [tmp.progressBar, animatedStyle1];
  items1[2] = closure_7(visible(shouldSkipAnimation[6]).View, obj8);
  return closure_8(View, obj5);
};
export const PROGRESS_BAR_HEIGHT = 4;
