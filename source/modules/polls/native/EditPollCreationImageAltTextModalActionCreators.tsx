// Module ID: 11363
// Function ID: 88409
// Name: openEditPollCreationImageAltTextModal
// Dependencies: [4337, 11364, 1934, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 11363 (openEditPollCreationImageAltTextModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(merged) {
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11364, dependencyMap.paths), merged, "edit-poll-creation-image-alt-text-modal");
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  importDefault(4337).popWithKey("edit-poll-creation-image-alt-text-modal");
};
