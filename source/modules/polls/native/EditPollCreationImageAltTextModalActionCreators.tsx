// Module ID: 11364
// Function ID: 88189
// Name: openEditPollCreationImageAltTextModal
// Dependencies: [4372, 11365, 1935, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 11364 (openEditPollCreationImageAltTextModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(merged) {
  importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(11365, dependencyMap.paths), merged, "edit-poll-creation-image-alt-text-modal");
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  importDefault(4372).popWithKey("edit-poll-creation-image-alt-text-modal");
};
