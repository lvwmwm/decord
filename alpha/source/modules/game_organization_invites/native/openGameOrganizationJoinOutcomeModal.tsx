// Module ID: 12190
// Function ID: 12191
// Name: openGameOrganizationJoinOutcomeModal
// Dependencies: [11770, 6004, 12191, 2119, 2]
// Exports: default

// Module 12190 (openGameOrganizationJoinOutcomeModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11770 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx");

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code, result };
  obj.pushLazy(asyncRequire(12191, dependencyMap.paths), obj2, closure_3);
};
