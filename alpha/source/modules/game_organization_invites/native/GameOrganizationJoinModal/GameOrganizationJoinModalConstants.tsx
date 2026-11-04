// Module ID: 13421
// Function ID: 13422
// Name: GameOrganizationJoinModalConstants
// Dependencies: [6879, 2]
// Exports: closeGameOrganizationJoinModal

// Module 13421 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT", OUTCOME: "OUTCOME" };
export function closeGameOrganizationJoinModal() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
