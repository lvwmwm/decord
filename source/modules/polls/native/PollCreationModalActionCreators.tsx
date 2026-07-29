// Module ID: 11371
// Function ID: 11372
// Name: openCreatePollModal
// Dependencies: [4395, 11372, 1959, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11371 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(11372, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4395).popWithKey(c3);
};
