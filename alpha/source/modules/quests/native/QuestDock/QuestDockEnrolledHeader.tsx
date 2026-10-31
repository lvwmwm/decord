// Module ID: 17149
// Function ID: 17150
// Name: QuestDockEnrolledHeader
// Dependencies: [32, 19, 17, 17059, 21, 575, 5014, 17087, 9681, 14682, 6784, 11047, 17097, 5624, 2]

// Module 17149 (QuestDockEnrolledHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9681 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 11047 */;
import QuestCopyHooks from "QuestCopyHooks" /* 14682 */;
import QuestDockConstants from "QuestDockConstants" /* 17059 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 17087 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 17097 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const QUEST_DOCK_COLLAPSED_HEIGHT = QuestDockConstants.QUEST_DOCK_COLLAPSED_HEIGHT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let c7 = "heading-md/semibold";
let c8 = "text-sm/medium";
let closure_9 = QUEST_DOCK_COLLAPSED_HEIGHT - 2 * PX_8;
let obj = { wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: PX_8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1, minWidth: 0 } };
let closure_10 = createStyles.createStyles(obj);
const memoResult = react.memo(function QuestDockEnrolledHeader() {
  let items;
  let items1;
  let obj11;
  const obj = QuestDockCreativeContext;
  const questDockQuest = obj.useQuestDockQuest();
  const tmp4 = closure_10();
  const obj2 = hooks_QuestHooks;
  const questTaskDetails = obj2.useQuestTaskDetails(questDockQuest);
  const obj3 = hooks_QuestHooks;
  const first = _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0];
  const obj4 = QuestCopyHooks;
  const questBarTitle = obj4.useQuestBarTitle(questDockQuest);
  const obj5 = QuestCopyHooks;
  const obj6 = { quest: questDockQuest, isExpanded: false, activeScreen: first, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const questBarSubtitle = obj5.useQuestBarSubtitle(obj6);
  const obj7 = useScaledTextLineHeight;
  const scaledTextLineHeight = obj7.useScaledTextLineHeight(variant);
  const obj9 = { style: tmp4.wrapper, children: items };
  const obj10 = { style: tmp4.progressIndicatorWrapper, children: hasOwnProperty(QuestProgressIndicatorDefault, obj11) };
  const obj8 = useScaledTextLineHeight;
  const scaledTextLineHeight1 = obj8.useScaledTextLineHeight(c8);
  obj11 = { quest: questDockQuest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true };
  items = [hasOwnProperty(View, obj10), ];
  const obj12 = { style: tmp4.copy, children: items1 };
  items1 = [, ];
  const obj13 = { variant, color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, children: questBarTitle };
  items1[0] = hasOwnProperty(Text_Text.Text, obj13);
  let tmp14Result = null;
  const tmp10 = c8;
  const tmp14 = hasOwnProperty;
  if (scaledTextLineHeight + scaledTextLineHeight1 <= closure_9) {
    const obj14 = { variant: tmp10, color: "text-muted", lineClamp: 1, children: questBarSubtitle };
    tmp14Result = tmp14(Text_Text.Text, obj14);
  }
  items1[1] = tmp14Result;
  items[1] = metroRequire(View, obj12);
  return metroRequire(View, obj9);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;
