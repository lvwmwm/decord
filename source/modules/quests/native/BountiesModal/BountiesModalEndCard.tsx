// Module ID: 14022
// Function ID: 107264
// Name: BountiesModalEndCard
// Dependencies: [27, 33, 4131, 3992, 4132, 4135, 4555, 14004, 2]
// Exports: default

// Module 14022 (BountiesModalEndCard)
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = { container: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" } };
  obj = {};
  const merged = Object.assign(closure_3.absoluteFillObject);
  obj["backgroundColor"] = "rgba(241, 251, 169, 0.15)";
  obj.backdropTint = obj;
  obj = {};
  const merged1 = Object.assign(closure_3.absoluteFillObject);
  obj.backdropGradient = obj;
  return obj;
});
let closure_8 = { code: "function BountiesModalEndCardTsx1(){const{withTiming,visible,timingStandard}=this.__closure;return{opacity:withTiming(visible?1:0,timingStandard)};}" };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndCard.tsx");

export default function BountiesModalEndCard(visible) {
  let bounty;
  let sourceQuestContent;
  visible = visible.visible;
  ({ bounty, sourceQuestContent } = visible);
  const tmp = callback3();
  visible(3992);
  const fn = function y() {
    const obj = {};
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj.opacity = visible(outer1_2[4]).withTiming(num, visible(outer1_2[5]).timingStandard);
    return obj;
  };
  let obj = { withTiming: visible(4132).withTiming, visible, timingStandard: visible(4135).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 15062259404736;
  fn.__initData = closure_8;
  if (visible) {
    obj = {};
    const items = [tmp.container, tmp3];
    obj.style = items;
    obj.pointerEvents = "box-none";
    obj = { style: tmp.backdropTint };
    const items1 = [callback(closure_4, obj), , ];
    const obj1 = { colors: ["rgba(0, 0, 0, 0.60)", "rgba(0, 0, 0, 1)"], locations: [0, 0.841], style: tmp.backdropGradient };
    items1[1] = callback(importDefault(4555), obj1);
    const obj2 = { bounty, sourceQuestContent };
    items1[2] = callback(importDefault(14004), obj2);
    obj.children = items1;
    visible = callback2(importDefault(3992).View, obj);
  }
  return visible;
};
