// Module ID: 11325
// Function ID: 88065
// Name: openEditPollCreationImageAltTextModal
// Dependencies: [4338, 11326, 1935, 2]
// Exports: closeEditPollCreationImageAltTextModal, openEditPollCreationImageAltTextModal

// Module 11325 (openEditPollCreationImageAltTextModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(merged) {
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(11326, dependencyMap.paths), merged, "edit-poll-creation-image-alt-text-modal");
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  importDefault(4338).popWithKey("edit-poll-creation-image-alt-text-modal");
};
