// Module ID: 16637
// Function ID: 16638
// Name: QuestDockUnenrolledHeader
// Dependencies: [19, 17, 6466, 16538, 1083, 21, 575, 4823, 16571, 16535, 16556, 6469, 8342, 5032, 4830, 16533, 16638, 5414, 1113, 16599, 9871, 5510, 16641, 16642, 16643, 16539, 1655, 5424, 13677, 2]

// Module 16637 (QuestDockUnenrolledHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl2 from "intl" /* 1113 */;
import _mod1655 from "module_1655" /* 1655 */;
import useThemeDefault from "useTheme" /* 5032 */;
import Text_Text from "Text/Text" /* 5414 */;
import spring_spring from "spring/spring" /* 5424 */;
import FastImageDefault from "FastImage" /* 5510 */;
import QuestConstants from "QuestConstants" /* 6466 */;
import QuestTypes from "QuestTypes" /* 6469 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8342 */;
import QuestRewardTileDefault from "QuestRewardTile" /* 13677 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 16539 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 16556 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 16571 */;
import QuestGameLogotypeDefault from "QuestGameLogotype" /* 16599 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 16643 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 16538 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4823 */;
import size_mod from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
let num, obj1, tmp2;

let QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT;
let c9;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let size;
function QuestDockAdvertiserAsset(assetUrl) {
  let obj2;
  assetUrl = assetUrl.assetUrl;
  const tmp = closure_12();
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
  let tmp = closure_12();
  let obj = QuestDockCreativeContext;
  const questDockQuest = obj.useQuestDockQuest();
  const activeQuestDockMode = react.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  const items = [closure_14, , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
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
  View = _modDef1655.View;
  size = { quest: questDockQuest, height: PX_32, width: PX_32, withAnimation: false };
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
  let items = [closure_16, activeQuestDockMode, QuestDockMode, PX_32, PX_8, , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
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
        num = -closure_2 + closure_3;
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
  QuestDockUnenrolledHeaderTsx2.__workletHash = 8612327791977;
  QuestDockUnenrolledHeaderTsx2.__initData = tmp3;
  const style = useAnimatedStyle(QuestDockUnenrolledHeaderTsx2);
  return metroImportAll(_modDef1655.View, { style, children });
}
function QuestDockOrbAmountCopy(orbCount) {
  let intl;
  orbCount = orbCount.orbCount;
  const obj = { style: closure_12().getRewardLabel, variant: "body-sm/medium", color: "interactive-text-active", lineClamp: 1, children: intl.format(intl2.t.QVBTlz, { orbCount }) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return metroImportAll(Text, obj);
}
let View = react_native.View;
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: metroRequire, QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT } = QuestDockConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_32 = nativeDefault.space.PX_32;
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { advertiserAsset: size, squareAsset: { width: PX_32, height: PX_32, marginRight: PX_8, alignItems: "center", justifyContent: "center" }, squareAssetOverlay: { position: "absolute" }, primaryContent: { alignItems: "center", flexDirection: "row" }, tileContent: obj2, advertiserContent: obj3, advertiserName: { flex: 1, maxWidth: 120 }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 2 }, getRewardLabel: { opacity: 0.7 } };
size = { height: nativeDefault.space.PX_32, width: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BLACK, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { paddingLeft: nativeDefault.space.PX_16 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT };
obj3 = { flex: 1, gap: nativeDefault.space.PX_12 };
let closure_12 = createStyles(obj);
let closure_14 = { code: "(function QuestDockUnenrolledHeaderTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_16 = { code: "(function QuestDockUnenrolledHeaderTsx2(){let[activeQuestDockMode,QuestDockMode,REWARD_TILE_SIZE,REWARD_LOGOTYPE_GAP,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;let translateX=0;if(activeQuestDockMode.get()===QuestDockMode.EXPANDED){translateX=-(REWARD_TILE_SIZE+REWARD_LOGOTYPE_GAP);}return{transform:[{translateX:withSpring(translateX,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};})" };
const memoResult = react.memo(function QuestDockUnenrolledHeader(squareAsset) {
  let LIGHT;
  let intl;
  let items3;
  let obj10;
  let obj14;
  let primaryContent;
  let prop;
  let tmp10;
  let tmp15;
  let tmp15Result3;
  let tmp15Result4;
  let tmp16;
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
  let obj = questCreative(16571);
  const questDockQuest = obj.useQuestDockQuest();
  let obj2 = questCreative(16571);
  questCreative = obj2.useQuestCreative(questDockQuest);
  const obj3 = questCreative(16535);
  const items = [questCreative];
  const actionSheetPressHandler = obj3.useActionSheetPressHandler(questCreative);
  const callback = react.useCallback(() => {
    const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    obj.showModal(obj2);
  }, items);
  const tmp8 = useThemeDefault();
  const obj4 = questCreative(4830);
  if (obj4.isThemeDark(tmp8)) {
    LIGHT = tmp9.DARK;
    tmp10 = tmp9;
  } else {
    LIGHT = tmp9.LIGHT;
    tmp10 = tmp9;
  }
  const tmp11 = closure_12();
  const tmpResult = questCreative(16533);
  const questGameLogotypeAssetUrl = tmpResult.useQuestGameLogotypeAssetUrl(questDockQuest);
  if ("bountyIllustration" === str2) {
    tmp16 = closure_8(tmp(16638).QuestDockBountyOrbIllustration, {});
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
    const obj6 = { style: tmp11.getRewardLabel, variant: "body-sm/medium", color: "interactive-text-active", children: intl.string(questCreative(1113).t["3mgEQf"]) };
    const Text = tmp(5414).Text;
    intl = tmp(1113).intl;
    tmp16 = closure_8(Text, obj6);
  }
  const obj7 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo };
  const tmp15Result = tmp15(QuestGameLogotypeDefault, obj7);
  if ("advertiser" === str) {
    const items1 = [, , ];
    ({ primaryContent: arr3[0], advertiserContent: arr3[1], tileContent: arr3[2] } = tmp11);
    const obj8 = { assetUrl: tmpResult2.getQuestAsset(questDockQuest, questCreative(9871).QuestAssetType.GAME_TILE, LIGHT).url };
    tmpResult2 = questCreative(9871);
    tmp15Result3 = tmp15(QuestDockAdvertiserAsset, obj8);
    const obj9 = { style: tmp11.advertiserName, children: tmp15(questCreative(5414).Text, obj10) };
    obj10 = { variant: "body-sm/semibold", color: "text-strong", lineClamp: 2, children: questDockQuest.config.messages.gamePublisher };
    tmp15Result4 = tmp15(View, obj9);
    primaryContent = items1;
  } else if ("reward" === str) {
    const items2 = [, ];
    ({ primaryContent: arr2[0], tileContent: arr2[1] } = tmp11);
    tmp15Result3 = tmp15(QuestDockHeaderRewardTile, {});
    const obj11 = { children: tmp15Result };
    tmp15Result4 = tmp15(QuestDockRewardLogotype, obj11);
    primaryContent = items2;
  } else {
    let tmp7Result3;
    primaryContent = tmp11.primaryContent;
    const tmp7Result = FastImageDefault;
    if (LIGHT === tmp10.DARK) {
      tmp7Result3 = tmp7(16641);
    } else {
      tmp7Result3 = tmp7(16642);
    }
    const obj12 = { source: tmp7Result3, resizeMode: "contain", style: tmp11.wreathImage };
    tmp15Result3 = tmp15(tmp7Result, obj12);
    tmp15Result4 = tmp15Result;
  }
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmp7Result4 = QuestDockBackgroundBlurHeaderDefault;
  const obj13 = { blurHash: questBarHeroBlurhash, collapsedContent: tmp16, secondaryContentWidth: prop, withPressableDisclosure: true, onDisclosurePress: callback, onSubmenuPress: actionSheetPressHandler, children: closure_9(View, obj14) };
  prop = undefined;
  if ("bountyIllustration" === str2) {
    prop = tmp(16638).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
  }
  obj14 = { style: primaryContent, children: items3 };
  items3 = [tmp15Result3, tmp15Result4];
  return tmp15(tmp7Result4, obj13);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;
