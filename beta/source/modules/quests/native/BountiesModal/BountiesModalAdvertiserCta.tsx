// Module ID: 14577
// Function ID: 14578
// Name: BountiesModalAdvertiserCta
// Dependencies: [109, 19, 17, 4825, 5756, 21, 4566, 4836, 576, 4837, 4840, 14578, 10689, 5287, 10711, 10719, 5763, 7141, 5761, 8056, 5899, 4832, 5281, 14545, 504, 14546, 9424, 2]
// Exports: default

// Module 14577 (BountiesModalAdvertiserCta)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestContent from "QuestContent" /* 5761 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10719 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let Pressable;
let c10;
let metroImportDefault;
let metroRequire;
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
  obj8 = { lineClamp: 2, variant: "text-sm/semibold", color: "text-default", children: bountyCtaInfo.label };
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
let closure_12 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_13 = createStyles.createStyles(() => {
  let obj2;
  let obj4;
  let rect;
  const obj = { outerContainer: rect, ctaPressable: obj2, cta: { flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 }, ctaLogoContainer: size, ctaLogo: obj4, ctaInfo: { flex: 1, justifyContent: "center" } };
  rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
  obj2 = { alignSelf: "stretch", borderWidth: 1, borderColor: "transparent", borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 });
  size = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj4 = {};
  const merged1 = Object.assign(metroRequire.absoluteFillObject);
  return obj;
});
let entering = function n(value) {
  let obj2;
  const obj = { opacity: obj2.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  obj2 = timing;
  return obj;
};
let obj = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
entering.__closure = obj;
entering.__workletHash = 2981824910249;
entering.__initData = { code: "function BountiesModalAdvertiserCtaTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
const fn2 = function s(value, fn2) {
  let obj2;
  const obj = { opacity: obj2.withTiming(value, timingPresets.timingFast, "respect-motion-settings", fn2) };
  obj2 = timing;
  return obj;
};
let obj2 = { withTiming: timing.withTiming, timingFast: timingPresets.timingFast };
fn2.__closure = obj2;
fn2.__workletHash = 15850601331978;
fn2.__initData = { code: "function BountiesModalAdvertiserCtaTsx2(visible,cleanUp){const{withTiming,timingFast}=this.__closure;return{opacity:withTiming(visible,timingFast,'respect-motion-settings',cleanUp)};}" };
const __initData = { code: "function BountiesModalAdvertiserCtaTsx3(){const{withTiming,interpolate,visibility,visible,timingStandard,timingFast}=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default function BountiesModalAdvertiserCta(visible) {
  let tmp18;
  let useReducedMotion;
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let animatedStyle;
  let tmp3 = animatedStyle;
  let obj = visible(animatedStyle[23]);
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  let obj2 = visible(animatedStyle[24]);
  let items = [AccessibilityStore];
  let num = 0;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (visible) {
    num = 1;
  }
  entering = function s() {
    let items;
    const withTiming = timing.withTiming;
    timing;
    const obj = ReanimatedRexport2;
    const interpolateResult = obj.interpolate(num, [0, 1], [8, 0]);
    const tmp3 = timingPresets;
    const obj2 = { transform: items };
    items = [{ translateY: withTiming(interpolateResult, visible ? tmp3.timingStandard : tmp3.timingFast) }];
    ({ translateY: withTiming(interpolateResult, visible ? tmp3.timingStandard : tmp3.timingFast) });
    return obj2;
  };
  const tmp2Result = visible(tmp3[6]);
  const obj3 = { withTiming: tmp2(tmp3[9]).withTiming, interpolate: tmp2(tmp3[6]).interpolate, visibility: num, visible, timingStandard: tmp2(tmp3[10]).timingStandard, timingFast: tmp2(tmp3[10]).timingFast };
  entering.__closure = obj3;
  entering.__workletHash = 252868467367;
  entering.__initData = __initData;
  animatedStyle = tmp2Result.useAnimatedStyle(entering);
  const items1 = [animatedStyle];
  const callback = react.useCallback((arg0, opacityStyle) => {
    const obj = { opacityStyle, transformStyle: animatedStyle };
    const merged = Object.assign(arg0);
    return authStore(BountiesModalAdvertiserCtaContent, obj);
  }, items1);
  const tmp2Result2 = visible(tmp3[25]);
  const obj4 = { visible, entranceTiming: visible(tmp3[10]).timingStandard, exitTiming: visible(tmp3[10]).timingFast };
  const visibilityTransition = tmp2Result2.useVisibilityTransition(obj4);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj5 = { useReducedMotion: stateFromStores, item: tmp18, entering, exiting: fn2, renderItem: callback };
    tmp18 = undefined;
    const tmp15 = closure_10;
    const tmp17 = num(tmp3[26]);
    if (visible) {
      tmp18 = merged;
    }
    shouldRender = tmp15(tmp17, obj5);
  } else if (shouldRender) {
    const obj6 = { opacityStyle: tmp9, transformStyle: animatedStyle };
    const merged1 = Object.assign(merged);
    shouldRender = closure_10(BountiesModalAdvertiserCtaContent, obj6);
  }
  return shouldRender;
};
