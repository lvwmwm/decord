// Module ID: 13846
// Function ID: 104653
// Name: BountiesModalEndCard
// Dependencies: []
// Exports: default

// Module 13846 (BountiesModalEndCard)
const _module = require(dependencyMap[0]);
({ StyleSheet: closure_3, View: closure_4 } = _module);
const _module1 = require(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = _module1);
const _module2 = require(dependencyMap[2]);
let closure_7 = _module2.createStyles(() => {
  let obj = { container: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false } };
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
const _module3 = require(dependencyMap[8]);
const result = _module3.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalEndCard.tsx");

export default function BountiesModalEndCard(visible) {
  let bounty;
  let sourceQuestContent;
  visible = visible.visible;
  const require = visible;
  ({ bounty, sourceQuestContent } = visible);
  const tmp = callback3();
  require(dependencyMap[3]);
  const fn = function y() {
    const obj = {};
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj.opacity = visible(closure_2[4]).withTiming(num, visible(closure_2[5]).timingStandard);
    return obj;
  };
  let obj = { withTiming: require(dependencyMap[4]).withTiming, visible, timingStandard: require(dependencyMap[5]).timingStandard };
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
    const obj1 = { colors: [], locations: [95.192, 147.067], style: tmp.backdropGradient };
    items1[1] = callback(importDefault(dependencyMap[6]), obj1);
    const obj2 = { bounty, sourceQuestContent };
    items1[2] = callback(importDefault(dependencyMap[7]), obj2);
    obj.children = items1;
    visible = callback2(importDefault(dependencyMap[3]).View, obj);
  }
  return visible;
};
