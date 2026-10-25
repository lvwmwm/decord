// Module ID: 12720
// Function ID: 12721
// Name: openGameOrganizationJoinModal
// Dependencies: [6672, 12721, 2002, 2]
// Exports: default

// Module 12720 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(12721, dependencyMap.paths), obj2);
};
