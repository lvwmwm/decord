// Module ID: 12160
// Function ID: 12161
// Name: openEditPollCreationImageAltTextModal
// Dependencies: [4731, 12161, 2008, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 12160 (openEditPollCreationImageAltTextModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = set.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  _modDef4731.pushLazy(asyncRequireImpl(12161, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  _modDef4731.popWithKey(c3);
};
