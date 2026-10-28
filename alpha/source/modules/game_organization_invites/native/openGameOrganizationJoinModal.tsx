// Module ID: 12779
// Function ID: 12780
// Name: openGameOrganizationJoinModal
// Dependencies: [6707, 12780, 1999, 2]
// Exports: default

// Module 12779 (openGameOrganizationJoinModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { code };
  obj.pushLazy(asyncRequire(12780, dependencyMap.paths), obj2);
};
