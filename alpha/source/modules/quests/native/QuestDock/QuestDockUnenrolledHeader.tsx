// Module ID: 17092
// Function ID: 17093
// Name: QuestDockUnenrolledHeader
// Dependencies: [19, 17, 1083, 21, 5009, 17029, 16998, 17017, 6778, 7864, 5248, 5016, 16997, 17093, 5619, 1114, 5712, 17097, 17098, 17057, 2]

// Module 17092 (QuestDockUnenrolledHeader)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1083 */;
import useThemeDefault from "useTheme" /* 5248 */;
import FastImageDefault from "FastImage" /* 5712 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 17017 */;
import QuestGameLogotypeDefault from "QuestGameLogotype" /* 17057 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 17093 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ primaryContent: { alignItems: "center", flexDirection: "row" }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 2 }, getRewardLabel: { opacity: 0.7 } });
const memoResult = react.memo(function QuestDockUnenrolledHeader() {
  let LIGHT;
  let Text;
  let intl;
  let items1;
  let obj6;
  let obj7;
  let questCreative;
  let tmp10;
  let tmp15;
  let tmp16;
  let tmp7Result4;
  let obj = questCreative(17029);
  const questDockQuest = obj.useQuestDockQuest();
  let obj2 = questCreative(17029);
  questCreative = obj2.useQuestCreative(questDockQuest);
  const obj3 = questCreative(16998);
  const items = [questCreative];
  const actionSheetPressHandler = obj3.useActionSheetPressHandler(questCreative);
  const callback = react.useCallback(() => {
    const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    obj.showModal(obj2);
  }, items);
  const tmp8 = useThemeDefault();
  const obj4 = questCreative(5016);
  if (obj4.isThemeDark(tmp8)) {
    LIGHT = tmp9.DARK;
    tmp10 = tmp9;
  } else {
    LIGHT = tmp9.LIGHT;
    tmp10 = tmp9;
  }
  const tmp11 = closure_8();
  const tmpResult = questCreative(16997);
  const questGameLogotypeAssetUrl = tmpResult.useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmp7Result = QuestDockBackgroundBlurHeaderDefault;
  const obj5 = { blurHash: questBarHeroBlurhash, collapsedContent: closure_6(Text, obj6), withPressableDisclosure: true, onDisclosurePress: callback, onSubmenuPress: actionSheetPressHandler, children: tmp15(tmp16, obj7) };
  obj6 = { style: tmp11.getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: intl.string(questCreative(1114).t["3mgEQf"]) };
  Text = tmp(5619).Text;
  intl = tmp(1114).intl;
  obj7 = { style: tmp11.primaryContent, children: items1 };
  tmp15 = closure_7;
  tmp16 = View;
  const tmp7Result3 = FastImageDefault;
  if (LIGHT === tmp10.DARK) {
    tmp7Result4 = tmp7(17097);
  } else {
    tmp7Result4 = tmp7(17098);
  }
  items1 = [, ];
  const obj8 = { source: tmp7Result4, resizeMode: "contain", style: tmp11.wreathImage };
  items1[0] = closure_6(tmp7Result3, obj8);
  const obj9 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo };
  items1[1] = closure_6(QuestGameLogotypeDefault, obj9);
  return closure_6(tmp7Result, obj5);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;
