// Module ID: 12237
// Function ID: 12238
// Name: GameOrganizationJoinModalConstants
// Dependencies: [11896, 6429, 2]
// Exports: closeGameOrganizationJoinModal

// Module 12237 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11896 */;
import size from "module_2" /* 2 */;

let closure_2 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT" };
export function closeGameOrganizationJoinModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_2);
}
