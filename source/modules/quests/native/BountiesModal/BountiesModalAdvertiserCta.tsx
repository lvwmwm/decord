// Module ID: 13937
// Function ID: 106698
// Name: BountiesModalAdvertiserCta
// Dependencies: [29, 31, 27, 33, 3991, 4130, 689, 13938, 9458, 13909, 4134, 4131, 4548, 10468, 10472, 6970, 6969, 4981, 7499, 5085, 4126, 4543, 2]
// Exports: default

// Module 13937 (BountiesModalAdvertiserCta)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
let closure_3 = ["style"];
({ StyleSheet: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = require("module_3991").createAnimatedComponent(get_ActivityIndicator.Pressable);
let closure_11 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: importDefault(689).space.PX_16, paddingBottom: importDefault(689).space.PX_16, alignItems: "center" };
  obj.outerContainer = obj;
  obj = {};
  const merged = Object.assign(importDefault(689).shadows.SHADOW_TOP_HIGH);
  obj["alignSelf"] = "stretch";
  obj["borderWidth"] = 1;
  obj["borderColor"] = "transparent";
  obj["borderRadius"] = importDefault(689).radii.lg;
  obj["overflow"] = "hidden";
  obj.ctaPressable = obj;
  const obj1 = { flexDirection: "row", alignItems: "center", paddingLeft: importDefault(689).space.PX_12, paddingRight: importDefault(689).space.PX_16, paddingVertical: importDefault(689).space.PX_12, gap: importDefault(689).space.PX_12 };
  obj.cta = obj1;
  const obj2 = { width: 40, height: 40, backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(689).radii.md, overflow: "hidden" };
  obj.ctaLogoContainer = obj2;
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.ctaLogo = {};
  obj.ctaInfo = { flex: 1, justifyContent: "center", gap: 2 };
  return obj;
});
let closure_12 = { code: "function BountiesModalAdvertiserCtaTsx1(){const{withTiming,interpolate,visibility,visible,timingStandard,timingFast}=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default function BountiesModalAdvertiserCta(bounty) {
  bounty = bounty.bounty;
  const visible = bounty.visible;
  const sourceQuestContent = bounty.sourceQuestContent;
  let num2;
  let getQuestImpressionId;
  let callback;
  const tmp = callback3();
  let obj = bounty(sourceQuestContent[7]);
  const bountyCtaInfo = obj.getBountyCtaInfo(bounty);
  if (null != bountyCtaInfo.iconImageUri) {
    let obj1 = bounty(sourceQuestContent[8]);
    obj = { assetUrl: bountyCtaInfo.iconImageUri, width: 40, height: 40 };
    const scaledImageUrl = obj1.getScaledImageUrl(obj);
  }
  let obj3 = bounty(sourceQuestContent[9]);
  obj = { visible, entranceTiming: bounty(sourceQuestContent[10]).timingStandard, exitTiming: bounty(sourceQuestContent[10]).timingFast };
  const visibilityTransition = obj3.useVisibilityTransition(obj);
  let shouldRender = visibilityTransition.shouldRender;
  num2 = 0;
  if (visible) {
    num2 = 1;
  }
  let obj5 = bounty(sourceQuestContent[4]);
  const fn = function b() {
    let obj = {};
    obj = {};
    const obj3 = bounty(sourceQuestContent[11]);
    const obj4 = bounty(sourceQuestContent[4]);
    const tmp2 = bounty(sourceQuestContent[10]);
    obj.translateY = obj3.withTiming(bounty(sourceQuestContent[4]).interpolate(num2, [0, 1], [8, 0]), visible ? tmp2.timingStandard : tmp2.timingFast);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj1 = { withTiming: bounty(sourceQuestContent[11]).withTiming, interpolate: bounty(sourceQuestContent[4]).interpolate, visibility: num2, visible, timingStandard: bounty(sourceQuestContent[10]).timingStandard, timingFast: bounty(sourceQuestContent[10]).timingFast };
  fn.__closure = obj1;
  fn.__workletHash = 4075229418021;
  fn.__initData = closure_12;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  let obj7 = bounty(sourceQuestContent[4]);
  const sharedValue = obj7.useSharedValue(0);
  let obj8 = bounty(sourceQuestContent[12]);
  const buttonPressAnimationProps = obj8.useButtonPressAnimationProps(sharedValue);
  const tmp10 = getQuestImpressionId(buttonPressAnimationProps, num2);
  let obj9 = bounty(sourceQuestContent[13]);
  getQuestImpressionId = obj9.useGetQuestImpressionId();
  let items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = sourceQuestContent;
  items[3] = getQuestImpressionId;
  callback = callback.useCallback((content) => {
    let obj = bounty(sourceQuestContent[14]);
    obj = { adContentId: bounty.id, adCreativeType: bounty(sourceQuestContent[15]).AdCreativeType.BOUNTY, cta: bounty.cta };
    obj = { content, ctaContent: bounty(sourceQuestContent[16]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    const result = obj.openAdGameLinkDirectly(obj, obj);
  }, items);
  const items1 = [callback];
  [][0] = callback;
  const callback1 = callback.useCallback(() => {
    callback(bounty(sourceQuestContent[17]).QuestContent.VIDEO_MODAL_MOBILE);
  }, items1);
  if (shouldRender) {
    const obj2 = {};
    const items2 = [tmp.outerContainer, visibilityTransition.opacityStyle, animatedStyle];
    obj2.style = items2;
    obj3 = {};
    const merged = Object.assign(tmp10);
    obj3["onPress"] = callback1;
    obj3["accessibilityRole"] = "button";
    obj3["accessibilityLabel"] = bountyCtaInfo.label;
    const items3 = [tmp.ctaPressable, buttonPressAnimationProps.style];
    obj3["style"] = items3;
    let obj4 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue };
    obj5 = { style: tmp.ctaLogoContainer };
    const obj6 = {};
    obj7 = { uri: scaledImageUrl };
    obj6.source = obj7;
    obj6.style = tmp.ctaLogo;
    obj6.resizeMode = "cover";
    obj5.children = callback(visible(sourceQuestContent[19]), obj6);
    const items4 = [callback(closure_7, obj5), , ];
    obj8 = { style: tmp.ctaInfo };
    obj9 = { lineClamp: 2, variant: "text-sm/semibold", color: "text-default", children: bountyCtaInfo.label };
    const items5 = [callback(bounty(sourceQuestContent[20]).Text, obj9), ];
    const obj10 = { variant: "text-xs/medium", color: "text-default", children: bountyCtaInfo.subtext };
    items5[1] = callback(bounty(sourceQuestContent[20]).Text, obj10);
    obj8.children = items5;
    items4[1] = callback2(closure_7, obj8);
    const obj11 = { accessible: false, importantForAccessibility: "no-hide-descendants" };
    const obj12 = { variant: "primary-overlay", text: bountyCtaInfo.buttonLabel, size: "sm", onPress: tmp14 };
    obj11.children = callback(bounty(sourceQuestContent[21]).Button, obj12);
    items4[2] = callback(closure_7, obj11);
    obj4.children = items4;
    obj3["children"] = callback2(bounty(sourceQuestContent[18]).BackgroundBlurView, obj4);
    obj2.children = callback(closure_10, obj3);
    shouldRender = callback(visible(sourceQuestContent[4]).View, obj2);
  }
  return shouldRender;
};
