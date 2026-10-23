// Module ID: 12681
// Function ID: 12682
// Name: GameOrganizationJoinModalConstants
// Dependencies: [6670, 2]
// Exports: closeGameOrganizationJoinModal

// Module 12681 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT" };
export const closeGameOrganizationJoinModal = function closeGameOrganizationJoinModal() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
};
