// Module ID: 11367
// Function ID: 11368
// Name: openCreatePollModal
// Dependencies: [4395, 11368, 1959, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11367 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(11368, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4395).popWithKey(c3);
};
