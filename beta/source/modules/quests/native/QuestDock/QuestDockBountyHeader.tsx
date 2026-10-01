// Module ID: 14740
// Function ID: 14741
// Name: QuestDockBountyHeader
// Dependencies: [19, 17, 5756, 14624, 21, 576, 4836, 14631, 14625, 4566, 5280, 7715, 14734, 1364, 14733, 14621, 14642, 5759, 7141, 14721, 14741, 6494, 5899, 4832, 5435, 1115, 2]

// Module 14740 (QuestDockBountyHeader)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 14642 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT;
let StyleSheet;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
({ View: closure_4, StyleSheet } = react_native);
({ QuestDockMode: hasOwnProperty, QuestsExperimentLocations: metroRequire } = QuestConstants);
({ QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: metroImportDefault } = QuestDockConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_32 = nativeDefault.space.PX_32;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, productIcon: size, crossFadeWrapper: { alignSelf: "stretch", flex: 1 }, copy: { bottom: 0, justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0 }, promotedLabel: { bottom: 0, justifyContent: "center", left: 0, position: "absolute", top: 0 }, smokeArt: { position: "absolute", left: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, bottom: 0 }, smokeArtFade: obj3, title: { lineHeight: 16 } };
obj2 = { alignItems: "center", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: PX_12 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, flexGrow: 0, flexShrink: 0, height: PX_32, width: PX_32 };
obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
const __initData = { code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockBountyHeaderTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,PROMOTED_LABEL_OPACITY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?PROMOTED_LABEL_OPACITY:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const memoResult = react.memo(function QuestDockBountyHeader() {
  let PressableOpacity;
  let Text;
  let activeQuestDockMode;
  let bountyCreative;
  let height;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj11;
  let obj14;
  let obj15;
  let obj17;
  let obj18;
  let obj19;
  let obj7;
  let obj8;
  let str2;
  let str3;
  let str5;
  let tmp7Result5;
  let tmp7Result6;
  let width;
  const tmp = activeQuestDockMode;
  let obj = activeQuestDockMode(height[7]);
  const questDockBounty = obj.useQuestDockBounty();
  const tmp4 = closure_10();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  let obj2 = bountyCreative;
  activeQuestDockMode = bountyCreative.useContext(tmp(tmp2[8]).QuestDockGestureContext).activeQuestDockMode;
  const fn = function o() {
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (activeQuestDockMode.get() === hasOwnProperty.EXPANDED) {
      num = 0;
    }
    const obj = { opacity: withSpring(num, metroImportDefault) };
    return obj;
  };
  const tmpResult = tmp(height[9]);
  const obj3 = { withSpring: tmp(tmp2[10]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__closure = obj3;
  fn.__workletHash = 16909083558605;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const fn2 = function s() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (activeQuestDockMode.get() === hasOwnProperty.EXPANDED) {
      num = 0.7;
    }
    const obj = { opacity: withSpring(num, metroImportDefault) };
    return obj;
  };
  const tmpResult7 = tmp(height[9]);
  fn2.__closure = { withSpring: tmp(height[10]).withSpring, activeQuestDockMode, QuestDockMode, PROMOTED_LABEL_OPACITY: 0.7, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 273450441779;
  fn2.__initData = __initData2;
  ({ withSpring: tmp(height[10]).withSpring, activeQuestDockMode, QuestDockMode, PROMOTED_LABEL_OPACITY: 0.7, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED });
  const animatedStyle1 = tmpResult7.useAnimatedStyle(fn2);
  const EXPANDED = QuestDockMode.EXPANDED;
  const tmp8 = width(height[11])(activeQuestDockMode);
  const tmpResult8 = tmp(height[12]);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = tmpResult8.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  const tmpResult9 = tmp(height[13]);
  const tmp10 = tmpResult9.isAndroid() && isBountiesAndroidQuestBarSmokeAnimationEnabled;
  const tmpResult10 = tmp(height[14]);
  size = tmpResult10.useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items = [width, height];
  const memo = obj2.useMemo(() => {
    size = { width, height };
    return size;
  }, items);
  const tmpResult11 = tmp(height[7]);
  bountyCreative = tmpResult11.useBountyCreative(questDockBounty);
  const items1 = [bountyCreative];
  const tmpResult12 = tmp(height[15]);
  const actionSheetPressHandler = tmpResult12.useActionSheetPressHandler(bountyCreative);
  const callback = obj2.useCallback(() => {
    const obj2 = { creative: bountyCreative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    obj.showModal(obj2);
  }, items1);
  const obj5 = { onSubmenuPress: actionSheetPressHandler, hideBlurWhenCollapsed: true, promotedLabelLeading: true, collapsedContent: closure_8(width(height[20]), {}), secondaryContentWidth: tmp(height[20]).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH, children: items4 };
  const tmp7Result = width(height[19]);
  const obj6 = { style: items2, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children: closure_8(tmp7Result5, obj7, str2) };
  items2 = [tmp4.smokeArt, memo];
  obj7 = { style: items3, needsOffscreenAlphaCompositing: tmp10, children: closure_8(tmp7Result6, obj8) };
  items3 = [tmp4.smokeArtFade, animatedStyle];
  obj8 = { surface: tmp(height[14]).QuestDockBountySmokeSurface.COLLAPSED, paused: tmp8 === EXPANDED };
  tmp7Result5 = width(height[21]);
  str2 = "no-offscreen-compositing";
  tmp7Result6 = width(height[14]);
  if (tmp10) {
    str2 = "offscreen-compositing";
  }
  items4 = [closure_8(closure_4, obj6), ];
  let tmp18Result = null != questDockBounty.productIcon;
  const obj9 = { style: tmp4.wrapper, children: items5 };
  if (tmp18Result) {
    const obj10 = { style: tmp4.productIcon, source: obj11, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    obj11 = { uri: questDockBounty.productIcon };
    tmp18Result = tmp18(tmp7(tmp2[22]), obj10);
  }
  items5 = [tmp18Result, ];
  const obj12 = { style: tmp4.crossFadeWrapper, children: items7 };
  const obj13 = { style: items6, children: closure_8(closure_4, obj14) };
  items6 = [tmp4.copy, animatedStyle];
  obj14 = { accessible: true, accessibilityRole: "text", accessibilityLabel: str, accessibilityElementsHidden: tmp8 === EXPANDED, importantForAccessibility: str3, children: closure_8(tmp(height[23]).Text, obj15) };
  str3 = "yes";
  const tmp7Result7 = width(height[21]);
  if (tmp8 === EXPANDED) {
    str3 = "no-hide-descendants";
  }
  obj15 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, accessible: false, style: tmp4.title, children: str };
  items7 = [closure_8(tmp7Result7, obj13), ];
  const obj16 = { style: items8, children: closure_8(closure_4, obj17) };
  items8 = [tmp4.promotedLabel, animatedStyle1];
  let str4 = "none";
  const tmp7Result8 = width(height[21]);
  if (tmp8 === EXPANDED) {
    str4 = "auto";
  }
  obj17 = { pointerEvents: str4, accessibilityElementsHidden: tmp8 !== EXPANDED, importantForAccessibility: str5, children: closure_8(PressableOpacity, obj18) };
  str5 = "no-hide-descendants";
  if (tmp8 === EXPANDED) {
    str5 = "yes";
  }
  obj18 = { onPress: callback, accessibilityRole: "button", children: closure_8(Text, obj19) };
  PressableOpacity = tmp(tmp2[24]).PressableOpacity;
  obj19 = { variant: "text-sm/medium", color: "text-default", children: intl.string(tmp(height[25]).t.o6FLcF) };
  Text = tmp(tmp2[23]).Text;
  intl = tmp(tmp2[25]).intl;
  items7[1] = closure_8(tmp7Result8, obj16);
  items5[1] = closure_9(closure_4, obj12);
  items4[1] = closure_9(closure_4, obj9);
  return closure_9(tmp7Result, obj5);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default memoResult;
