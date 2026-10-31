// Module ID: 17181
// Function ID: 17182
// Name: NoFillQuestDock
// Dependencies: [19, 17, 17059, 21, 5014, 17064, 14685, 6788, 6784, 2]
// Exports: default

// Module 17181 (NoFillQuestDock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import QuestDockConstants from "QuestDockConstants" /* 17059 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const View = react_native.View;
const QUEST_DOCK_COLLAPSED_HEIGHT = QuestDockConstants.QUEST_DOCK_COLLAPSED_HEIGHT;
const jsx = Fragment.jsx;
let obj = { placeholder: { position: "absolute", left: 0, right: 0, height: QUEST_DOCK_COLLAPSED_HEIGHT, opacity: 0 } };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/NoFillQuestDock.tsx");

export default function NoFillQuestDock(noFillDecision) {
  let placeholder;
  let tmp7;
  noFillDecision = noFillDecision.noFillDecision;
  let youBarTotalHeight;
  const visible = noFillDecision.visible;
  const tmp = closure_4();
  _require = tmp;
  const obj = require("useYouBarTotalHeight");
  youBarTotalHeight = obj.useYouBarTotalHeight();
  if (null == noFillDecision.adContentId) {
    let items = [tmp.placeholder, ];
    const obj3 = { bottom: youBarTotalHeight - 1 };
    items[1] = obj3;
    tmp7 = <View ref="HermesInternal" accessibilityElementsHidden="no-hide-descendants" importantForAccessibility="none" pointerEvents={null} style={items} />;
  } else {
    const BillableAdPlacementImpressionTrackerNative = tmp2(tmp3[6]).BillableAdPlacementImpressionTrackerNative;
    tmp7 = <BillableAdPlacementImpressionTrackerNative adContentId={noFillDecision.adContentId} adCreativeType={require("AdCreativeType").AdCreativeType.NO_FILL} noFillDecision={noFillDecision} questContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE} overrideVisibility={visible} sourceQuestContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE}>{function children(ref) {
      const items = [placeholder.placeholder, ];
      const obj2 = { bottom: youBarTotalHeight - 1 };
      items[1] = obj2;
      return <View ref={arg0} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items} />;
    }}</BillableAdPlacementImpressionTrackerNative>;
  }
  return tmp7;
};
