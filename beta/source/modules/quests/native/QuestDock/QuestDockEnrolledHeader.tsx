// Module ID: 14707
// Function ID: 14708
// Name: QuestDockEnrolledHeader
// Dependencies: [32, 19, 17, 21, 4837, 558, 576, 14619, 10670, 10714, 5760, 14650, 4833, 2]

// Module 14707 (QuestDockEnrolledHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4833 */;
import QuestTypes from "QuestTypes" /* 5760 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10670 */;
import QuestCopyHooks from "QuestCopyHooks" /* 10714 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 14619 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 14650 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: 8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let items1;
  const obj = react2;
  const cResult = obj.c(21);
  const obj2 = QuestDockCreativeContext;
  const questDockQuest = obj2.useQuestDockQuest();
  const tmp5 = closure_7();
  const obj3 = hooks_QuestHooks;
  const questTaskDetails = obj3.useQuestTaskDetails(questDockQuest);
  const obj4 = hooks_QuestHooks;
  const first = _slicedToArray(obj4.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0];
  const obj5 = QuestCopyHooks;
  const questBarTitle = obj5.useQuestBarTitle(questDockQuest);
  if (cResult[0] === first) {
    let tmp9;
    if (cResult[1] === questDockQuest) {
      tmp9 = cResult[2];
    }
    const tmpResult = QuestCopyHooks;
    const questBarSubtitle = tmpResult.useQuestBarSubtitle(tmp9);
    if (cResult[3] === questDockQuest) {
      let tmp11;
      if (cResult[4] === questTaskDetails.percentComplete) {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp5.progressIndicatorWrapper) {
        let tmp15;
        let tmp19;
        let tmp22;
        if (cResult[7] === tmp11) {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== questBarTitle) {
          const obj6 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: questBarTitle };
          const tmp21 = hasOwnProperty(Text_Text.Text, obj6);
          cResult[9] = questBarTitle;
          cResult[10] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[10];
        }
        if (cResult[11] !== questBarSubtitle) {
          const obj7 = { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle };
          const tmp24 = hasOwnProperty(Text_Text.Text, obj7);
          cResult[11] = questBarSubtitle;
          cResult[12] = tmp24;
          tmp22 = tmp24;
        } else {
          tmp22 = cResult[12];
        }
        if (cResult[13] === tmp5.copy) {
          if (cResult[14] === tmp19) {
            let tmp25;
            if (cResult[15] === tmp22) {
              tmp25 = cResult[16];
            }
            if (cResult[17] === tmp5.wrapper) {
              if (cResult[18] === tmp15) {
                let tmp29;
                if (cResult[19] === tmp25) {
                  tmp29 = cResult[20];
                }
                return tmp29;
              }
            }
            const obj8 = { style: tmp5.wrapper, children: items };
            items = [tmp15, tmp25];
            const tmp32 = metroRequire(View, obj8);
            cResult[17] = tmp5.wrapper;
            cResult[18] = tmp15;
            cResult[19] = tmp25;
            cResult[20] = tmp32;
            tmp29 = tmp32;
          }
        }
        const obj9 = { style: tmp5.copy, children: items1 };
        items1 = [tmp19, tmp22];
        const tmp28 = metroRequire(View, obj9);
        cResult[13] = tmp5.copy;
        cResult[14] = tmp19;
        cResult[15] = tmp22;
        cResult[16] = tmp28;
        tmp25 = tmp28;
      }
      const obj10 = { style: tmp5.progressIndicatorWrapper, children: tmp11 };
      const tmp18 = hasOwnProperty(View, obj10);
      cResult[6] = tmp5.progressIndicatorWrapper;
      cResult[7] = tmp11;
      cResult[8] = tmp18;
      tmp15 = tmp18;
    }
    const obj11 = { quest: questDockQuest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true };
    const tmp14 = hasOwnProperty(QuestProgressIndicatorDefault, obj11);
    cResult[3] = questDockQuest;
    cResult[4] = questTaskDetails.percentComplete;
    cResult[5] = tmp14;
    tmp11 = tmp14;
  }
  const obj12 = { quest: questDockQuest, isExpanded: false, activeScreen: first, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  cResult[0] = first;
  cResult[1] = questDockQuest;
  cResult[2] = obj12;
  tmp9 = obj12;
}) : (() => {
  let items;
  let items1;
  let obj9;
  const obj = QuestDockCreativeContext;
  const questDockQuest = obj.useQuestDockQuest();
  const tmp2 = closure_7();
  const obj2 = hooks_QuestHooks;
  const questTaskDetails = obj2.useQuestTaskDetails(questDockQuest);
  const obj3 = hooks_QuestHooks;
  const first = _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0];
  const obj4 = QuestCopyHooks;
  const questBarTitle = obj4.useQuestBarTitle(questDockQuest);
  const obj5 = QuestCopyHooks;
  const obj7 = { style: tmp2.wrapper, children: items };
  const obj8 = { style: tmp2.progressIndicatorWrapper, children: hasOwnProperty(QuestProgressIndicatorDefault, obj9) };
  const obj6 = { quest: questDockQuest, isExpanded: false, activeScreen: first, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const questBarSubtitle = obj5.useQuestBarSubtitle(obj6);
  obj9 = { quest: questDockQuest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true };
  items = [hasOwnProperty(View, obj8), ];
  const obj10 = { style: tmp2.copy, children: items1 };
  items1 = [hasOwnProperty(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: questBarTitle }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle })];
  items[1] = metroRequire(View, obj10);
  return metroRequire(View, obj7);
}));
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;
