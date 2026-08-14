// Module ID: 11655
// Function ID: 11656
// Name: openCreatePollModal
// Dependencies: [4572, 11656, 2007, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11655 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(11656, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4572).popWithKey(c3);
};
