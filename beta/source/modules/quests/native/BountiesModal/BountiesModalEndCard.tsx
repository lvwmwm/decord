// Module ID: 14593
// Function ID: 14594
// Name: BountiesModalEndCard
// Dependencies: [17, 21, 4836, 4566, 4837, 4840, 5293, 14581, 2]
// Exports: default

// Module 14593 (BountiesModalEndCard)
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import BountiesEndCardPressableCtaDefault from "BountiesEndCardPressableCta" /* 14581 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let tmp;
const timingPresets = tmp(4840);
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles(() => {
  let obj2;
  let obj3;
  const obj = { container: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }, backdropTint: obj2, backdropGradient: obj3 };
  obj2 = { backgroundColor: "rgba(241, 251, 169, 0.15)" };
  const merged = Object.assign(_false.absoluteFillObject);
  obj3 = {};
  const merged1 = Object.assign(_false.absoluteFillObject);
  return obj;
});
const __initData = { code: "function BountiesModalEndCardTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndCard.tsx");

export default function BountiesModalEndCard(visible) {
  let bounty;
  let items;
  let items1;
  let sourceQuestContent;
  visible = visible.visible;
  ({ bounty, sourceQuestContent } = visible);
  let tmp = closure_7();
  const tmp3 = visible(4566);
  const fn = function y() {
    let num = 0;
    const withTiming = timing.withTiming;
    timing;
    if (visible) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, timingPresets.timingStandard) };
    return obj;
  };
  let obj = { withTiming: visible(4837).withTiming, visible, timingStandard: visible(4840).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 15062259404736;
  fn.__initData = __initData;
  if (visible) {
    const obj2 = { style: items, pointerEvents: "box-none", children: items1 };
    items = [tmp.container, tmp4];
    const obj3 = { style: tmp.backdropTint };
    const View = ReanimatedRexportDefault.View;
    items1 = [closure_5(closure_4, obj3), , ];
    const obj4 = { colors: ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"], locations: [0, 0.841], style: tmp.backdropGradient };
    items1[1] = closure_5(LinearGradientDefault, obj4);
    const obj5 = { bounty, sourceQuestContent };
    items1[2] = closure_5(BountiesEndCardPressableCtaDefault, obj5);
    visible = closure_6(View, obj2);
  }
  return visible;
};
