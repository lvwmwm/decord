// Module ID: 11659
// Function ID: 11660
// Name: openEditPollCreationImageAltTextModal
// Dependencies: [4549, 11660, 2007, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 11659 (openEditPollCreationImageAltTextModal)
let c3 = "edit-poll-creation-image-alt-text-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(11660, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  importDefault(4549).popWithKey(c3);
};
