// Module ID: 12347
// Function ID: 12348
// Name: openGameOrganizationJoinOutcomeModal
// Dependencies: [11925, 6130, 12348, 2120, 2]
// Exports: default

// Module 12347 (openGameOrganizationJoinOutcomeModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11925 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx");

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code, result };
  obj.pushLazy(asyncRequire(12348, dependencyMap.paths), obj2, closure_3);
};
