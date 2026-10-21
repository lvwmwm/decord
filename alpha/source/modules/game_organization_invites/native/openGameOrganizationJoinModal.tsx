// Module ID: 12616
// Function ID: 12617
// Name: openGameOrganizationJoinModal
// Dependencies: [6651, 12617, 2002, 2]
// Exports: default

// Module 12616 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(12617, dependencyMap.paths), obj2);
};
