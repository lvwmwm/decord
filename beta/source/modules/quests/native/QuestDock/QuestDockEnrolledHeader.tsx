// Module ID: 15446
// Function ID: 15447
// Name: QuestDockEnrolledHeader
// Dependencies: [32, 19, 17, 21, 4758, 558, 568, 15358, 11607, 11903, 5666, 15387, 4754, 2]

// Module 15446 (QuestDockEnrolledHeader)
import c from "c" /* 568 */;
import Text_Text from "Text/Text" /* 4754 */;
import QuestTypes from "QuestTypes" /* 5666 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11607 */;
import QuestCopyHooks from "QuestCopyHooks" /* 11903 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15358 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 15387 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4758);
let closure_7 = createStyles.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: 8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(21);
  const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
  const tmp5 = closure_7();
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(questDockQuest);
  const first = _slicedToArray(hooks_QuestHooks.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0];
  const questBarTitle = QuestCopyHooks.useQuestBarTitle(questDockQuest);
  if (cResult[0] === first) {
    if (cResult[1] === questDockQuest) {
      let tmp9 = cResult[2];
    }
    const questBarSubtitle = tmp(11903).useQuestBarSubtitle(tmp9);
    if (cResult[3] === questDockQuest) {
      if (cResult[4] === questTaskDetails.percentComplete) {
        let tmp11 = cResult[5];
      }
      if (cResult[6] === tmp5.progressIndicatorWrapper) {
        if (cResult[7] === tmp11) {
          let tmp15 = cResult[8];
        }
        if (cResult[9] !== questBarTitle) {
          const obj6 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: questBarTitle };
          const tmp21 = hasOwnProperty(tmp(4754).Text, obj6);
          cResult[9] = questBarTitle;
          cResult[10] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[10];
        }
        if (cResult[11] !== questBarSubtitle) {
          const obj7 = { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle };
          const tmp24 = hasOwnProperty(tmp(4754).Text, obj7);
          cResult[11] = questBarSubtitle;
          cResult[12] = tmp24;
          let tmp22 = tmp24;
        } else {
          tmp22 = cResult[12];
        }
        if (cResult[13] === tmp5.copy) {
          if (cResult[14] === tmp19) {
            if (cResult[15] === tmp22) {
              let tmp25 = cResult[16];
            }
            if (cResult[17] === tmp5.wrapper) {
              if (cResult[18] === tmp15) {
                if (cResult[19] === tmp25) {
                  let tmp29 = cResult[20];
                }
                return tmp29;
              }
            }
            const obj8 = { style: tmp5.wrapper, children: null };
            const items = [tmp15, tmp25];
            obj8.children = items;
            const tmp32 = timestampProducer(View, obj8);
            cResult[17] = tmp5.wrapper;
            cResult[18] = tmp15;
            cResult[19] = tmp25;
            cResult[20] = tmp32;
            tmp29 = tmp32;
          }
        }
        const obj9 = { style: tmp5.copy, children: null };
        const items1 = [tmp19, tmp22];
        obj9.children = items1;
        const tmp28 = timestampProducer(View, obj9);
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
    const tmpResult = tmp(11903);
  }
  const obj12 = { quest: questDockQuest, isExpanded: false, activeScreen: first, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  cResult[0] = first;
  cResult[1] = questDockQuest;
  cResult[2] = obj12;
  tmp9 = obj12;
}) : (() => {
  const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
  const tmp2 = closure_7();
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(questDockQuest);
  const obj3 = hooks_QuestHooks;
  const questBarTitle = QuestCopyHooks.useQuestBarTitle(questDockQuest);
  const obj5 = QuestCopyHooks;
  const obj7 = { style: tmp2.wrapper, children: null };
  const obj8 = { style: tmp2.progressIndicatorWrapper, children: null };
  const questBarSubtitle = obj5.useQuestBarSubtitle({ quest: questDockQuest, isExpanded: false, activeScreen: _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0], sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  obj8.children = hasOwnProperty(QuestProgressIndicatorDefault, { quest: questDockQuest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true });
  const items = [hasOwnProperty(View, obj8), ];
  const obj10 = { style: tmp2.copy, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: questBarTitle }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle })];
  obj10.children = items1;
  items[1] = timestampProducer(View, obj10);
  obj7.children = items;
  return timestampProducer(View, obj7);
}));
