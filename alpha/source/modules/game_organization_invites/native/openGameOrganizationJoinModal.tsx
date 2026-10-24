// Module ID: 12715
// Function ID: 12716
// Name: openGameOrganizationJoinModal
// Dependencies: [6672, 12716, 2002, 2]
// Exports: default

// Module 12715 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(12716, dependencyMap.paths), obj2);
};
