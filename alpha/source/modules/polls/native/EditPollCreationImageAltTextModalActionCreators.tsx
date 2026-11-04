// Module ID: 12785
// Function ID: 12786
// Name: EditPollCreationImageAltTextModalActionCreators
// Dependencies: [6879, 12786, 2123, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 12785 (EditPollCreationImageAltTextModalActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export function openEditPollCreationImageAltTextModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12786, dependencyMap.paths), merged, c3);
}
export function closeEditPollCreationImageAltTextModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
