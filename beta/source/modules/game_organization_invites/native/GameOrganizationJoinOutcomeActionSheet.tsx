// Module ID: 12256
// Function ID: 12257
// Name: GameOrganizationJoinOutcomeActionSheet
// Dependencies: [19, 11901, 21, 5127, 12249, 11230, 7515, 5511, 2]
// Exports: default

// Module 12256 (GameOrganizationJoinOutcomeActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import components_Button_Button from "components/Button/Button" /* 5511 */;
import PromoSheet2 from "PromoSheet" /* 11230 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11901 */;
import useGameOrganizationJoinOutcome from "useGameOrganizationJoinOutcome" /* 12249 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const useGameOrganizationJoinOutcomeDefault = useGameOrganizationJoinOutcome;

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
  const Button = components_Button_Button.Button;
  let str = "primary";
  if (cta.type === useGameOrganizationJoinOutcome.GameOrganizationJoinOutcomeCtaType.CLOSE) {
    str = "secondary";
  }
  return <PromoSheet header={null} title={title} description={subtitle} actions={null} />;
};
