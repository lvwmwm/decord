// Module ID: 12115
// Function ID: 12116
// Name: GameOrganizationJoinModalConstants
// Dependencies: [11776, 6310, 2]
// Exports: closeGameOrganizationJoinModal

// Module 12115 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11776 */;
import size from "module_2" /* 2 */;

let closure_2 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT" };
export function closeGameOrganizationJoinModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_2);
}
