// Module ID: 12339
// Function ID: 12340
// Name: openGameOrganizationJoinOutcomeModal
// Dependencies: [11917, 6130, 12340, 2120, 2]
// Exports: default

// Module 12339 (openGameOrganizationJoinOutcomeModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11917 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx");

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code, result };
  obj.pushLazy(asyncRequire(12340, dependencyMap.paths), obj2, closure_3);
};
