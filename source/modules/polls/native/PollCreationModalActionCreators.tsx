// Module ID: 11495
// Function ID: 11496
// Name: openCreatePollModal
// Dependencies: [4461, 11496, 1959, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11495 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(11496, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4461).popWithKey(c3);
};
