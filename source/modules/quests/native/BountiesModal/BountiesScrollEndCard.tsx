// Module ID: 13991
// Function ID: 107038
// Name: BountiesScrollEndCard
// Dependencies: [31, 27, 33, 4130, 689, 10869, 13989, 1212, 13960, 4134, 3991, 4131, 4554, 13992, 13994, 4126, 9981, 2]
// Exports: default

// Module 13991 (BountiesScrollEndCard)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ Pressable: closure_3, StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles(() => {
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
  obj.textBlock = { alignItems: "center", gap: importDefault(689).space.PX_4 };
  const obj1 = {};
  const obj4 = { alignItems: "center", gap: importDefault(689).space.PX_4 };
  obj.replayIcon = { margin: importDefault(689).space.PX_12 };
  const obj5 = { margin: importDefault(689).space.PX_12 };
  obj.endedCtaButtonsContainer = { position: "absolute", left: importDefault(689).space.PX_16, right: importDefault(689).space.PX_16, bottom: importDefault(689).space.PX_16 };
  return obj;
});
let closure_9 = { code: "function BountiesScrollEndCardTsx1(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx");

export default function BountiesScrollEndCard(isScrollingInBoundsSharedValue) {
  let bounty;
  let isActive;
  let visible;
  ({ bounty, visible, isActive } = isScrollingInBoundsSharedValue);
  isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
  const sourceQuestContent = isScrollingInBoundsSharedValue.sourceQuestContent;
  let endedCtaButtonsContainer = callback3();
  let obj = isActive(10869);
  const isBountiesVerticalScrollExperimentEnabled = obj.useIsBountiesVerticalScrollExperimentEnabled("BountiesScrollEndCard");
  let obj1 = isActive(13989);
  const bountyCtaInfo = obj1.getBountyCtaInfo(bounty);
  const intl = isActive(1212).intl;
  const stringResult = intl.string(isActive(1212).t["9UtZAY"]);
  let obj2 = isActive(13960);
  obj = { visible, entranceTiming: isActive(4134).timingStandard, exitTiming: isActive(4134).timingStandard };
  const visibilityTransition = obj2.useVisibilityTransition(obj);
  const shouldRender = visibilityTransition.shouldRender;
  let obj4 = 10;
  let obj5 = isActive(3991);
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
    obj.opacity = isActive(outer1_2[11]).withTiming(num, isActive(outer1_2[9]).timingStandard);
    return obj;
  };
  obj = { isScrollingInBoundsSharedValue, withTiming: isActive(4131).withTiming, isActive, timingStandard: isActive(4134).timingStandard };
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
    const obj3 = { colors: ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"], style: endedCtaButtonsContainer.backdropGradient, pointerEvents: "none" };
    items1[1] = callback(isScrollingInBoundsSharedValue(4554), obj3);
    if (isBountiesVerticalScrollExperimentEnabled) {
      obj4 = {};
      const items2 = [endedCtaButtonsContainer.overlayContent, animatedStyle];
      obj4.style = items2;
      obj4.pointerEvents = str;
      obj5 = { bounty, sourceQuestContent, disabled: !isActive };
      const items3 = [callback(isScrollingInBoundsSharedValue(13992), obj5), ];
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
      str = callback(isScrollingInBoundsSharedValue(13994), obj7);
      obj6.children = str;
      items3[1] = callback(closure_5, obj6);
      obj4.children = items3;
      let tmp11Result = callback2(isScrollingInBoundsSharedValue(dependencyMap[obj4]).View, obj4);
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
      const obj11 = { variant: "heading-md/semibold", color: "text-strong", children: bountyCtaInfo.label };
      const items5 = [callback(isActive(4126).Text, obj11), ];
      const obj12 = { variant: "heading-sm/medium", color: "text-default", children: stringResult };
      items5[1] = callback(isActive(4126).Text, obj12);
      obj10.children = items5;
      const items6 = [callback2(closure_5, obj10), ];
      const obj13 = { accessible: false, color: isScrollingInBoundsSharedValue(689).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, style: endedCtaButtonsContainer.replayIcon };
      items6[1] = callback(isActive(9981).RetryIcon, obj13);
      obj9.children = items6;
      obj8.children = callback2(isScrollingInBoundsSharedValue(dependencyMap[obj4]).View, obj9);
      tmp11Result = callback(closure_3, obj8);
      const tmp11 = callback;
      const tmp12 = closure_3;
    }
    items1[2] = tmp11Result;
    obj1.children = items1;
    callback2(isScrollingInBoundsSharedValue(dependencyMap[obj4]).View, obj1);
    const tmp6 = callback2;
  }
};
