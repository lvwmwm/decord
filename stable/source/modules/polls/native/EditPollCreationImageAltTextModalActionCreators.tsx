// Module ID: 12081
// Function ID: 12082
// Name: EditPollCreationImageAltTextModalActionCreators
// Dependencies: [6190, 12082, 2002, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 12081 (EditPollCreationImageAltTextModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12082, dependencyMap.paths), merged, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
