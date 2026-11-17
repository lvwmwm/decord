// Module ID: 12905
// Function ID: 12906
// Name: openGameOrganizationJoinOutcomeModal
// Dependencies: [12573, 6833, 12906, 2121, 2]
// Exports: default

// Module 12905 (openGameOrganizationJoinOutcomeModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12573 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx");

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code, result };
  obj.pushLazy(asyncRequire(12906, dependencyMap.paths), obj2, closure_3);
};
