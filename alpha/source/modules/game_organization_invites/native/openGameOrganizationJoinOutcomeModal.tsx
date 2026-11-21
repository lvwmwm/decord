// Module ID: 12244
// Function ID: 12245
// Name: openGameOrganizationJoinOutcomeModal
// Dependencies: [11896, 6429, 12245, 2119, 2]
// Exports: default

// Module 12244 (openGameOrganizationJoinOutcomeModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11896 */;
import size from "module_2" /* 2 */;

let closure_3 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinOutcomeModal.tsx");

export default function openGameOrganizationJoinOutcomeModal(code, result) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code, result };
  obj.pushLazy(asyncRequire(12245, dependencyMap.paths), obj2, closure_3);
};
