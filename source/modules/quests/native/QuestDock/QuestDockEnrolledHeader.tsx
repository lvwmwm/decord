// Module ID: 14086
// Function ID: 108347
// Dependencies: [57, 31, 27, 33, 4130, 14076, 10464, 10926, 4979, 14027, 4126, 2]

// Module 14086
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: 8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1 } });
const memoResult = importAllResult.memo(function QuestDockEnrolledHeader() {
  const quest = importAllResult.useContext(importDefault(14076)).quest;
  const tmp = callback4();
  let obj = require(10464) /* _createForOfIteratorHelperLoose */;
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj1 = require(10464) /* _createForOfIteratorHelperLoose */;
  let obj2 = require(10926) /* formatWithOrWithoutMarkdown */;
  const questBarTitle = obj2.useQuestBarTitle(quest);
  let obj3 = require(10926) /* formatWithOrWithoutMarkdown */;
  obj = { quest, isExpanded: false, activeScreen: callback(obj1.useTaskPlatformScreen(quest, questTaskDetails), 1)[0], sourceQuestContent: require(4979) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE };
  obj = { style: tmp.wrapper };
  obj1 = { style: tmp.progressIndicatorWrapper };
  const questBarSubtitle = obj3.useQuestBarSubtitle(obj);
  obj2 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true };
  obj1.children = callback2(importDefault(14027), obj2);
  const items = [callback2(View, obj1), ];
  obj3 = { style: tmp.copy };
  const obj4 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: questBarTitle };
  const items1 = [callback2(require(4126) /* Text */.Text, obj4), ];
  const obj5 = { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle };
  items1[1] = callback2(require(4126) /* Text */.Text, obj5);
  obj3.children = items1;
  items[1] = callback3(View, obj3);
  obj.children = items;
  return callback3(View, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;
