// Module ID: 11656
// Function ID: 11657
// Name: openEditPollCreationImageAltTextModal
// Dependencies: [4550, 11657, 2007, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 11656 (openEditPollCreationImageAltTextModal)
let c3 = "edit-poll-creation-image-alt-text-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11657, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  importDefault(4550).popWithKey(c3);
};
