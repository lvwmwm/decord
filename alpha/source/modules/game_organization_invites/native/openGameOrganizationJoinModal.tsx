// Module ID: 12723
// Function ID: 12724
// Name: openGameOrganizationJoinModal
// Dependencies: [6672, 12724, 2002, 2]
// Exports: default

// Module 12723 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(12724, dependencyMap.paths), obj2);
};
