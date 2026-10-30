// Module ID: 13151
// Function ID: 13152
// Name: GameOrganizationJoinModalConstants
// Dependencies: [6738, 2]
// Exports: closeGameOrganizationJoinModal

// Module 13151 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT", OUTCOME: "OUTCOME" };
export function closeGameOrganizationJoinModal() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
