// Module ID: 14748
// Function ID: 14749
// Name: NoFillQuestDock
// Dependencies: [19, 17, 14624, 21, 4836, 14629, 10753, 5763, 5759, 2]
// Exports: default

// Module 14748 (NoFillQuestDock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import QuestDockConstants from "QuestDockConstants" /* 14624 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const View = react_native.View;
const QUEST_DOCK_COLLAPSED_HEIGHT = QuestDockConstants.QUEST_DOCK_COLLAPSED_HEIGHT;
const jsx = Fragment.jsx;
let obj = { placeholder: { position: "absolute", left: 0, right: 0, height: QUEST_DOCK_COLLAPSED_HEIGHT, opacity: 0 } };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/NoFillQuestDock.tsx");

export default function NoFillQuestDock(arg0) {
  let closure_1;
  let decisionId;
  let placeholder;
  let visible;
  ({ decisionId, visible } = arg0);
  _require = closure_4();
  const obj = require("useYouBarTotalHeight");
  dependencyMap = obj.useYouBarTotalHeight();
  const BillableAdPlacementImpressionTrackerNative = require("QuestContentImpressionTracker").BillableAdPlacementImpressionTrackerNative;
  return <BillableAdPlacementImpressionTrackerNative adContentId={decisionId} adCreativeType={require("AdCreativeType").AdCreativeType.NO_FILL} questContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE} overrideVisibility={visible} sourceQuestContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE}>{function children(ref) {
    const items = [placeholder.placeholder, ];
    const obj2 = { bottom: closure_1 - 1 };
    items[1] = obj2;
    return <View ref={arg0} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items} />;
  }}</BillableAdPlacementImpressionTrackerNative>;
};
