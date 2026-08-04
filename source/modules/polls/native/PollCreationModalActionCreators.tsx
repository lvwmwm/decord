// Module ID: 11494
// Function ID: 11495
// Name: openCreatePollModal
// Dependencies: [4490, 11495, 1959, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11494 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(11495, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4490).popWithKey(c3);
};
