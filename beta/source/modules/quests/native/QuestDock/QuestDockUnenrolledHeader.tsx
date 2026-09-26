// Module ID: 15461
// Function ID: 15462
// Name: QuestDockUnenrolledHeader
// Dependencies: [19, 17, 1085, 21, 4788, 15372, 15362, 15383, 5696, 7996, 4722, 4639, 15361, 15462, 4784, 1115, 5836, 15466, 15467, 15420, 2]

// Module 15461 (QuestDockUnenrolledHeader)
import useThemeDefault from "useTheme" /* 4722 */;
import QuestTypes from "QuestTypes" /* 5696 */;
import FastImageDefault from "FastImage" /* 5836 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7996 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15383 */;
import QuestGameLogotypeDefault from "QuestGameLogotype" /* 15420 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 15462 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4788);
let closure_8 = createStyles.createStyles({ primaryContent: { alignItems: "center", flexDirection: "row" }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 2 }, getRewardLabel: { opacity: 0.7 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default noop.memo(function QuestDockUnenrolledHeader() {
  const questDockQuest = questCreative(15372).useQuestDockQuest();
  let obj = questCreative(15372);
  questCreative = questCreative(15372).useQuestCreative(questDockQuest);
  let obj2 = questCreative(15372);
  const items = [questCreative];
  const obj3 = questCreative(15362);
  const callback = noop.useCallback(() => {
    const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.showModal(obj2);
  }, items);
  const actionSheetPressHandler = questCreative(15362).useActionSheetPressHandler(questCreative);
  const tmp8 = useThemeDefault();
  if (obj4.isThemeDark(tmp8)) {
    let LIGHT = tmp9.DARK;
    let tmp10 = tmp9;
  } else {
    LIGHT = tmp9.LIGHT;
    tmp10 = tmp9;
  }
  const tmp11 = closure_8();
  obj4 = questCreative(4639);
  const questGameLogotypeAssetUrl = questCreative(15361).useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmpResult = questCreative(15361);
  const obj5 = { blurHash: questBarHeroBlurhash, collapsedContent: null, withPressableDisclosure: true, onDisclosurePress: null, onSubmenuPress: null, children: null };
  const obj6 = { style: tmp11.getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: null };
  const intl = tmp(1115).intl;
  obj6.children = intl.string(questCreative(1115).t["3mgEQf"]);
  obj5.collapsedContent = closure_6(questCreative(4784).Text, obj6);
  obj5.onDisclosurePress = callback;
  obj5.onSubmenuPress = actionSheetPressHandler;
  const obj7 = { style: tmp11.primaryContent, children: null };
  const tmp15 = closure_7;
  const tmp16 = View;
  const tmp7Result = QuestDockBackgroundBlurHeaderDefault;
  if (LIGHT === tmp10.DARK) {
    let tmp7Result4 = tmp7(15466);
  } else {
    tmp7Result4 = tmp7(15467);
  }
  const items1 = [closure_6(FastImageDefault, { source: tmp7Result4, resizeMode: "contain", style: tmp11.wreathImage }), closure_6(QuestGameLogotypeDefault, { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo })];
  obj7.children = items1;
  obj5.children = tmp15(tmp16, obj7);
  return closure_6(tmp7Result, obj5);
});
