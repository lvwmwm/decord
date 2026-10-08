// Module ID: 15298
// Function ID: 15299
// Name: NoFillQuestDock
// Dependencies: [19, 17, 15174, 21, 5090, 558, 576, 15179, 11164, 5984, 5980, 2]

// Module 15298 (NoFillQuestDock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import QuestDockConstants from "QuestDockConstants" /* 15174 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let View = react_native.View;
const QUEST_DOCK_COLLAPSED_HEIGHT = QuestDockConstants.QUEST_DOCK_COLLAPSED_HEIGHT;
const jsx = Fragment.jsx;
let obj = { placeholder: { position: "absolute", left: 0, right: 0, height: QUEST_DOCK_COLLAPSED_HEIGHT, opacity: 0 } };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NoFillQuestDock(arg0) {
  let closure_2;
  let noFillDecision;
  let placeholder;
  let visible;
  let youBarTotalHeight;
  const obj = require("react");
  const cResult = obj.c(12);
  ({ noFillDecision, visible } = arg0);
  const tmp4 = closure_4();
  _require = tmp4;
  let obj2 = require("useYouBarTotalHeight");
  youBarTotalHeight = obj2.useYouBarTotalHeight();
  if (cResult[0] === tmp4.placeholder) {
    let tmp6;
    if (cResult[1] === youBarTotalHeight) {
      tmp6 = cResult[2];
    }
    View = tmp6;
    if (null == noFillDecision.adContentId) {
      let tmp12;
      if (cResult[3] !== tmp6) {
        const tmp6Result = tmp6();
        cResult[3] = tmp6;
        cResult[4] = tmp6Result;
        tmp12 = tmp6Result;
      } else {
        tmp12 = cResult[4];
      }
      return tmp12;
    } else {
      const adContentId = noFillDecision.adContentId;
      if (cResult[5] !== tmp6) {
        class E {
          constructor(arg0) {
            return closure_2(arg0);
          }
        }
        cResult[5] = tmp6;
        cResult[6] = E;
      } else {
        class E {
          constructor(arg0) {
            return closure_2(arg0);
          }
        }
      }
      if (cResult[7] === noFillDecision) {
        class E {
          constructor(arg0) {
            return closure_2(arg0);
          }
        }
      }
      const BillableAdPlacementImpressionTrackerNative = tmp(tmp2[8]).BillableAdPlacementImpressionTrackerNative;
      const tmp11 = <BillableAdPlacementImpressionTrackerNative adContentId={adContentId} adCreativeType={require("AdCreativeType").AdCreativeType.NO_FILL} noFillDecision={noFillDecision} questContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE} overrideVisibility={visible} sourceQuestContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE}>{tmp8}</BillableAdPlacementImpressionTrackerNative>;
      cResult[7] = noFillDecision;
      cResult[8] = adContentId;
      cResult[9] = tmp8;
      cResult[10] = visible;
      cResult[11] = tmp11;
    }
  }
  function renderPlaceholder(ref) {
    const items = [placeholder.placeholder, ];
    const obj2 = { bottom: youBarTotalHeight - 1 };
    items[1] = obj2;
    return <View ref={arg0} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items} />;
  }
  cResult[0] = tmp4.placeholder;
  cResult[1] = youBarTotalHeight;
  cResult[2] = renderPlaceholder;
  tmp6 = renderPlaceholder;
}) : (function NoFillQuestDock(noFillDecision) {
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
    tmp7 = <View ref="IconComponent" accessibilityElementsHidden="no-hide-descendants" importantForAccessibility="none" pointerEvents={null} style={items} />;
  } else {
    const BillableAdPlacementImpressionTrackerNative = tmp2(tmp3[8]).BillableAdPlacementImpressionTrackerNative;
    tmp7 = <BillableAdPlacementImpressionTrackerNative adContentId={noFillDecision.adContentId} adCreativeType={require("AdCreativeType").AdCreativeType.NO_FILL} noFillDecision={noFillDecision} questContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE} overrideVisibility={visible} sourceQuestContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE}>{function children(ref) {
      const items = [placeholder.placeholder, ];
      const obj2 = { bottom: youBarTotalHeight - 1 };
      items[1] = obj2;
      return <View ref={arg0} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items} />;
    }}</BillableAdPlacementImpressionTrackerNative>;
  }
  return tmp7;
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/NoFillQuestDock.tsx");

export default tmp3;
