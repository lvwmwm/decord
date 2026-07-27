// Module ID: 11309
// Function ID: 87933
// Name: openCreatePollModal
// Dependencies: [4338, 11310, 1935, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11309 (openCreatePollModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(11310, dependencyMap.paths), merged, "create-poll-modal");
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4338).popWithKey("create-poll-modal");
};
