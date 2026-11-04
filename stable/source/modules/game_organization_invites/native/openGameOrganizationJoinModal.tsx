// Module ID: 12753
// Function ID: 12754
// Name: openGameOrganizationJoinModal
// Dependencies: [6704, 12754, 2002, 2]
// Exports: default

// Module 12753 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6704 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(12754, dependencyMap.paths), obj2);
};
