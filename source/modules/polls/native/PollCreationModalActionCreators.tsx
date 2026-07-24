// Module ID: 11346
// Function ID: 88272
// Name: openCreatePollModal
// Dependencies: [4337, 11347, 1934, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11346 (openCreatePollModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11347, dependencyMap.paths), merged, "create-poll-modal");
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4337).popWithKey("create-poll-modal");
};
