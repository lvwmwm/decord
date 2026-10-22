// Module ID: 12648
// Function ID: 12649
// Name: openGameOrganizationJoinModal
// Dependencies: [6658, 12649, 2002, 2]
// Exports: default

// Module 12648 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(12649, dependencyMap.paths), obj2);
};
