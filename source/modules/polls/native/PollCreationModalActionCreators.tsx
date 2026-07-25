// Module ID: 11308
// Function ID: 87928
// Name: openCreatePollModal
// Dependencies: [4338, 11309, 1935, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11308 (openCreatePollModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(11309, dependencyMap.paths), merged, "create-poll-modal");
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4338).popWithKey("create-poll-modal");
};
