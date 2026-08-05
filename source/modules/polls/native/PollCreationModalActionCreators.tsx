// Module ID: 11466
// Function ID: 11467
// Name: openCreatePollModal
// Dependencies: [4460, 11467, 1959, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11466 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(11467, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4460).popWithKey(c3);
};
