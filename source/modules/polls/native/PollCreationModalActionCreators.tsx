// Module ID: 11317
// Function ID: 88032
// Name: openCreatePollModal
// Dependencies: [4337, 11318, 1934, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11317 (openCreatePollModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11318, dependencyMap.paths), merged, "create-poll-modal");
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4337).popWithKey("create-poll-modal");
};
