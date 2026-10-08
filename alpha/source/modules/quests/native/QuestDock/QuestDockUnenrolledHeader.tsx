// Module ID: 15270
// Function ID: 15271
// Name: QuestDockUnenrolledHeader
// Dependencies: [19, 17, 1096, 21, 5090, 558, 576, 15202, 15171, 15192, 5980, 7404, 4991, 4929, 15170, 1126, 5086, 15271, 15272, 6164, 15231, 15273, 2]

// Module 15270 (QuestDockUnenrolledHeader)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1096 */;
import useThemeDefault from "useTheme" /* 4991 */;
import QuestTypes from "QuestTypes" /* 5980 */;
import FastImageDefault from "FastImage" /* 6164 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7404 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15192 */;
import QuestGameLogotypeDefault from "QuestGameLogotype" /* 15231 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 15273 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ primaryContent: { alignItems: "center", flexDirection: "row" }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 2 }, getRewardLabel: { opacity: 0.7 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockUnenrolledHeader() {
  let LIGHT;
  let items;
  let questCreative;
  let tmp11;
  let tmp14;
  let tmp16;
  let tmp7;
  let tmp8Result;
  let obj = questCreative(576);
  const cResult = obj.c(21);
  let obj2 = questCreative(15202);
  const questDockQuest = obj2.useQuestDockQuest();
  const obj3 = questCreative(15202);
  questCreative = obj3.useQuestCreative(questDockQuest);
  const obj4 = questCreative(15171);
  const actionSheetPressHandler = obj4.useActionSheetPressHandler(questCreative);
  if (cResult[0] !== questCreative) {
    const fn = function t() {
      const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
      const obj = QuestDisclosureModalActionCreatorsDefault;
      ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
      obj.showModal(obj2);
    };
    cResult[0] = questCreative;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const tmp9 = useThemeDefault();
  const tmpResult = questCreative(4929);
  if (tmpResult.isThemeDark(tmp9)) {
    LIGHT = tmp10.DARK;
    tmp11 = tmp10;
  } else {
    LIGHT = tmp10.LIGHT;
    tmp11 = tmp10;
  }
  const tmp12 = closure_8();
  const tmpResult2 = questCreative(15170);
  const questGameLogotypeAssetUrl = tmpResult2.useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const getRewardLabel = tmp12.getRewardLabel;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(questCreative(1126).t["3mgEQf"]);
    cResult[2] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] !== tmp12.getRewardLabel) {
    const obj5 = { style: getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: tmp14 };
    const tmp18 = closure_6(questCreative(5086).Text, obj5);
    cResult[3] = tmp12.getRewardLabel;
    cResult[4] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[4];
  }
  if (LIGHT === tmp11.DARK) {
    tmp8Result = tmp8(15271);
  } else {
    tmp8Result = tmp8(15272);
  }
  if (cResult[5] === tmp12.wreathImage) {
    let tmp20;
    if (cResult[6] === tmp8Result) {
      tmp20 = cResult[7];
    }
    if (cResult[8] === questGameLogotypeAssetUrl) {
      let tmp22;
      if (cResult[9] === tmp12.logo) {
        tmp22 = cResult[10];
      }
      if (cResult[11] === tmp12.primaryContent) {
        if (cResult[12] === tmp20) {
          let tmp25;
          if (cResult[13] === tmp22) {
            tmp25 = cResult[14];
          }
          if (cResult[15] === tmp7) {
            if (cResult[16] === actionSheetPressHandler) {
              if (cResult[17] === questBarHeroBlurhash) {
                if (cResult[18] === tmp16) {
                  let tmp29;
                  if (cResult[19] === tmp25) {
                    tmp29 = cResult[20];
                  }
                  return tmp29;
                }
              }
            }
          }
          const obj6 = { blurHash: questBarHeroBlurhash, collapsedContent: tmp16, withPressableDisclosure: true, onDisclosurePress: tmp7, onSubmenuPress: actionSheetPressHandler, children: tmp25 };
          const tmp31 = closure_6(QuestDockBackgroundBlurHeaderDefault, obj6);
          cResult[15] = tmp7;
          cResult[16] = actionSheetPressHandler;
          cResult[17] = questBarHeroBlurhash;
          cResult[18] = tmp16;
          cResult[19] = tmp25;
          cResult[20] = tmp31;
          tmp29 = tmp31;
        }
      }
      const obj7 = { style: tmp12.primaryContent, children: items };
      items = [tmp20, tmp22];
      const tmp28 = closure_7(View, obj7);
      cResult[11] = tmp12.primaryContent;
      cResult[12] = tmp20;
      cResult[13] = tmp22;
      cResult[14] = tmp28;
      tmp25 = tmp28;
    }
    const obj8 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp12.logo };
    const tmp24 = closure_6(QuestGameLogotypeDefault, obj8);
    cResult[8] = questGameLogotypeAssetUrl;
    cResult[9] = tmp12.logo;
    cResult[10] = tmp24;
    tmp22 = tmp24;
  }
  const obj9 = { source: tmp8Result, resizeMode: "contain", style: tmp12.wreathImage };
  const tmp21 = closure_6(FastImageDefault, obj9);
  cResult[5] = tmp12.wreathImage;
  cResult[6] = tmp8Result;
  cResult[7] = tmp21;
  tmp20 = tmp21;
}) : (function QuestDockUnenrolledHeader() {
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
  let obj = questCreative(15202);
  const questDockQuest = obj.useQuestDockQuest();
  let obj2 = questCreative(15202);
  questCreative = obj2.useQuestCreative(questDockQuest);
  const obj3 = questCreative(15171);
  const items = [questCreative];
  const actionSheetPressHandler = obj3.useActionSheetPressHandler(questCreative);
  const callback = react.useCallback(() => {
    const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    obj.showModal(obj2);
  }, items);
  const tmp8 = useThemeDefault();
  const obj4 = questCreative(4929);
  if (obj4.isThemeDark(tmp8)) {
    LIGHT = tmp9.DARK;
    tmp10 = tmp9;
  } else {
    LIGHT = tmp9.LIGHT;
    tmp10 = tmp9;
  }
  const tmp11 = closure_8();
  const tmpResult = questCreative(15170);
  const questGameLogotypeAssetUrl = tmpResult.useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmp7Result = QuestDockBackgroundBlurHeaderDefault;
  const obj5 = { blurHash: questBarHeroBlurhash, collapsedContent: closure_6(Text, obj6), withPressableDisclosure: true, onDisclosurePress: callback, onSubmenuPress: actionSheetPressHandler, children: tmp15(tmp16, obj7) };
  obj6 = { style: tmp11.getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: intl.string(questCreative(1126).t["3mgEQf"]) };
  Text = tmp(5086).Text;
  intl = tmp(1126).intl;
  obj7 = { style: tmp11.primaryContent, children: items1 };
  tmp15 = closure_7;
  tmp16 = View;
  const tmp7Result3 = FastImageDefault;
  if (LIGHT === tmp10.DARK) {
    tmp7Result4 = tmp7(15271);
  } else {
    tmp7Result4 = tmp7(15272);
  }
  items1 = [, ];
  const obj8 = { source: tmp7Result4, resizeMode: "contain", style: tmp11.wreathImage };
  items1[0] = closure_6(tmp7Result3, obj8);
  const obj9 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo };
  items1[1] = closure_6(QuestGameLogotypeDefault, obj9);
  return closure_6(tmp7Result, obj5);
}));
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default memoResult;
