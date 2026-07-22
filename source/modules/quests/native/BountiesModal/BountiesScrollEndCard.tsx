// Module ID: 13826
// Function ID: 104558
// Name: BountiesScrollEndCard
// Dependencies: []
// Exports: default

// Module 13826 (BountiesScrollEndCard)
importAll(dependencyMap[0]);
({ Pressable: closure_3, StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles(() => {
  let obj = {};
  obj = {};
  const merged = Object.assign(closure_4.absoluteFillObject);
  obj.container = obj;
  obj = {};
  const merged1 = Object.assign(closure_4.absoluteFillObject);
  obj["backgroundColor"] = "rgba(0, 0, 0, 0.6)";
  obj.backdropTint = obj;
  const merged2 = Object.assign(closure_4.absoluteFillObject);
  obj.backdropGradient = {};
  const obj2 = {};
  const merged3 = Object.assign(closure_4.absoluteFillObject);
  obj2["justifyContent"] = "center";
  obj2["alignItems"] = "center";
  obj.overlayContent = obj2;
  const obj3 = {};
  const merged4 = Object.assign(closure_4.absoluteFillObject);
  obj3["justifyContent"] = "center";
  obj3["alignItems"] = "center";
  obj.pressable = obj3;
  obj.textBlock = { alignItems: "center", gap: importDefault(dependencyMap[4]).space.PX_4 };
  const obj1 = {};
  const obj4 = { alignItems: "center", gap: importDefault(dependencyMap[4]).space.PX_4 };
  obj.replayIcon = { margin: importDefault(dependencyMap[4]).space.PX_12 };
  const obj5 = { margin: importDefault(dependencyMap[4]).space.PX_12 };
  obj.endedCtaButtonsContainer = { position: "absolute", left: importDefault(dependencyMap[4]).space.PX_16, right: importDefault(dependencyMap[4]).space.PX_16, bottom: importDefault(dependencyMap[4]).space.PX_16 };
  return obj;
});
let closure_9 = { code: "function BountiesScrollEndCardTsx1(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx");

export default function BountiesScrollEndCard(isScrollingInBoundsSharedValue) {
  let bounty;
  let isActive;
  let visible;
  ({ bounty, visible, isActive } = isScrollingInBoundsSharedValue);
  const arg1 = isActive;
  isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
  const importDefault = isScrollingInBoundsSharedValue;
  const sourceQuestContent = isScrollingInBoundsSharedValue.sourceQuestContent;
  let endedCtaButtonsContainer = callback3();
  let obj = arg1(dependencyMap[5]);
  const isBountiesVerticalScrollExperimentEnabled = obj.useIsBountiesVerticalScrollExperimentEnabled("BountiesScrollEndCard");
  let obj1 = arg1(dependencyMap[6]);
  const bountyCtaInfo = obj1.getBountyCtaInfo(bounty);
  const intl = arg1(dependencyMap[7]).intl;
  const stringResult = intl.string(arg1(dependencyMap[7]).t.9UtZAY);
  let obj2 = arg1(dependencyMap[8]);
  obj = { visible, entranceTiming: arg1(dependencyMap[9]).timingStandard, exitTiming: arg1(dependencyMap[9]).timingStandard };
  const visibilityTransition = obj2.useVisibilityTransition(obj);
  const shouldRender = visibilityTransition.shouldRender;
  let obj4 = 10;
  let obj5 = arg1(dependencyMap[10]);
  const fn = function h() {
    if (null != isScrollingInBoundsSharedValue) {
      const value = isScrollingInBoundsSharedValue.get();
    }
    const obj = {};
    let num = 0;
    if (isActive) {
      num = 0;
      if (true !== value) {
        num = 1;
      }
    }
    obj.opacity = isActive(closure_2[11]).withTiming(num, isActive(closure_2[9]).timingStandard);
    return obj;
  };
  obj = { isScrollingInBoundsSharedValue, withTiming: arg1(dependencyMap[11]).withTiming, isActive, timingStandard: arg1(dependencyMap[9]).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 13628650628423;
  fn.__initData = closure_9;
  let animatedStyle = obj5.useAnimatedStyle(fn);
  if (!shouldRender) {
    return shouldRender;
  } else {
    obj1 = {};
    const items = [endedCtaButtonsContainer.container, visibilityTransition.opacityStyle];
    obj1.style = items;
    let str = "box-none";
    obj1.pointerEvents = "box-none";
    obj2 = { style: endedCtaButtonsContainer.backdropTint, pointerEvents: "none" };
    const items1 = [callback(closure_5, obj2), , ];
    const obj3 = { colors: [null, null], style: endedCtaButtonsContainer.backdropGradient, pointerEvents: "none" };
    items1[1] = callback(importDefault(dependencyMap[12]), obj3);
    if (isBountiesVerticalScrollExperimentEnabled) {
      obj4 = {};
      const items2 = [endedCtaButtonsContainer.overlayContent, animatedStyle];
      obj4.style = items2;
      obj4.pointerEvents = str;
      obj5 = { bounty, sourceQuestContent, disabled: !isActive };
      const items3 = [callback(importDefault(dependencyMap[13]), obj5), ];
      animatedStyle = closure_5;
      const obj6 = {};
      endedCtaButtonsContainer = endedCtaButtonsContainer.endedCtaButtonsContainer;
      obj6.style = endedCtaButtonsContainer;
      obj6.pointerEvents = str;
      const obj7 = {
        bounty,
        visible,
        sourceQuestContent,
        onClose() {

            },
        showCloseButton: false
      };
      isActive = !isActive;
      obj7.disabled = isActive;
      str = callback(importDefault(dependencyMap[14]), obj7);
      obj6.children = str;
      items3[1] = callback(closure_5, obj6);
      obj4.children = items3;
      let tmp11Result = callback2(importDefault(dependencyMap[obj4]).View, obj4);
    } else {
      const obj8 = {};
      let onReplay;
      if (isActive) {
        onReplay = isScrollingInBoundsSharedValue.onReplay;
      }
      obj8.onPress = onReplay;
      obj8.disabled = !isActive;
      obj8.accessibilityRole = "button";
      obj8.accessibilityLabel = stringResult;
      obj8.style = endedCtaButtonsContainer.pressable;
      const obj9 = {};
      const items4 = [endedCtaButtonsContainer.overlayContent, animatedStyle];
      obj9.style = items4;
      const obj10 = { style: endedCtaButtonsContainer.textBlock };
      const obj11 = { children: bountyCtaInfo.label };
      const items5 = [callback(arg1(dependencyMap[15]).Text, obj11), ];
      const obj12 = { cachedAt: null, edpbxy: "153e24032a5a8790888aef41caaf4b2c", children: stringResult };
      items5[1] = callback(arg1(dependencyMap[15]).Text, obj12);
      obj10.children = items5;
      const items6 = [callback2(closure_5, obj10), ];
      const obj13 = { accessible: false, color: importDefault(dependencyMap[4]).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, style: endedCtaButtonsContainer.replayIcon };
      items6[1] = callback(arg1(dependencyMap[16]).RetryIcon, obj13);
      obj9.children = items6;
      obj8.children = callback2(importDefault(dependencyMap[obj4]).View, obj9);
      tmp11Result = callback(closure_3, obj8);
      const tmp11 = callback;
      const tmp12 = closure_3;
    }
    items1[2] = tmp11Result;
    obj1.children = items1;
    callback2(importDefault(dependencyMap[obj4]).View, obj1);
    const tmp6 = callback2;
  }
};
