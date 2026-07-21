// Module ID: 13813
// Function ID: 104470
// Name: BountiesModalAdvertiserCta
// Dependencies: []
// Exports: default

// Module 13813 (BountiesModalAdvertiserCta)
let closure_3 = ["GUILD_DELETE"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ StyleSheet: closure_6, View: closure_7 } = tmp2);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]).createAnimatedComponent(tmp2.Pressable);
const importDefaultResult = importDefault(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[5]).createStyles(() => {
  let obj = {};
  obj = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_16 };
  obj.outerContainer = obj;
  obj = {};
  const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_TOP_HIGH);
  obj["alignSelf"] = "stretch";
  obj["borderWidth"] = 1;
  obj["borderColor"] = "transparent";
  obj["borderRadius"] = importDefault(dependencyMap[6]).radii.lg;
  obj["overflow"] = "hidden";
  obj.ctaPressable = obj;
  obj.cta = { paddingLeft: importDefault(dependencyMap[6]).space.PX_12, paddingRight: importDefault(dependencyMap[6]).space.PX_16, paddingVertical: importDefault(dependencyMap[6]).space.PX_12, gap: importDefault(dependencyMap[6]).space.PX_12 };
  const obj2 = { borderRadius: importDefault(dependencyMap[6]).radii.md, flexGrow: "long", flexShrink: "numeric", overflow: null, flexDirection: "secondary", backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
  obj.ctaLogoContainer = obj2;
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.ctaLogo = {};
  obj.ctaInfo = {};
  return obj;
});
let closure_12 = { code: "function BountiesModalAdvertiserCtaTsx1(){const{withTiming,interpolate,visibility,visible,timingStandard,timingFast}=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};}" };
const obj2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default function BountiesModalAdvertiserCta(bounty) {
  bounty = bounty.bounty;
  const arg1 = bounty;
  const visible = bounty.visible;
  const importDefault = visible;
  const sourceQuestContent = bounty.sourceQuestContent;
  const dependencyMap = sourceQuestContent;
  let closure_3;
  let callback;
  let React;
  const tmp = callback4();
  let obj = arg1(dependencyMap[7]);
  const bountyCtaInfo = obj.getBountyCtaInfo(bounty);
  if (null != bountyCtaInfo.iconImageUri) {
    let obj1 = arg1(dependencyMap[8]);
    obj = { flex: null, flexDirection: null, alignItems: null, assetUrl: bountyCtaInfo.iconImageUri };
    const scaledImageUrl = obj1.getScaledImageUrl(obj);
  }
  let obj3 = arg1(dependencyMap[9]);
  obj = { visible, entranceTiming: arg1(dependencyMap[10]).timingStandard, exitTiming: arg1(dependencyMap[10]).timingFast };
  const visibilityTransition = obj3.useVisibilityTransition(obj);
  let shouldRender = visibilityTransition.shouldRender;
  let num2 = 0;
  if (visible) {
    num2 = 1;
  }
  closure_3 = num2;
  let obj5 = arg1(dependencyMap[4]);
  const fn = function b() {
    let obj = {};
    obj = {};
    const obj3 = bounty(sourceQuestContent[11]);
    const obj4 = bounty(sourceQuestContent[4]);
    const tmp2 = bounty(sourceQuestContent[10]);
    obj.translateY = obj3.withTiming(bounty(sourceQuestContent[4]).interpolate(num2, ["Text", "lc"], []), visible ? tmp2.timingStandard : tmp2.timingFast);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj1 = { withTiming: arg1(dependencyMap[11]).withTiming, interpolate: arg1(dependencyMap[4]).interpolate, visibility: num2, visible, timingStandard: arg1(dependencyMap[10]).timingStandard, timingFast: arg1(dependencyMap[10]).timingFast };
  fn.__closure = obj1;
  fn.__workletHash = 4075229418021;
  fn.__initData = closure_12;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  let obj7 = arg1(dependencyMap[4]);
  const sharedValue = obj7.useSharedValue(0);
  let obj8 = arg1(dependencyMap[12]);
  const buttonPressAnimationProps = obj8.useButtonPressAnimationProps(sharedValue);
  const tmp10 = callback(buttonPressAnimationProps, closure_3);
  let obj9 = arg1(dependencyMap[13]);
  const getQuestImpressionId = obj9.useGetQuestImpressionId();
  callback = getQuestImpressionId;
  const items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = sourceQuestContent;
  items[3] = getQuestImpressionId;
  callback = React.useCallback((content) => {
    let obj = bounty(sourceQuestContent[14]);
    obj = { adContentId: bounty.id, adCreativeType: bounty(sourceQuestContent[15]).AdCreativeType.BOUNTY, cta: bounty.cta };
    obj = { content, ctaContent: bounty(sourceQuestContent[16]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    const result = obj.openAdGameLinkDirectly(obj, obj);
  }, items);
  React = callback;
  const items1 = [callback];
  [][0] = callback;
  const callback1 = React.useCallback(() => {
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
    const obj4 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue };
    obj5 = { style: tmp.ctaLogoContainer };
    const obj6 = {};
    obj7 = { uri: scaledImageUrl };
    obj6.source = obj7;
    obj6.style = tmp.ctaLogo;
    obj6.resizeMode = "cover";
    obj5.children = callback2(importDefault(dependencyMap[19]), obj6);
    const items4 = [callback2(closure_7, obj5), , ];
    obj8 = { style: tmp.ctaInfo };
    obj9 = { children: bountyCtaInfo.label };
    const items5 = [callback2(arg1(dependencyMap[20]).Text, obj9), ];
    const obj10 = { children: bountyCtaInfo.subtext };
    items5[1] = callback2(arg1(dependencyMap[20]).Text, obj10);
    obj8.children = items5;
    items4[1] = callback3(closure_7, obj8);
    const obj11 = {};
    const obj12 = { text: bountyCtaInfo.buttonLabel, onPress: tmp14 };
    obj11.children = callback2(arg1(dependencyMap[21]).Button, obj12);
    items4[2] = callback2(closure_7, obj11);
    obj4.children = items4;
    obj3["children"] = callback3(arg1(dependencyMap[18]).BackgroundBlurView, obj4);
    obj2.children = callback2(closure_10, obj3);
    shouldRender = callback2(importDefault(dependencyMap[4]).View, obj2);
  }
  return shouldRender;
};
