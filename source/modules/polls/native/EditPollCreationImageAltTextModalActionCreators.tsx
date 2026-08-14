// Module ID: 11672
// Function ID: 11673
// Name: openEditPollCreationImageAltTextModal
// Dependencies: [4572, 11673, 2007, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 11672 (openEditPollCreationImageAltTextModal)
let c3 = "edit-poll-creation-image-alt-text-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(11673, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  importDefault(4572).popWithKey(c3);
};
