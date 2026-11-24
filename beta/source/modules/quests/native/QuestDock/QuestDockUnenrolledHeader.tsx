// Module ID: 16572
// Function ID: 16573
// Name: QuestDockUnenrolledHeader
// Dependencies: [19, 17, 6558, 16473, 1082, 21, 575, 4913, 16506, 16470, 16491, 6561, 8430, 5122, 4920, 16467, 16573, 5504, 1112, 16534, 9972, 5600, 16576, 16577, 16578, 16474, 1653, 5514, 13750, 2]

// Module 16572 (QuestDockUnenrolledHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1082 */;
import intl2 from "intl" /* 1112 */;
import _mod1653 from "module_1653" /* 1653 */;
import useThemeDefault from "useTheme" /* 5122 */;
import Text_Text from "Text/Text" /* 5504 */;
import spring_spring from "spring/spring" /* 5514 */;
import FastImageDefault from "FastImage" /* 5600 */;
import QuestConstants from "QuestConstants" /* 6558 */;
import QuestTypes from "QuestTypes" /* 6561 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8430 */;
import QuestRewardTileDefault from "QuestRewardTile" /* 13750 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 16474 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 16491 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 16506 */;
import QuestGameLogotypeDefault from "QuestGameLogotype" /* 16534 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 16578 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 16473 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const _modDef1653 = _mod1653;
let num, obj1, tmp2;

let QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT;
let c9;
let metroImportAll;
let metroRequire;
let obj2;
let size;
function QuestDockAdvertiserAsset(assetUrl) {
  let obj2;
  assetUrl = assetUrl.assetUrl;
  const tmp = closure_13();
  const obj = { style: tmp.advertiserAsset, accessible: false, importantForAccessibility: "no-hide-descendants", children: metroImportAll(FastImageDefault, obj2) };
  obj2 = { source: { uri: assetUrl }, style: tmp.advertiserAsset, resizeMode: "contain", accessible: false };
  return metroImportAll(View, obj);
}
function QuestDockHeaderRewardTile() {
  let items2;
  let obj3;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp = closure_13();
  let obj = QuestDockCreativeContext;
  const questDockQuest = obj.useQuestDockQuest();
  const activeQuestDockMode = react.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  const items = [closure_15, , , , ];
  const useAnimatedStyle = _mod1653.useAnimatedStyle;
  _mod1653;
  items[1] = spring_spring.withSpring;
  items[2] = activeQuestDockMode;
  items[3] = QuestDockMode;
  items[4] = metroRequire;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class QuestDockUnenrolledHeaderTsx1 {
    constructor() {
      tmp = closure_0;
      num = 1;
      if (closure_1.get() === closure_2.EXPANDED) {
        num = 0;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9];
  QuestDockUnenrolledHeaderTsx1.__closure = items1;
  QuestDockUnenrolledHeaderTsx1.__workletHash = 1590518219011;
  QuestDockUnenrolledHeaderTsx1.__initData = tmp5;
  const obj2 = { style: tmp.squareAsset, accessible: false, importantForAccessibility: "no-hide-descendants", children: metroImportAll(View, obj3) };
  const animatedStyle = useAnimatedStyle(QuestDockUnenrolledHeaderTsx1);
  obj3 = { style: items2, children: metroImportAll(QuestRewardTileDefault, size) };
  items2 = [tmp.squareAssetOverlay, animatedStyle];
  View = _modDef1653.View;
  size = { quest: questDockQuest, height: PX_40, width: PX_40, withAnimation: false };
  return metroImportAll(View, obj2);
}
function QuestDockRewardLogotype(children) {
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  children = children.children;
  const activeQuestDockMode = react.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  let items = [closure_17, activeQuestDockMode, QuestDockMode, PX_10, closure_12, , ];
  const useAnimatedStyle = _mod1653.useAnimatedStyle;
  items[5] = spring_spring.withSpring;
  items[6] = metroRequire;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class QuestDockUnenrolledHeaderTsx2 {
    constructor() {
      num = 0;
      if (closure_0.get() === closure_1.EXPANDED) {
        tmp = closure_2;
        tmp2 = closure_3;
        num = closure_2 - closure_3;
      }
      obj = { transform: null };
      obj1 = { translateX: closure_4(num, closure_5) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
  QuestDockUnenrolledHeaderTsx2.__closure = items1;
  QuestDockUnenrolledHeaderTsx2.__workletHash = 8253036165059;
  QuestDockUnenrolledHeaderTsx2.__initData = tmp3;
  const style = useAnimatedStyle(QuestDockUnenrolledHeaderTsx2);
  return metroImportAll(_modDef1653.View, { style, children });
}
function QuestDockOrbAmountCopy(orbCount) {
  let intl;
  orbCount = orbCount.orbCount;
  const obj = { style: closure_13().getRewardLabel, variant: "body-sm/medium", color: "interactive-text-active", lineClamp: 1, children: intl.format(intl2.t.QVBTlz, { orbCount }) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return metroImportAll(Text, obj);
}
let View = react_native.View;
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: metroRequire, QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT } = QuestDockConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_40 = nativeDefault.space.PX_40;
const PX_8 = nativeDefault.space.PX_8;
const PX_10 = nativeDefault.space.PX_10;
let closure_12 = QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT + PX_40 + PX_8;
let createStyles = createStyles_mod;
let obj = { advertiserAsset: size, squareAsset: { width: PX_40, height: PX_40, marginRight: PX_8, alignItems: "center", justifyContent: "center" }, squareAssetOverlay: { position: "absolute" }, primaryContent: { alignItems: "center", flexDirection: "row" }, advertiserContent: obj2, advertiserName: { flex: 1, maxWidth: 120 }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 4 }, getRewardLabel: { opacity: 0.7 }, advertiserNameText: { lineHeight: 16 } };
size = { height: nativeDefault.space.PX_40, width: nativeDefault.space.PX_40, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BLACK, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { flex: 1, gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj);
let closure_15 = { code: "(function QuestDockUnenrolledHeaderTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_17 = { code: "(function QuestDockUnenrolledHeaderTsx2(){let[activeQuestDockMode,QuestDockMode,REWARD_LOGOTYPE_EXPANDED_INSET,REWARD_LOGOTYPE_COLLAPSED_LEFT,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;let translateX=0;if(activeQuestDockMode.get()===QuestDockMode.EXPANDED){translateX=REWARD_LOGOTYPE_EXPANDED_INSET-REWARD_LOGOTYPE_COLLAPSED_LEFT;}return{transform:[{translateX:withSpring(translateX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};})" };
const memoResult = react.memo(function QuestDockUnenrolledHeader(squareAsset) {
  let LIGHT;
  let intl;
  let items2;
  let obj10;
  let obj14;
  let prop;
  let tmp10;
  let tmp15;
  let tmp15Result3;
  let tmp15Result4;
  let tmp16;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmpResult2;
  let str = squareAsset.squareAsset;
  if (str === undefined) {
    str = "default";
  }
  let str2 = squareAsset.rewardMessage;
  if (str2 === undefined) {
    str2 = "generic";
  }
  const orbCount = squareAsset.orbCount;
  let questCreative;
  let obj = questCreative(16506);
  const questDockQuest = obj.useQuestDockQuest();
  let obj2 = questCreative(16506);
  questCreative = obj2.useQuestCreative(questDockQuest);
  const obj3 = questCreative(16470);
  const items = [questCreative];
  const actionSheetPressHandler = obj3.useActionSheetPressHandler(questCreative);
  const callback = react.useCallback(() => {
    const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    obj.showModal(obj2);
  }, items);
  const tmp8 = useThemeDefault();
  const obj4 = questCreative(4920);
  if (obj4.isThemeDark(tmp8)) {
    LIGHT = tmp9.DARK;
    tmp10 = tmp9;
  } else {
    LIGHT = tmp9.LIGHT;
    tmp10 = tmp9;
  }
  const tmp11 = closure_13();
  const tmpResult = questCreative(16467);
  const questGameLogotypeAssetUrl = tmpResult.useQuestGameLogotypeAssetUrl(questDockQuest);
  if ("bountyIllustration" === str2) {
    tmp16 = closure_8(tmp(16573).QuestDockBountyOrbIllustration, {});
    tmp15 = closure_8;
  } else {
    if ("orbAmount" === str2) {
      if (null != orbCount) {
        const obj5 = { orbCount };
        tmp16 = closure_8(QuestDockOrbAmountCopy, obj5);
        tmp15 = closure_8;
      }
    }
    tmp15 = closure_8;
    const obj6 = { style: tmp11.getRewardLabel, variant: "body-sm/medium", color: "interactive-text-active", children: intl.string(questCreative(1112).t["3mgEQf"]) };
    const Text = tmp(5504).Text;
    intl = tmp(1112).intl;
    tmp16 = closure_8(Text, obj6);
  }
  const obj7 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo };
  const tmp15Result = tmp15(QuestGameLogotypeDefault, obj7);
  if ("advertiser" === str) {
    const obj8 = { assetUrl: tmpResult2.getQuestAsset(questDockQuest, questCreative(9972).QuestAssetType.GAME_TILE, LIGHT).url };
    tmpResult2 = questCreative(9972);
    tmp15Result3 = tmp15(QuestDockAdvertiserAsset, obj8);
    const obj9 = { style: tmp11.advertiserName, children: tmp15(questCreative(5504).Text, obj10) };
    obj10 = { variant: "body-sm/semibold", color: "text-strong", lineClamp: 2, style: tmp11.advertiserNameText, children: questDockQuest.config.messages.gamePublisher };
    tmp15Result4 = tmp15(View, obj9);
  } else if ("reward" === str) {
    tmp15Result3 = tmp15(QuestDockHeaderRewardTile, {});
    const obj11 = { children: tmp15Result };
    tmp15Result4 = tmp15(QuestDockRewardLogotype, obj11);
  } else {
    let tmp7Result3;
    const tmp7Result = FastImageDefault;
    if (LIGHT === tmp10.DARK) {
      tmp7Result3 = tmp7(16576);
    } else {
      tmp7Result3 = tmp7(16577);
    }
    const obj12 = { source: tmp7Result3, resizeMode: "contain", style: tmp11.wreathImage };
    tmp15Result3 = tmp15(tmp7Result, obj12);
    tmp15Result4 = tmp15Result;
  }
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmp7Result4 = QuestDockBackgroundBlurHeaderDefault;
  const obj13 = { blurHash: questBarHeroBlurhash, collapsedContent: tmp16, secondaryContentWidth: prop, withPressableDisclosure: true, onDisclosurePress: callback, onSubmenuPress: actionSheetPressHandler, children: tmp32(tmp33, obj14) };
  prop = undefined;
  if ("bountyIllustration" === str2) {
    prop = tmp(16573).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
  }
  const primaryContent = tmp11.primaryContent;
  tmp32 = closure_9;
  tmp33 = View;
  if ("advertiser" === str) {
    const items1 = [primaryContent, tmp11.advertiserContent];
    tmp34 = items1;
  } else {
    tmp34 = primaryContent;
  }
  obj14 = { style: tmp34, children: items2 };
  items2 = [tmp15Result3, tmp15Result4];
  return tmp15(tmp7Result4, obj13);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;
