// Module ID: 12356
// Function ID: 12357
// Name: GameOrganizationJoinOutcomeActionSheet
// Dependencies: [19, 11925, 21, 5257, 12349, 10748, 7507, 5641, 2]
// Exports: default

// Module 12356 (GameOrganizationJoinOutcomeActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import PromoSheet2 from "PromoSheet" /* 10748 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11925 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 12349 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function hideSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(closure_3);
}
let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinOutcomeActionSheet.tsx");

export default function GameOrganizationJoinOutcomeActionSheet(arg0) {
  let code;
  let result;
  let subtitle;
  let title;
  ({ code, result } = arg0);
  const tmp = useGameOrganizationJoinOutcomeDefault(code, result, hideSheet);
  const cta = tmp.cta;
  ({ title, subtitle } = tmp);
  const PromoSheet = PromoSheet2.PromoSheet;
  return <PromoSheet header={null} title={title} description={subtitle} actions={null} />;
};
