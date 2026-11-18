// Module ID: 12206
// Function ID: 12207
// Name: GameOrganizationJoinOutcomeActionSheet
// Dependencies: [19, 11856, 21, 5037, 12202, 11185, 7426, 5421, 2]
// Exports: default

// Module 12206 (GameOrganizationJoinOutcomeActionSheet)
import Fragment from "Fragment" /* 21 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import components_Button_Button from "components/Button/Button" /* 5421 */;
import PromoSheet2 from "PromoSheet" /* 11185 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11856 */;
import useGameOrganizationJoinOutcome from "useGameOrganizationJoinOutcome" /* 12202 */;
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
