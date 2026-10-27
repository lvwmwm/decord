// Module ID: 12732
// Function ID: 12733
// Name: openGameOrganizationJoinModal
// Dependencies: [6673, 12733, 1999, 2]
// Exports: default

// Module 12732 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(12733, dependencyMap.paths), obj2);
};
