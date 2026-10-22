// Module ID: 12660
// Function ID: 12661
// Name: openGameOrganizationJoinModal
// Dependencies: [6657, 12661, 2002, 2]
// Exports: default

// Module 12660 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(12661, dependencyMap.paths), obj2);
};
