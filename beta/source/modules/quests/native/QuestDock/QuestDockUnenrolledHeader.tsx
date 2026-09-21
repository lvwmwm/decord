// Module ID: 15447
// Function ID: 15448
// Name: QuestDockUnenrolledHeader
// Dependencies: [19, 17, 1089, 21, 4758, 558, 568, 15358, 15348, 15369, 5666, 7969, 4693, 4610, 15347, 1119, 4754, 15448, 15449, 5802, 15406, 15450, 2]

// Module 15447 (QuestDockUnenrolledHeader)
import useThemeDefault from "useTheme" /* 4693 */;
import QuestTypes from "QuestTypes" /* 5666 */;
import FastImageDefault from "FastImage" /* 5802 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7969 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 15369 */;
import QuestGameLogotypeDefault from "QuestGameLogotype" /* 15406 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 15450 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1089).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4758);
let closure_8 = createStyles.createStyles({ primaryContent: { alignItems: "center", flexDirection: "row" }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 2 }, getRewardLabel: { opacity: 0.7 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = questCreative(568).c(21);
  let obj = questCreative(568);
  const questDockQuest = questCreative(15358).useQuestDockQuest();
  let obj2 = questCreative(15358);
  questCreative = questCreative(15358).useQuestCreative(questDockQuest);
  const obj3 = questCreative(15358);
  const actionSheetPressHandler = questCreative(15348).useActionSheetPressHandler(questCreative);
  if (cResult[0] !== questCreative) {
    const fn = function t() {
      const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: null };
      const obj = QuestDisclosureModalActionCreatorsDefault;
      obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      obj.showModal(obj2);
    };
    cResult[0] = questCreative;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const obj4 = questCreative(15348);
  const tmp9 = useThemeDefault();
  if (tmpResult.isThemeDark(tmp9)) {
    let LIGHT = tmp10.DARK;
    let tmp11 = tmp10;
  } else {
    LIGHT = tmp10.LIGHT;
    tmp11 = tmp10;
  }
  const tmp12 = closure_8();
  tmpResult = questCreative(4610);
  const questGameLogotypeAssetUrl = questCreative(15347).useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["3mgEQf"]);
    cResult[2] = stringResult;
    let tmp14 = stringResult;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] !== tmp12.getRewardLabel) {
    const obj5 = { style: tmp12.getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: tmp14 };
    const tmp18 = closure_6(tmp(4754).Text, obj5);
    cResult[3] = tmp12.getRewardLabel;
    cResult[4] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[4];
  }
  if (LIGHT === tmp11.DARK) {
    let tmp8Result = tmp8(15448);
  } else {
    tmp8Result = tmp8(15449);
  }
  if (cResult[5] === tmp12.wreathImage) {
    if (cResult[6] === tmp8Result) {
      let tmp20 = cResult[7];
    }
    if (cResult[8] === questGameLogotypeAssetUrl) {
      if (cResult[9] === tmp12.logo) {
        let tmp22 = cResult[10];
      }
      if (cResult[11] === tmp12.primaryContent) {
        if (cResult[12] === tmp20) {
          if (cResult[13] === tmp22) {
            let tmp25 = cResult[14];
          }
          if (cResult[15] === tmp7) {
            if (cResult[16] === actionSheetPressHandler) {
              if (cResult[17] === questBarHeroBlurhash) {
                if (cResult[18] === tmp16) {
                  if (cResult[19] === tmp25) {
                    let tmp29 = cResult[20];
                  }
                  return tmp29;
                }
              }
            }
          }
          const obj6 = { blurHash: questBarHeroBlurhash, collapsedContent: tmp16, withPressableDisclosure: true, onDisclosurePress: tmp7, onSubmenuPress: actionSheetPressHandler, children: tmp25 };
          const tmp31 = closure_6(tmp8(15450), obj6);
          cResult[15] = tmp7;
          cResult[16] = actionSheetPressHandler;
          cResult[17] = questBarHeroBlurhash;
          cResult[18] = tmp16;
          cResult[19] = tmp25;
          cResult[20] = tmp31;
          tmp29 = tmp31;
        }
      }
      const obj7 = { style: tmp12.primaryContent, children: null };
      const items = [tmp20, tmp22];
      obj7.children = items;
      const tmp28 = closure_7(View, obj7);
      cResult[11] = tmp12.primaryContent;
      cResult[12] = tmp20;
      cResult[13] = tmp22;
      cResult[14] = tmp28;
      tmp25 = tmp28;
    }
    const obj8 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp12.logo };
    const tmp24 = closure_6(tmp8(15406), obj8);
    cResult[8] = questGameLogotypeAssetUrl;
    cResult[9] = tmp12.logo;
    cResult[10] = tmp24;
    tmp22 = tmp24;
  }
  const tmp21 = closure_6(FastImageDefault, { source: tmp8Result, resizeMode: "contain", style: tmp12.wreathImage });
  cResult[5] = tmp12.wreathImage;
  cResult[6] = tmp8Result;
  cResult[7] = tmp21;
  tmp20 = tmp21;
}) : (() => {
  const questDockQuest = questCreative(15358).useQuestDockQuest();
  let obj = questCreative(15358);
  questCreative = questCreative(15358).useQuestCreative(questDockQuest);
  let obj2 = questCreative(15358);
  const items = [questCreative];
  const obj3 = questCreative(15348);
  const callback = noop.useCallback(() => {
    const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.showModal(obj2);
  }, items);
  const actionSheetPressHandler = questCreative(15348).useActionSheetPressHandler(questCreative);
  const tmp8 = useThemeDefault();
  if (obj4.isThemeDark(tmp8)) {
    let LIGHT = tmp9.DARK;
    let tmp10 = tmp9;
  } else {
    LIGHT = tmp9.LIGHT;
    tmp10 = tmp9;
  }
  const tmp11 = closure_8();
  obj4 = questCreative(4610);
  const questGameLogotypeAssetUrl = questCreative(15347).useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmpResult = questCreative(15347);
  const obj5 = { blurHash: questBarHeroBlurhash, collapsedContent: null, withPressableDisclosure: true, onDisclosurePress: null, onSubmenuPress: null, children: null };
  const obj6 = { style: tmp11.getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: null };
  const intl = tmp(1119).intl;
  obj6.children = intl.string(questCreative(1119).t["3mgEQf"]);
  obj5.collapsedContent = closure_6(questCreative(4754).Text, obj6);
  obj5.onDisclosurePress = callback;
  obj5.onSubmenuPress = actionSheetPressHandler;
  const obj7 = { style: tmp11.primaryContent, children: null };
  const tmp15 = closure_7;
  const tmp16 = View;
  const tmp7Result = QuestDockBackgroundBlurHeaderDefault;
  if (LIGHT === tmp10.DARK) {
    let tmp7Result4 = tmp7(15448);
  } else {
    tmp7Result4 = tmp7(15449);
  }
  const items1 = [closure_6(FastImageDefault, { source: tmp7Result4, resizeMode: "contain", style: tmp11.wreathImage }), closure_6(QuestGameLogotypeDefault, { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo })];
  obj7.children = items1;
  obj5.children = tmp15(tmp16, obj7);
  return closure_6(tmp7Result, obj5);
}));
