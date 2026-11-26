// Module ID: 13094
// Function ID: 13095
// Name: EditPollCreationImageAltTextModalActionCreators
// Dependencies: [6429, 13095, 2119, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 13094 (EditPollCreationImageAltTextModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export function openEditPollCreationImageAltTextModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(13095, dependencyMap.paths), merged, c3);
}
export function closeEditPollCreationImageAltTextModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
