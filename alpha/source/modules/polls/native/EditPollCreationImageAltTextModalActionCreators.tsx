// Module ID: 11924
// Function ID: 11925
// Name: EditPollCreationImageAltTextModalActionCreators
// Dependencies: [5934, 11925, 2000, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 11924 (EditPollCreationImageAltTextModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(11925, dependencyMap.paths), merged, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
