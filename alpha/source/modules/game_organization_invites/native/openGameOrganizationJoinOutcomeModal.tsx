// Module ID: 12180
// Function ID: 12181
// Name: openGameOrganizationJoinOutcomeModal
// Dependencies: [11834, 6308, 12181, 2121, 2]
// Exports: default

// Module 12180 (openGameOrganizationJoinOutcomeModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11834 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx");

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code, result };
  obj.pushLazy(asyncRequire(12181, dependencyMap.paths), obj2, closure_3);
};
