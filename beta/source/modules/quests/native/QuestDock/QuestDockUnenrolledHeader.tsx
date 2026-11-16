// Module ID: 17793
// Function ID: 17794
// Name: QuestDockUnenrolledHeader
// Dependencies: [19, 17, 6954, 17698, 1083, 21, 5306, 575, 17727, 17695, 17714, 6957, 8834, 5537, 5313, 17693, 17794, 5919, 1113, 10146, 6010, 17797, 17798, 17799, 17755, 17800, 17699, 1655, 5929, 15257, 2]

// Module 17793 (QuestDockUnenrolledHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import intl2 from "intl" /* 1113 */;
import _mod1655 from "module_1655" /* 1655 */;
import shared from "shared" /* 5313 */;
import useThemeDefault from "useTheme" /* 5537 */;
import Text_Text from "Text/Text" /* 5919 */;
import spring_spring from "spring/spring" /* 5929 */;
import FastImageDefault from "FastImage" /* 6010 */;
import QuestConstants from "QuestConstants" /* 6954 */;
import QuestTypes from "QuestTypes" /* 6957 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8834 */;
import QuestRewardTileDefault from "QuestRewardTile" /* 15257 */;
import QuestDockConstants from "QuestDockConstants" /* 17698 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17699 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 17714 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 17727 */;
import QuestDockHeaderTitleDefault from "QuestDockHeaderTitle" /* 17799 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 17800 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let num;

let c9;
let metroImportAll;
let size;
let size1;
function QuestDockAdvertiserAsset(assetUrl) {
  let obj2;
  assetUrl = assetUrl.assetUrl;
  const tmp = closure_11();
  const obj = { style: tmp.squareAsset, accessible: false, importantForAccessibility: "no-hide-descendants", children: metroImportAll(FastImageDefault, obj2) };
  obj2 = { source: { uri: assetUrl }, style: tmp.advertiserAsset, resizeMode: "cover", accessible: false };
  return metroImportAll(View, obj);
}
function QuestDockHeaderRewardTile() {
  let items4;
  let items5;
  let items6;
  let obj4;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp5Result;
  let tmp5Result2;
  let tmp = closure_11();
  let obj = QuestDockCreativeContext;
  const questDockQuest = obj.useQuestDockQuest();
  const tmp6 = useThemeDefault();
  const activeQuestDockMode = react.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  const items = [closure_13, , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  _mod1655;
  items[1] = spring_spring.withSpring;
  items[2] = activeQuestDockMode;
  items[3] = QuestDockMode;
  items[4] = closure_6;
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp10, tmp11, tmp12, tmp13, tmp14] = items;
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
  const items1 = [tmp11, tmp12, tmp13, tmp14];
  QuestDockUnenrolledHeaderTsx1.__closure = items1;
  QuestDockUnenrolledHeaderTsx1.__workletHash = 1590518219011;
  QuestDockUnenrolledHeaderTsx1.__initData = tmp10;
  const animatedStyle = useAnimatedStyle(QuestDockUnenrolledHeaderTsx1);
  const items2 = [closure_14, , , , ];
  const useAnimatedStyle2 = _mod1655.useAnimatedStyle;
  _mod1655;
  items2[1] = spring_spring.withSpring;
  items2[2] = activeQuestDockMode;
  items2[3] = QuestDockMode;
  items2[4] = closure_6;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21] = items2;
  class QuestDockUnenrolledHeaderTsx2 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get() === closure_2.EXPANDED) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_3) };
      return obj;
    }
  }
  const items3 = [tmp18, tmp19, tmp20, tmp21];
  QuestDockUnenrolledHeaderTsx2.__closure = items3;
  QuestDockUnenrolledHeaderTsx2.__workletHash = 15239501095488;
  QuestDockUnenrolledHeaderTsx2.__initData = tmp17;
  const obj2 = { style: tmp.squareAsset, accessible: false, importantForAccessibility: "no-hide-descendants", children: items5 };
  const animatedStyle2 = useAnimatedStyle2(QuestDockUnenrolledHeaderTsx2);
  const obj3 = { style: items4, children: metroImportAll(tmp5Result, obj4) };
  items4 = [tmp.squareAssetOverlay, animatedStyle2];
  const tmp24 = View;
  View = tmp5(1655).View;
  tmp5Result = FastImageDefault;
  const tmp23 = React4;
  const tmp2Result2 = shared;
  if (tmp2Result2.isThemeDark(tmp6)) {
    tmp5Result2 = tmp5(17797);
  } else {
    tmp5Result2 = tmp5(17798);
  }
  obj4 = { source: tmp5Result2, resizeMode: "contain", style: tmp.squareAssetImage };
  items5 = [metroImportAll(View, obj3), ];
  const obj5 = { style: items6, children: metroImportAll(QuestRewardTileDefault, size) };
  items6 = [tmp.squareAssetOverlay, animatedStyle];
  const View2 = tmp5(1655).View;
  size = { quest: questDockQuest, height: v35, width: v35, withAnimation: false };
  items5[1] = metroImportAll(View2, obj5);
  return tmp23(tmp24, obj2);
}
function QuestDockOrbAmountCopy(orbCount) {
  let intl;
  orbCount = orbCount.orbCount;
  const obj = { style: closure_11().getRewardLabel, variant: "body-sm/medium", color: "interactive-text-active", lineClamp: 1, children: intl.format(intl2.t.QVBTlz, { orbCount }) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return metroImportAll(Text, obj);
}
let View = react_native.View;
const QuestDockMode = QuestConstants.QuestDockMode;
let closure_6 = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let c10 = 35;
let createStyles = createStyles_mod;
let obj = { advertiserAsset: size, squareAsset: size1, squareAssetImage: { width: 35, height: 35 }, squareAssetOverlay: { position: "absolute" }, primaryContent: { alignItems: "center", flexDirection: "row" }, advertiserContent: { flex: 1, gap: 6.5 }, advertiserName: { flex: 1, maxWidth: 120 }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 2 }, getRewardLabel: { opacity: 0.7 } };
size = { height: nativeDefault.space.PX_32, width: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
size1 = { width: 35, height: 35, marginRight: nativeDefault.space.PX_4, alignItems: "center", justifyContent: "center" };
let closure_11 = createStyles(obj);
let closure_13 = { code: "(function QuestDockUnenrolledHeaderTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
let closure_14 = { code: "(function QuestDockUnenrolledHeaderTsx2(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};})" };
const memoResult = react.memo(function QuestDockUnenrolledHeader(squareAsset) {
  let LIGHT;
  let intl;
  let items2;
  let obj10;
  let obj13;
  let prop;
  let tmp10;
  let tmp15;
  let tmp15Result;
  let tmp15Result2;
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
  let obj = questCreative(17727);
  const questDockQuest = obj.useQuestDockQuest();
  let obj2 = questCreative(17727);
  questCreative = obj2.useQuestCreative(questDockQuest);
  const obj3 = questCreative(17695);
  const items = [questCreative];
  const actionSheetPressHandler = obj3.useActionSheetPressHandler(questCreative);
  const callback = react.useCallback(() => {
    const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    obj.showModal(obj2);
  }, items);
  const tmp8 = useThemeDefault();
  const obj4 = questCreative(5313);
  if (obj4.isThemeDark(tmp8)) {
    LIGHT = tmp9.DARK;
    tmp10 = tmp9;
  } else {
    LIGHT = tmp9.LIGHT;
    tmp10 = tmp9;
  }
  const tmp11 = closure_11();
  const tmpResult = questCreative(17693);
  const questGameLogotypeAssetUrl = tmpResult.useQuestGameLogotypeAssetUrl(questDockQuest);
  if ("bountyIllustration" === str2) {
    tmp16 = closure_8(tmp(17794).QuestDockBountyOrbIllustration, {});
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
    const Text = tmp(5919).Text;
    intl = tmp(1113).intl;
    tmp16 = closure_8(Text, obj6);
  }
  if ("advertiser" === str) {
    const obj7 = { assetUrl: tmpResult2.getQuestAsset(questDockQuest, questCreative(10146).QuestAssetType.GAME_TILE, LIGHT).url };
    tmpResult2 = questCreative(10146);
    tmp15Result = tmp15(QuestDockAdvertiserAsset, obj7);
  } else if ("reward" === str) {
    tmp15Result = tmp15(QuestDockHeaderRewardTile, {});
  } else {
    let tmp7Result3;
    const tmp7Result = FastImageDefault;
    if (LIGHT === tmp10.DARK) {
      tmp7Result3 = tmp7(17797);
    } else {
      tmp7Result3 = tmp7(17798);
    }
    const obj8 = { source: tmp7Result3, resizeMode: "contain", style: tmp11.wreathImage };
    tmp15Result = tmp15(tmp7Result, obj8);
  }
  let primaryContent = tmp11.primaryContent;
  if ("advertiser" === str) {
    const items1 = [, ];
    ({ primaryContent: arr2[0], advertiserContent: arr2[1] } = tmp11);
    const obj9 = { style: tmp11.advertiserName, children: tmp15(QuestDockHeaderTitleDefault, obj10) };
    obj10 = { children: questDockQuest.config.messages.gamePublisher };
    tmp15Result2 = tmp15(View, obj9);
    primaryContent = items1;
  } else {
    const obj11 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo };
    tmp15Result2 = tmp15(tmp7(17755), obj11);
  }
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmp7Result4 = QuestDockBackgroundBlurHeaderDefault;
  const obj12 = { blurHash: questBarHeroBlurhash, collapsedContent: tmp16, secondaryContentWidth: prop, withPressableDisclosure: true, onDisclosurePress: callback, onSubmenuPress: actionSheetPressHandler, children: closure_9(View, obj13) };
  prop = undefined;
  if ("bountyIllustration" === str2) {
    prop = tmp(17794).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
  }
  obj13 = { style: primaryContent, children: items2 };
  items2 = [tmp15Result, tmp15Result2];
  return tmp15(tmp7Result4, obj12);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;
