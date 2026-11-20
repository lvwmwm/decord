// Module ID: 12122
// Function ID: 12123
// Name: openGameOrganizationJoinOutcomeModal
// Dependencies: [11776, 6310, 12123, 2119, 2]
// Exports: default

// Module 12122 (openGameOrganizationJoinOutcomeModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11776 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx");

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code, result };
  obj.pushLazy(asyncRequire(12123, dependencyMap.paths), obj2, closure_3);
};
