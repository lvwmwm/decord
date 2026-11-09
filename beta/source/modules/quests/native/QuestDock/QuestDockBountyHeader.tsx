// Module ID: 17504
// Function ID: 17505
// Name: QuestDockBountyHeader
// Dependencies: [19, 17, 6836, 17393, 21, 575, 5140, 17422, 17394, 1652, 5761, 8915, 17498, 17390, 17409, 6839, 7948, 17486, 17505, 1377, 5842, 5751, 7043, 1113, 2]

// Module 17504 (QuestDockBountyHeader)
import nativeDefault from "native" /* 575 */;
import QuestConstants from "QuestConstants" /* 6836 */;
import QuestTypes from "QuestTypes" /* 6839 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7948 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 17409 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestDockConstants from "QuestDockConstants" /* 17393 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT;
let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
({ View: closure_4, StyleSheet } = react_native);
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: metroRequire } = QuestDockConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_32 = nativeDefault.space.PX_32;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, productIcon: size, crossFadeWrapper: { alignSelf: "stretch", flex: 1 }, copy: { bottom: 0, justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0 }, promotedLabel: { bottom: 0, justifyContent: "center", left: 0, position: "absolute", top: 0 }, smokeArt: { position: "absolute", left: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, bottom: 0 }, smokeArtFade: obj3, title: { lineHeight: 16 } };
obj2 = { alignItems: "center", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: PX_12 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, flexGrow: 0, flexShrink: 0, height: PX_32, width: PX_32 };
obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
let closure_10 = { code: "(function QuestDockBountyHeaderTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_11 = { code: "(function QuestDockBountyHeaderTsx2(){let[withSpring,activeQuestDockMode,QuestDockMode,PROMOTED_LABEL_OPACITY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?PROMOTED_LABEL_OPACITY:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
const memoResult = react.memo(function QuestDockBountyHeader() {
  let PressableOpacity;
  let Text;
  let View;
  let bountyCreative;
  let height;
  let intl;
  let items10;
  let items11;
  let items12;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj13;
  let obj15;
  let obj16;
  let obj17;
  let obj5;
  let obj6;
  let obj9;
  let str2;
  let str4;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp32;
  let tmp8;
  let tmp9;
  let tmpResult10;
  let width;
  let tmp = width;
  let obj = width(bountyCreative[7]);
  const questDockBounty = obj.useQuestDockBounty();
  const tmp4 = closure_9();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  let obj2 = react;
  const activeQuestDockMode = react.useContext(tmp(tmp2[8]).QuestDockGestureContext).activeQuestDockMode;
  const items = [closure_10, , , , ];
  const useAnimatedStyle = tmp(bountyCreative[9]).useAnimatedStyle;
  tmp(bountyCreative[9]);
  items[1] = tmp(bountyCreative[10]).withSpring;
  items[2] = activeQuestDockMode;
  items[3] = QuestDockMode;
  items[4] = closure_6;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class QuestDockBountyHeaderTsx1 {
    constructor() {
      let num = 1;
      const tmp = c0;
      if (_undefined.get() === _undefined2.EXPANDED) {
        num = 0;
      }
      const obj = { opacity: tmp(num, c3) };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12];
  QuestDockBountyHeaderTsx1.__closure = items1;
  QuestDockBountyHeaderTsx1.__workletHash = 10424459914452;
  QuestDockBountyHeaderTsx1.__initData = tmp8;
  const animatedStyle = useAnimatedStyle(QuestDockBountyHeaderTsx1);
  const items2 = [closure_11, , , , , ];
  const useAnimatedStyle2 = tmp(bountyCreative[9]).useAnimatedStyle;
  tmp(bountyCreative[9]);
  items2[1] = tmp(bountyCreative[10]).withSpring;
  items2[2] = activeQuestDockMode;
  items2[3] = QuestDockMode;
  items2[4] = 0.7;
  items2[5] = closure_6;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  let c4;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
  class QuestDockBountyHeaderTsx2 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (_undefined.get() === _undefined2.EXPANDED) {
        num = c3;
      }
      const obj = { opacity: tmp(num, c4) };
      return obj;
    }
  }
  const items3 = [tmp16, tmp17, tmp18, tmp19, tmp20];
  QuestDockBountyHeaderTsx2.__closure = items3;
  QuestDockBountyHeaderTsx2.__workletHash = 15710355794986;
  QuestDockBountyHeaderTsx2.__initData = tmp15;
  const animatedStyle2 = useAnimatedStyle2(QuestDockBountyHeaderTsx2);
  const tmp23 = height(bountyCreative[11])(activeQuestDockMode) === QuestDockMode.EXPANDED;
  const tmpResult7 = tmp(bountyCreative[12]);
  size = tmpResult7.useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items4 = [width, height];
  const memo = obj2.useMemo(() => {
    size = { width, height };
    return size;
  }, items4);
  const tmpResult8 = tmp(bountyCreative[7]);
  bountyCreative = tmpResult8.useBountyCreative(questDockBounty);
  const items5 = [bountyCreative];
  const tmpResult9 = tmp(bountyCreative[13]);
  const actionSheetPressHandler = tmpResult9.useActionSheetPressHandler(bountyCreative);
  const callback = obj2.useCallback(() => {
    const obj2 = { creative: bountyCreative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    obj.showModal(obj2);
  }, items5);
  const obj3 = { onSubmenuPress: actionSheetPressHandler, hideBlurWhenCollapsed: true, promotedLabelLeading: true, collapsedContent: closure_7(height(bountyCreative[18]), {}), secondaryContentWidth: tmp(bountyCreative[18]).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH, children: items8 };
  const tmp29 = height(bountyCreative[17]);
  const obj4 = { style: items6, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children: closure_7(View, obj5) };
  items6 = [tmp4.smokeArt, memo];
  obj5 = { style: items7, needsOffscreenAlphaCompositing: tmpResult10.isAndroid(), children: closure_7(tmp32, obj6) };
  items7 = [tmp4.smokeArtFade, animatedStyle];
  View = height(tmp2[9]).View;
  tmpResult10 = tmp(bountyCreative[19]);
  obj6 = { surface: tmp(bountyCreative[12]).QuestDockBountySmokeSurface.COLLAPSED, paused: tmp23 };
  tmp32 = height(bountyCreative[12]);
  items8 = [closure_7(closure_4, obj4), ];
  let tmp30Result = null != questDockBounty.productIcon;
  const obj7 = { style: tmp4.wrapper, children: items9 };
  if (tmp30Result) {
    const obj8 = { style: tmp4.productIcon, source: obj9, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    obj9 = { uri: questDockBounty.productIcon };
    tmp30Result = tmp30(tmp22(tmp2[20]), obj8);
  }
  items9 = [tmp30Result, ];
  const obj10 = { style: tmp4.crossFadeWrapper, children: items11 };
  const obj11 = { style: items10, children: closure_7(closure_4, obj12) };
  items10 = [tmp4.copy, animatedStyle];
  obj12 = { accessible: true, accessibilityRole: "text", accessibilityLabel: str, accessibilityElementsHidden: tmp23, importantForAccessibility: str2, children: closure_7(tmp(bountyCreative[21]).Text, obj13) };
  str2 = "yes";
  const View2 = tmp22(tmp2[9]).View;
  if (tmp23) {
    str2 = "no-hide-descendants";
  }
  obj13 = { variant: "body-sm/medium", color: "text-strong", lineClamp: 2, accessible: false, style: tmp4.title, children: str };
  items11 = [closure_7(View2, obj11), ];
  const obj14 = { style: items12, children: closure_7(closure_4, obj15) };
  items12 = [tmp4.promotedLabel, animatedStyle2];
  let str3 = "none";
  const View3 = tmp22(tmp2[9]).View;
  if (tmp23) {
    str3 = "auto";
  }
  obj15 = { pointerEvents: str3, accessibilityElementsHidden: !tmp23, importantForAccessibility: str4, children: closure_7(PressableOpacity, obj16) };
  str4 = "no-hide-descendants";
  if (tmp23) {
    str4 = "yes";
  }
  obj16 = { onPress: callback, accessibilityRole: "button", children: closure_7(Text, obj17) };
  PressableOpacity = tmp(tmp2[22]).PressableOpacity;
  obj17 = { variant: "body-sm/medium", color: "text-default", children: intl.string(tmp(bountyCreative[23]).t.o6FLcF) };
  Text = tmp(tmp2[21]).Text;
  intl = tmp(tmp2[23]).intl;
  items11[1] = closure_7(View3, obj14);
  items9[1] = closure_8(closure_4, obj10);
  items8[1] = closure_8(closure_4, obj7);
  return closure_8(tmp29, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default memoResult;
