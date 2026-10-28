// Module ID: 12781
// Function ID: 12782
// Name: GameOrganizationJoinModalConstants
// Dependencies: [6707, 2]
// Exports: closeGameOrganizationJoinModal

// Module 12781 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT", OUTCOME: "OUTCOME" };
export const closeGameOrganizationJoinModal = function closeGameOrganizationJoinModal() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
};
