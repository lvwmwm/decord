// Module ID: 11517
// Function ID: 11518
// Name: openEditPollCreationImageAltTextModal
// Dependencies: [4490, 11518, 1988, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 11517 (openEditPollCreationImageAltTextModal)
let c3 = "edit-poll-creation-image-alt-text-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(11518, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  importDefault(4490).popWithKey(c3);
};
