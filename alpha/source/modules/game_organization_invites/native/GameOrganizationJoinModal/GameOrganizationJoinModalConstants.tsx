// Module ID: 13447
// Function ID: 13448
// Name: GameOrganizationJoinModalConstants
// Dependencies: [6882, 2]
// Exports: closeGameOrganizationJoinModal

// Module 13447 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT", OUTCOME: "OUTCOME" };
export function closeGameOrganizationJoinModal() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
