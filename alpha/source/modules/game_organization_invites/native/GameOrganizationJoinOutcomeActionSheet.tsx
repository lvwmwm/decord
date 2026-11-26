// Module ID: 12348
// Function ID: 12349
// Name: GameOrganizationJoinOutcomeActionSheet
// Dependencies: [19, 11917, 21, 5257, 12341, 10747, 7507, 5641, 2]
// Exports: default

// Module 12348 (GameOrganizationJoinOutcomeActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import PromoSheet2 from "PromoSheet" /* 10747 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11917 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 12341 */;
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
