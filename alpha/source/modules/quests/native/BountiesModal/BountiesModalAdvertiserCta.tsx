// Module ID: 17308
// Function ID: 17309
// Name: BountiesModalAdvertiserCta
// Dependencies: [109, 19, 17, 5143, 6839, 21, 1652, 5142, 575, 5372, 5375, 17309, 9791, 5767, 9813, 9815, 6846, 7952, 6844, 8253, 5844, 5753, 5760, 17272, 504, 17273, 10088, 2]
// Exports: default

// Module 17308 (BountiesModalAdvertiserCta)
import nativeDefault from "native" /* 575 */;
import timing_timing from "timing/timing" /* 5372 */;
import timingPresets from "timingPresets" /* 5375 */;
import QuestConstants from "QuestConstants" /* 6839 */;
import QuestContent from "QuestContent" /* 6844 */;
import AdCreativeType from "AdCreativeType" /* 6846 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7952 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9815 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10088 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles from "createStyles" /* 5142 */;
import size_mod from "module_2" /* 2 */;

let Pressable;
let c10;
let metroImportDefault;
let metroRequire;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
let unpackModuleId;
function BountiesModalAdvertiserCtaContent(bounty) {
  let BackgroundBlurView;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj3;
  let obj4;
  let obj6;
  let obj8;
  let opacityStyle;
  let transformStyle;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let getQuestImpressionId;
  let callback;
  ({ opacityStyle, transformStyle } = bounty);
  let tmp = closure_13();
  let obj = bounty(getQuestImpressionId[11]);
  const bountyCtaInfo = obj.getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    size = { assetUrl: bountyCtaInfo.iconImageUri, width: 40, height: 40 };
    const tmp2Result = bounty(getQuestImpressionId[12]);
    scaledImageUrl = tmp2Result.getScaledImageUrl(size);
  }
  const tmp2Result4 = bounty(getQuestImpressionId[6]);
  const sharedValue = tmp2Result4.useSharedValue(0);
  const tmp2Result5 = bounty(getQuestImpressionId[13]);
  const buttonPressAnimationProps = tmp2Result5.useButtonPressAnimationProps(sharedValue);
  const style = buttonPressAnimationProps.style;
  const tmp8 = _objectWithoutProperties(buttonPressAnimationProps, callback);
  const tmp2Result6 = bounty(getQuestImpressionId[14]);
  getQuestImpressionId = tmp2Result6.useGetQuestImpressionId();
  const items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = sourceQuestContent;
  items[3] = getQuestImpressionId;
  callback = react.useCallback((content) => {
    const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
    const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
    const obj2 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    const result = openAdGameLinkDirectly(obj, obj2);
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = react.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
  }, items1);
  const callback2 = react.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE_FOOTER);
  }, items2);
  let obj2 = { style: items3, children: closure_10(closure_12, obj3) };
  items3 = [tmp.outerContainer, opacityStyle, transformStyle];
  obj3 = { onPress: callback1, accessibilityRole: "button", accessibilityLabel: bountyCtaInfo.label, style: items4, children: closure_11(BackgroundBlurView, obj4) };
  const View = sourceQuestContent(tmp3[6]).View;
  const merged = Object.assign(tmp8);
  items4 = [tmp.ctaPressable, style];
  obj4 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue, children: items5 };
  const obj5 = { style: tmp.ctaLogoContainer, children: closure_10(sourceQuestContent(getQuestImpressionId[20]), obj6) };
  BackgroundBlurView = tmp2(tmp3[19]).BackgroundBlurView;
  obj6 = { source: { uri: scaledImageUrl }, style: tmp.ctaLogo, resizeMode: "cover" };
  items5 = [closure_10(closure_7, obj5), , ];
  const obj7 = { style: tmp.ctaInfo, children: closure_10(bounty(getQuestImpressionId[21]).Text, obj8) };
  obj8 = { lineClamp: 2, variant: "body-sm/semibold", color: "text-default", children: bountyCtaInfo.label };
  items5[1] = closure_10(closure_7, obj7);
  const obj9 = { accessible: false, importantForAccessibility: "no-hide-descendants", children: closure_10(bounty(getQuestImpressionId[22]).Button, obj10) };
  obj10 = { variant: "primary-overlay", text: bountyCtaInfo.buttonLabel, size: "sm", onPress: callback2 };
  items5[2] = closure_10(closure_7, obj9);
  return closure_10(View, obj2);
}
let closure_3 = ["style"];
({ StyleSheet: metroRequire, View: metroImportDefault, Pressable } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = module_1652.createAnimatedComponent(Pressable);
let closure_13 = createStyles.createStyles(() => {
  let obj2;
  let obj4;
  let rect;
  const obj = { outerContainer: rect, ctaPressable: obj2, cta: { flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, overflow: "hidden" }, ctaLogoContainer: size, ctaLogo: obj4, ctaInfo: { flex: 1, justifyContent: "center" } };
  rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
  obj2 = { alignSelf: "stretch", borderRadius: nativeDefault.radii.lg };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, overflow: "hidden" });
  size = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj4 = {};
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  return obj;
});
let items = [{ code: "(function BountiesModalAdvertiserCtaTsx1(visible){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};})" }, timing_timing.withTiming, timingPresets.timingStandard];
let c0;
let c1;
[tmp4, tmp5, tmp6] = items;
class BountiesModalAdvertiserCtaTsx1 {
  constructor(arg0) {
    const obj = { opacity: _undefined(arg0, c1, "respect-motion-settings") };
    return obj;
  }
}
let items1 = [tmp5, tmp6];
BountiesModalAdvertiserCtaTsx1.__closure = items1;
BountiesModalAdvertiserCtaTsx1.__workletHash = 17397968298384;
BountiesModalAdvertiserCtaTsx1.__initData = tmp4;
let items2 = [{ code: "(function BountiesModalAdvertiserCtaTsx2(visible,cleanUp){let[withTiming,timingFast]=this.__closure;return{opacity:withTiming(visible,timingFast,'respect-motion-settings',cleanUp)};})" }, timing_timing.withTiming, timingPresets.timingFast];
c0 = undefined;
c1 = undefined;
[tmp7, tmp8, tmp9] = items2;
class BountiesModalAdvertiserCtaTsx2 {
  constructor(arg0, arg1) {
    const obj = { opacity: _undefined(arg0, c1, "respect-motion-settings", arg1) };
    return obj;
  }
}
let items3 = [tmp8, tmp9];
BountiesModalAdvertiserCtaTsx2.__closure = items3;
BountiesModalAdvertiserCtaTsx2.__workletHash = 5281001933907;
BountiesModalAdvertiserCtaTsx2.__initData = tmp7;
let closure_17 = { code: "(function BountiesModalAdvertiserCtaTsx3(){let[withTiming,interpolate,visibility,visible,timingStandard,timingFast]=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};})" };
let size = size_mod;
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
  let obj = animatedStyle(17272);
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  const obj2 = animatedStyle(504);
  let items = [AccessibilityStore];
  let num = 0;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (visible) {
    num = 1;
  }
  const items1 = [closure_17, , , , , , ];
  const useAnimatedStyle = animatedStyle(1652).useAnimatedStyle;
  animatedStyle(1652);
  items1[1] = animatedStyle(5372).withTiming;
  items1[2] = animatedStyle(1652).interpolate;
  items1[3] = num;
  items1[4] = visible;
  items1[5] = animatedStyle(5375).timingStandard;
  items1[6] = animatedStyle(5375).timingFast;
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
    const obj = { opacityStyle, transformStyle: animatedStyle };
    const merged = Object.assign(arg0);
    return authStore(BountiesModalAdvertiserCtaContent, obj);
  }, items3);
  const tmp2Result2 = animatedStyle(17273);
  const obj3 = { visible, entranceTiming: animatedStyle(5375).timingStandard, exitTiming: animatedStyle(5375).timingFast };
  const visibilityTransition = tmp2Result2.useVisibilityTransition(obj3);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj4 = { useReducedMotion: stateFromStores, item: tmp26, entering: BountiesModalAdvertiserCtaTsx1, exiting: BountiesModalAdvertiserCtaTsx2, renderItem: callback };
    tmp26 = undefined;
    const tmp23 = closure_10;
    const tmp25 = AnimatedEnterExitItemDefault;
    if (visible) {
      tmp26 = merged;
    }
    shouldRender = tmp23(tmp25, obj4);
  } else if (shouldRender) {
    const obj5 = { opacityStyle: tmp17, transformStyle: animatedStyle };
    const merged1 = Object.assign(merged);
    shouldRender = closure_10(BountiesModalAdvertiserCtaContent, obj5);
  }
  return shouldRender;
};
