// Module ID: 14013
// Function ID: 107023
// Dependencies: [31, 5011, 33, 10857, 14014, 14065, 8143, 11098, 2]

// Module 14013
import importAllResult from "result";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function BountiesModal(bountyId) {
  bountyId = bountyId.bountyId;
  const sourceQuestContent = bountyId.sourceQuestContent;
  let obj = bountyId(verticalScrollEnabled[3]);
  verticalScrollEnabled = obj.useBountiesExperience(QuestsExperimentLocations.VIDEO_MODAL_MOBILE).verticalScrollEnabled;
  const items = [bountyId, sourceQuestContent, verticalScrollEnabled];
  const memo = importAllResult.useMemo(() => ({
    ["bounty_main"]: {
      fullscreen: true,
      headerLeft() {
        return null;
      },
      render() {
        if (outer1_2) {
          let tmp4 = tmp3[4];
        } else {
          tmp4 = tmp3[5];
        }
        return outer2_5(sourceQuestContent(tmp4), { bountyId: outer1_0, sourceQuestContent: outer1_1 });
      }
    }
  }), items);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    bountyId(verticalScrollEnabled[6]).lockOrientation("PORTRAIT", true);
    return bountyId(verticalScrollEnabled[6]).restoreDefaultOrientation;
  }, []);
  obj = { hideTitle: true, initialRouteName: "bounty_main", screens: memo, viewStyle: { backgroundColor: "#000000" } };
  return jsx(bountyId(verticalScrollEnabled[7]).Modal, { hideTitle: true, initialRouteName: "bounty_main", screens: memo, viewStyle: { backgroundColor: "#000000" } });
});
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModal.tsx");

export default memoResult;
