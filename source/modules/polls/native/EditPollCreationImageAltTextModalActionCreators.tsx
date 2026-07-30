// Module ID: 11384
// Function ID: 11385
// Name: openEditPollCreationImageAltTextModal
// Dependencies: [4395, 11385, 1959, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 11384 (openEditPollCreationImageAltTextModal)
let c3 = "edit-poll-creation-image-alt-text-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(11385, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  importDefault(4395).popWithKey(c3);
};
