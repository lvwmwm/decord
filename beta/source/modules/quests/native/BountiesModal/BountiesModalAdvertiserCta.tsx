// Module ID: 16367
// Function ID: 16368
// Name: BountiesModalAdvertiserCta
// Dependencies: [19, 4914, 6558, 21, 5123, 5126, 16368, 9996, 9998, 6565, 8430, 6563, 16369, 16331, 504, 1653, 16332, 8947, 2]
// Exports: default

// Module 16367 (BountiesModalAdvertiserCta)
import Fragment from "Fragment" /* 21 */;
import timing_timing from "timing/timing" /* 5123 */;
import timingPresets from "timingPresets" /* 5126 */;
import QuestConstants from "QuestConstants" /* 6558 */;
import QuestContent from "QuestContent" /* 6563 */;
import AdCreativeType from "AdCreativeType" /* 6565 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8430 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 8947 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9998 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
function BountiesModalAdvertiserCtaContent(bounty) {
  let opacityStyle;
  let transformStyle;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let getQuestImpressionId;
  let callback;
  ({ opacityStyle, transformStyle } = bounty);
  let obj = bounty(getQuestImpressionId[6]);
  const advertiserCtaInfo = obj.getAdvertiserCtaInfo(bounty);
  let obj2 = bounty(getQuestImpressionId[7]);
  getQuestImpressionId = obj2.useGetQuestImpressionId();
  const items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = sourceQuestContent;
  items[3] = getQuestImpressionId;
  callback = callback.useCallback((content) => {
    const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
    const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
    const obj2 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    const result = openAdGameLinkDirectly(obj, obj2);
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = callback.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
  }, items1);
  const callback2 = callback.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE_FOOTER);
  }, items2);
  const items3 = [opacityStyle, transformStyle];
  return jsx(sourceQuestContent(getQuestImpressionId[12]), { ctaInfo: advertiserCtaInfo, style: items3, onContainerPress: callback1, onButtonPress: callback2 });
}
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const jsx = Fragment.jsx;
let items = [{ code: "(function BountiesModalAdvertiserCtaTsx1(visible){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};})" }, timing_timing.withTiming, timingPresets.timingStandard];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
class BountiesModalAdvertiserCtaTsx1 {
  constructor(arg0) {
    const obj = { opacity: _undefined(arg0, c1, "respect-motion-settings") };
    return obj;
  }
}
let items1 = [tmp3, tmp4];
BountiesModalAdvertiserCtaTsx1.__closure = items1;
BountiesModalAdvertiserCtaTsx1.__workletHash = 17397968298384;
BountiesModalAdvertiserCtaTsx1.__initData = tmp2;
let items2 = [{ code: "(function BountiesModalAdvertiserCtaTsx2(visible,cleanUp){let[withTiming,timingFast]=this.__closure;return{opacity:withTiming(visible,timingFast,'respect-motion-settings',cleanUp)};})" }, timing_timing.withTiming, timingPresets.timingFast];
c0 = undefined;
c1 = undefined;
[tmp5, tmp6, tmp7] = items2;
class BountiesModalAdvertiserCtaTsx2 {
  constructor(arg0, arg1) {
    const obj = { opacity: _undefined(arg0, c1, "respect-motion-settings", arg1) };
    return obj;
  }
}
let items3 = [tmp6, tmp7];
BountiesModalAdvertiserCtaTsx2.__closure = items3;
BountiesModalAdvertiserCtaTsx2.__workletHash = 5281001933907;
BountiesModalAdvertiserCtaTsx2.__initData = tmp5;
let closure_10 = { code: "(function BountiesModalAdvertiserCtaTsx3(){let[withTiming,interpolate,visibility,visible,timingStandard,timingFast]=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};})" };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default function BountiesModalAdvertiserCta(visible) {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp26;
  let tmp7;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let animatedStyle;
  let obj = animatedStyle(16331);
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  const obj2 = animatedStyle(504);
  let items = [AccessibilityStore];
  let num = 0;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (visible) {
    num = 1;
  }
  const items1 = [closure_10, , , , , , ];
  const useAnimatedStyle = animatedStyle(1653).useAnimatedStyle;
  animatedStyle(1653);
  items1[1] = animatedStyle(5123).withTiming;
  items1[2] = animatedStyle(1653).interpolate;
  items1[3] = num;
  items1[4] = visible;
  items1[5] = animatedStyle(5126).timingStandard;
  items1[6] = animatedStyle(5126).timingFast;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  class BountiesModalAdvertiserCtaTsx3 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ translateY: _undefined(_undefined(c2, [0, 1], [8, 0]), c3 ? c4 : c5) }];
      ({ translateY: _undefined(_undefined(c2, [0, 1], [8, 0]), c3 ? c4 : c5) });
      return obj;
    }
  }
  const items2 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  BountiesModalAdvertiserCtaTsx3.__closure = items2;
  BountiesModalAdvertiserCtaTsx3.__workletHash = 3225253604542;
  BountiesModalAdvertiserCtaTsx3.__initData = tmp7;
  animatedStyle = useAnimatedStyle(BountiesModalAdvertiserCtaTsx3);
  const items3 = [animatedStyle];
  const callback = react.useCallback((arg0, opacityStyle) => {
    const merged = Object.assign(arg0);
    return <BountiesModalAdvertiserCtaContent opacityStyle={arg1} transformStyle={animatedStyle} />;
  }, items3);
  const tmp2Result2 = animatedStyle(16332);
  const obj3 = { visible, entranceTiming: animatedStyle(5126).timingStandard, exitTiming: animatedStyle(5126).timingFast };
  const visibilityTransition = tmp2Result2.useVisibilityTransition(obj3);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj4 = { useReducedMotion: stateFromStores, item: tmp26, entering: BountiesModalAdvertiserCtaTsx1, exiting: BountiesModalAdvertiserCtaTsx2, renderItem: callback };
    tmp26 = undefined;
    const tmp23 = jsx;
    const tmp25 = AnimatedEnterExitItemDefault;
    if (visible) {
      tmp26 = merged;
    }
    shouldRender = tmp23(tmp25, obj4);
  } else if (shouldRender) {
    const merged1 = Object.assign(merged);
    shouldRender = <BountiesModalAdvertiserCtaContent opacityStyle={tmp17} transformStyle={animatedStyle} />;
  }
  return shouldRender;
};
