// Module ID: 14719
// Function ID: 14720
// Name: QuestDockEnrolledHeader
// Dependencies: [32, 19, 17, 21, 4836, 14631, 10681, 10750, 5759, 14662, 4832, 2]

// Module 14719 (QuestDockEnrolledHeader)
import react_native from "react-native" /* 17 */;
import Text_Text from "Text/Text" /* 4832 */;
import QuestTypes from "QuestTypes" /* 5759 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10681 */;
import QuestCopyHooks from "QuestCopyHooks" /* 10750 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 14631 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 14662 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: 8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1 } });
const memoResult = react.memo(function QuestDockEnrolledHeader() {
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
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;
