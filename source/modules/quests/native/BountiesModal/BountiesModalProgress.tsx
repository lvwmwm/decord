// Module ID: 13933
// Function ID: 106675
// Name: BountiesModalProgress
// Dependencies: [57, 31, 27, 33, 4130, 689, 3991, 4131, 4134, 2]
// Exports: default

// Module 13933 (BountiesModalProgress)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ StyleSheet: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = { progressContainer: { height: 4 } };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj["borderRadius"] = importDefault(689).radii.round;
  obj["backgroundColor"] = importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj["opacity"] = 0.54;
  obj.progressTrack = obj;
  obj = { position: "absolute", height: "100%", left: 0, bottom: 0, borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).unsafe_rawColors.GREEN_300, shadowOffset: { width: 0, height: 0 }, shadowRadius: 8, shadowOpacity: 1, elevation: 4, shadowColor: "#30C773" };
  obj.progressBar = obj;
  const obj1 = { position: "absolute", height: "100%", left: 0, bottom: 0, borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).unsafe_rawColors.GREEN_300, shadowOffset: { width: 0, height: 0 }, shadowRadius: 12, shadowOpacity: 1, elevation: 8, shadowColor: importDefault(689).unsafe_rawColors.GREEN_300 };
  obj.progressBarGlowLayer = obj1;
  return obj;
});
let closure_10 = { code: "function BountiesModalProgressTsx1(){const{withTiming,visible,timingFast}=this.__closure;return{opacity:withTiming(visible?1:0,timingFast)};}" };
let closure_11 = { code: "function BountiesModalProgressTsx2(){const{withTiming,progress,shouldSkipAnimation,timingNone,timingFast}=this.__closure;return{width:withTiming(progress*100+\"%\",shouldSkipAnimation?timingNone:timingFast,'animate-always')};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalProgress.tsx");

export default function BountiesModalProgress(progress) {
  progress = progress.progress;
  const visible = progress.visible;
  const tmp = callback4();
  let tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const tmp4 = callback(React.useState(progress), 2);
  const first1 = tmp4[0];
  if (progress !== first1) {
    tmp4[1](progress);
    tmp2[1](progress < first1);
  }
  let obj = progress(first[6]);
  class O {
    constructor() {
      obj = {};
      obj2 = progress(outer1_2[7]);
      num = 0;
      if (visible) {
        num = 1;
      }
      obj.opacity = obj2.withTiming(num, progress(outer1_2[8]).timingFast);
      return obj;
    }
  }
  obj = { withTiming: progress(first[7]).withTiming, visible, timingFast: progress(first[8]).timingFast };
  O.__closure = obj;
  O.__workletHash = 5158131592262;
  O.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(O);
  let obj2 = progress(first[6]);
  class B {
    constructor() {
      obj = {};
      obj2 = progress(outer1_2[7]);
      result = 100 * progress;
      tmp2 = progress(outer1_2[8]);
      obj.width = obj2.withTiming(`${tmp}%`, closure_2 ? tmp2.timingNone : tmp2.timingFast, "animate-always");
      return obj;
    }
  }
  obj = { withTiming: progress(first[7]).withTiming, progress, shouldSkipAnimation: first, timingNone: progress(first[8]).timingNone, timingFast: progress(first[8]).timingFast };
  B.__closure = obj;
  B.__workletHash = 15586067343237;
  B.__initData = closure_11;
  const animatedStyle1 = obj2.useAnimatedStyle(B);
  const obj1 = { style: items };
  items = [tmp.progressContainer, progress.style, animatedStyle];
  obj2 = { style: tmp.progressTrack };
  const items1 = [callback2(closure_6, obj2), , ];
  const items2 = [tmp.progressBarGlowLayer, animatedStyle1];
  items1[1] = callback2(visible(first[6]).View, { style: items2 });
  const items3 = [tmp.progressBar, animatedStyle1];
  items1[2] = callback2(visible(first[6]).View, { style: items3 });
  obj1.children = items1;
  return callback3(visible(first[6]).View, obj1);
};
export const PROGRESS_BAR_HEIGHT = 4;
