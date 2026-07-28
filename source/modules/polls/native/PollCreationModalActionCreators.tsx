// Module ID: 11347
// Function ID: 88052
// Name: openCreatePollModal
// Dependencies: [4372, 11348, 1935, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11347 (openCreatePollModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(11348, dependencyMap.paths), merged, "create-poll-modal");
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4372).popWithKey("create-poll-modal");
};
