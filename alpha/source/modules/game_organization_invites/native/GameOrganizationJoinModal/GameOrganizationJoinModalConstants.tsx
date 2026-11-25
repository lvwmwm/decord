// Module ID: 12283
// Function ID: 12284
// Name: GameOrganizationJoinModalConstants
// Dependencies: [11869, 6099, 2]
// Exports: closeGameOrganizationJoinModal

// Module 12283 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11869 */;
import size from "module_2" /* 2 */;

let closure_2 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT" };
export function closeGameOrganizationJoinModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_2);
}
