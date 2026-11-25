// Module ID: 12240
// Function ID: 12241
// Name: GameOrganizationJoinModalConstants
// Dependencies: [11901, 6429, 2]
// Exports: closeGameOrganizationJoinModal

// Module 12240 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11901 */;
import size from "module_2" /* 2 */;

let closure_2 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT" };
export function closeGameOrganizationJoinModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_2);
}
