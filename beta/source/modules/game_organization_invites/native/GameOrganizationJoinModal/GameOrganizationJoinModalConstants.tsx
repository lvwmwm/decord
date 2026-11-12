// Module ID: 13478
// Function ID: 13479
// Name: GameOrganizationJoinModalConstants
// Dependencies: [6831, 2]
// Exports: closeGameOrganizationJoinModal

// Module 13478 (GameOrganizationJoinModalConstants)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModalConstants.tsx");

export const GameOrganizationJoinScenes = { VIEW: "VIEW", ACCEPT: "ACCEPT", OUTCOME: "OUTCOME" };
export function closeGameOrganizationJoinModal() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
