// Module ID: 17327
// Function ID: 17328
// Name: BountiesModalEndCard
// Dependencies: [17, 21, 5170, 1652, 5402, 5405, 5747, 17316, 2]
// Exports: default

// Module 17327 (BountiesModalEndCard)
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5402 */;
import timingPresets from "timingPresets" /* 5405 */;
import LinearGradientDefault from "LinearGradient" /* 5747 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let num;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
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
let closure_8 = { code: "(function BountiesModalEndCardTsx1(){let[withTiming,visible,timingStandard]=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};})" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndCard.tsx");

export default function BountiesModalEndCard(visible) {
  let bounty;
  let items2;
  let items3;
  let sourceQuestContent;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  visible = visible.visible;
  ({ bounty, sourceQuestContent } = visible);
  let tmp = closure_7();
  _mod1652;
  const items = [closure_8, timing_timing.withTiming, visible, timingPresets.timingStandard];
  let c0;
  let c1;
  let c2;
  [tmp4, tmp5, tmp6, tmp7] = items;
  class BountiesModalEndCardTsx1 {
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
  const items1 = [tmp5, tmp6, tmp7];
  BountiesModalEndCardTsx1.__closure = items1;
  BountiesModalEndCardTsx1.__workletHash = 9535355368761;
  BountiesModalEndCardTsx1.__initData = tmp4;
  if (visible) {
    let obj = { style: items2, pointerEvents: "box-none", children: items3 };
    items2 = [tmp.container, tmp8];
    const obj2 = { style: tmp.backdropTint };
    const View = _modDef1652.View;
    items3 = [hasOwnProperty(React3, obj2), , ];
    const obj3 = { colors: ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"], locations: [0, 0.841], style: tmp.backdropGradient };
    items3[1] = hasOwnProperty(LinearGradientDefault, obj3);
    class BountiesModalEndCardTsx1 {
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
    visible = metroRequire(View, obj);
  }
  return visible;
};
