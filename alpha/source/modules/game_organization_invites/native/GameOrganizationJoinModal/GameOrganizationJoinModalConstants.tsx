// Module ID: 12662
// Function ID: 12663
// Name: GameOrganizationJoinModalConstants
// Dependencies: [6657, 2]
// Exports: closeGameOrganizationJoinModal

// Module 12662 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT" };
export const closeGameOrganizationJoinModal = function closeGameOrganizationJoinModal() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
};
