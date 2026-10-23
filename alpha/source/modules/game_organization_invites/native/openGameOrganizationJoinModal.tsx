// Module ID: 12679
// Function ID: 12680
// Name: openGameOrganizationJoinModal
// Dependencies: [6670, 12680, 2002, 2]
// Exports: default

// Module 12679 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(12680, dependencyMap.paths), obj2);
};
