// Module ID: 17217
// Function ID: 17218
// Name: BountiesModalProgress
// Dependencies: [32, 19, 17, 21, 5143, 575, 1652, 5380, 5383, 2]
// Exports: default

// Module 17217 (BountiesModalProgress)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5380 */;
import timingPresets from "timingPresets" /* 5383 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let num;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
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
let closure_10 = { code: "(function BountiesModalProgressTsx1(){let[withTiming,visible,timingFast]=this.__closure;return{opacity:withTiming(visible?1:0,timingFast)};})" };
let closure_11 = { code: "(function BountiesModalProgressTsx2(){let[withTiming,progress,shouldSkipAnimation,timingNone,timingFast]=this.__closure;return{width:withTiming(progress*100+\"%\",shouldSkipAnimation?timingNone:timingFast,'animate-always')};})" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalProgress.tsx");

export default function BountiesModalProgress(progress) {
  let items4;
  let items5;
  let items6;
  let items7;
  let style;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp3;
  let tmp4;
  let visible;
  progress = progress.progress;
  ({ visible, style } = progress);
  let tmp = closure_9();
  [tmp3, tmp4] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray(react.useState(progress), 2);
  const first = tmp5[0];
  if (progress !== first) {
    tmp5[1](progress);
    tmp4(progress < first);
  }
  const items = [closure_10, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = timing_timing.withTiming;
  items[2] = visible;
  items[3] = timingPresets.timingFast;
  let c0;
  let c1;
  let c2;
  [tmp12, tmp13, tmp14, tmp15] = items;
  class BountiesModalProgressTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items1 = [tmp13, tmp14, tmp15];
  BountiesModalProgressTsx1.__closure = items1;
  BountiesModalProgressTsx1.__workletHash = 13607903947935;
  BountiesModalProgressTsx1.__initData = tmp12;
  const animatedStyle = useAnimatedStyle(BountiesModalProgressTsx1);
  const items2 = [closure_11, , , , , ];
  const useAnimatedStyle2 = _mod1652.useAnimatedStyle;
  _mod1652;
  items2[1] = timing_timing.withTiming;
  items2[2] = progress;
  items2[3] = tmp3;
  items2[4] = timingPresets.timingNone;
  items2[5] = timingPresets.timingFast;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items2;
  class BountiesModalProgressTsx2 {
    constructor() {
      obj = { width: closure_0(`${100 * closure_1}%`, closure_2 ? closure_3 : closure_4, "animate-always") };
      return obj;
    }
  }
  const items3 = [tmp19, tmp20, tmp21, tmp22, tmp23];
  BountiesModalProgressTsx2.__closure = items3;
  BountiesModalProgressTsx2.__workletHash = 7029081522716;
  BountiesModalProgressTsx2.__initData = tmp18;
  const animatedStyle2 = useAnimatedStyle2(BountiesModalProgressTsx2);
  let obj = { style: items4, children: items5 };
  items4 = [tmp.progressContainer, style, animatedStyle];
  const obj2 = { style: tmp.progressTrack };
  const View = _modDef1652.View;
  items5 = [metroImportDefault(metroRequire, obj2), , ];
  const obj3 = { style: items6 };
  items6 = [tmp.progressBarGlowLayer, animatedStyle2];
  items5[1] = metroImportDefault(_modDef1652.View, obj3);
  const obj4 = { style: items7 };
  items7 = [tmp.progressBar, animatedStyle2];
  items5[2] = metroImportDefault(_modDef1652.View, obj4);
  return metroImportAll(View, obj);
};
export const PROGRESS_BAR_HEIGHT = 4;
