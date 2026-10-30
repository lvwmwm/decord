// Module ID: 12389
// Function ID: 12390
// Name: EditPollCreationImageAltTextModalActionCreators
// Dependencies: [6738, 12390, 1995, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 12389 (EditPollCreationImageAltTextModalActionCreators)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export function openEditPollCreationImageAltTextModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12390, dependencyMap.paths), merged, c3);
}
export function closeEditPollCreationImageAltTextModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
