// Module ID: 13819
// Function ID: 104519
// Name: BountiesModalProgress
// Dependencies: []
// Exports: default

// Module 13819 (BountiesModalProgress)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ StyleSheet: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles(() => {
  let obj = { progressContainer: { height: 4 } };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj["borderRadius"] = importDefault(dependencyMap[5]).radii.round;
  obj["backgroundColor"] = importDefault(dependencyMap[5]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj["opacity"] = 0.54;
  obj.progressTrack = obj;
  obj = { borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.GREEN_300, shadowOffset: { "Null": "%FunctionPrototype%", "Null": "paddingStart" } };
  obj.progressBar = obj;
  obj.progressBarGlowLayer = { borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.GREEN_300, shadowOffset: { "Null": "%FunctionPrototype%", "Null": "paddingStart" }, shadowColor: importDefault(dependencyMap[5]).unsafe_rawColors.GREEN_300 };
  return obj;
});
let closure_10 = { code: "function BountiesModalProgressTsx1(){const{withTiming,visible,timingFast}=this.__closure;return{opacity:withTiming(visible?1:0,timingFast)};}" };
let closure_11 = { code: "function BountiesModalProgressTsx2(){const{withTiming,progress,shouldSkipAnimation,timingNone,timingFast}=this.__closure;return{width:withTiming(progress*100+\"%\",shouldSkipAnimation?timingNone:timingFast,'animate-always')};}" };
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalProgress.tsx");

export default function BountiesModalProgress(progress) {
  progress = progress.progress;
  const arg1 = progress;
  const visible = progress.visible;
  const importDefault = visible;
  const tmp = callback4();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const tmp4 = callback(React.useState(progress), 2);
  const first1 = tmp4[0];
  if (progress !== first1) {
    tmp4[1](progress);
    tmp2[1](progress < first1);
  }
  let obj = arg1(dependencyMap[6]);
  class O {
    constructor() {
      obj = {};
      obj2 = progress(closure_2[7]);
      num = 0;
      if (visible) {
        num = 1;
      }
      obj.opacity = obj2.withTiming(num, progress(closure_2[8]).timingFast);
      return obj;
    }
  }
  obj = { withTiming: arg1(dependencyMap[7]).withTiming, visible, timingFast: arg1(dependencyMap[8]).timingFast };
  O.__closure = obj;
  O.__workletHash = 5158131592262;
  O.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(O);
  let obj2 = arg1(dependencyMap[6]);
  class B {
    constructor() {
      obj = {};
      obj2 = progress(closure_2[7]);
      result = 100 * progress;
      tmp2 = progress(closure_2[8]);
      obj.width = obj2.withTiming(`${tmp}%`, closure_2 ? tmp2.timingNone : tmp2.timingFast, "animate-always");
      return obj;
    }
  }
  obj = { withTiming: arg1(dependencyMap[7]).withTiming, progress, shouldSkipAnimation: first, timingNone: arg1(dependencyMap[8]).timingNone, timingFast: arg1(dependencyMap[8]).timingFast };
  B.__closure = obj;
  B.__workletHash = 15586067343237;
  B.__initData = closure_11;
  const animatedStyle1 = obj2.useAnimatedStyle(B);
  const obj1 = { style: items };
  const items = [tmp.progressContainer, progress.style, animatedStyle];
  obj2 = { style: tmp.progressTrack };
  const items1 = [callback2(closure_6, obj2), , ];
  const items2 = [tmp.progressBarGlowLayer, animatedStyle1];
  items1[1] = callback2(importDefault(dependencyMap[6]).View, { style: items2 });
  const items3 = [tmp.progressBar, animatedStyle1];
  items1[2] = callback2(importDefault(dependencyMap[6]).View, { style: items3 });
  obj1.children = items1;
  return callback3(importDefault(dependencyMap[6]).View, obj1);
};
export const PROGRESS_BAR_HEIGHT = 4;
