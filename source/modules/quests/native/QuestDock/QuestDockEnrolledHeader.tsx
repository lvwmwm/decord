// Module ID: 14210
// Function ID: 14211
// Dependencies: [32, 19, 17, 21, 4189, 14200, 10488, 10963, 5036, 14151, 4185, 2]

// Module 14210
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
let c4 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: 8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1 } });
const memoResult = importAllResult.memo(function QuestDockEnrolledHeader() {
  const quest = importAllResult.useContext(importDefault(14200)).quest;
  const tmp = callback4();
  let obj = require(10488) /* useQuests */;
  const questTaskDetails = obj.useQuestTaskDetails(quest);
  let obj1 = require(10488) /* useQuests */;
  let obj2 = require(10963) /* _getQuestsInstructionsToWinReward */;
  const questBarTitle = obj2.useQuestBarTitle(quest);
  let obj3 = require(10963) /* _getQuestsInstructionsToWinReward */;
  obj = { quest, isExpanded: false, activeScreen: callback(obj1.useTaskPlatformScreen(quest, questTaskDetails), 1)[0], sourceQuestContent: require(5036) /* QuestsVisibleMessagesChangedSource */.QuestContent.QUEST_BAR_MOBILE };
  obj = { style: tmp.wrapper, children: null };
  obj1 = { style: tmp.progressIndicatorWrapper, children: null };
  const questBarSubtitle = obj3.useQuestBarSubtitle(obj);
  obj2 = { quest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true };
  obj1[1] = callback2(importDefault(14151), obj2);
  const items = [callback2(View, obj1), ];
  obj3 = { style: tmp.copy, children: null };
  const items1 = [callback2(require(4185) /* Text */.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: questBarTitle }), callback2(require(4185) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", children: questBarSubtitle })];
  obj3[1] = items1;
  items[1] = callback3(View, obj3);
  obj[1] = items;
  return callback3(View, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;
