// Module ID: 11317
// Function ID: 88071
// Name: openEditPollCreationImageAltTextModal
// Dependencies: []
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 11317 (openEditPollCreationImageAltTextModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_2) {
  importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), closure_2, "edit-poll-creation-image-alt-text-modal");
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  importDefault(dependencyMap[0]).popWithKey("edit-poll-creation-image-alt-text-modal");
};
