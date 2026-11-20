// Module ID: 14076
// Function ID: 14077
// Name: GameOrganizationJoinModalConstants
// Dependencies: [12369, 6838, 2]
// Exports: closeGameOrganizationJoinModal

// Module 14076 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12369 */;
import size from "module_2" /* 2 */;

let closure_2 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT" };
export function closeGameOrganizationJoinModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_2);
}
