// Module ID: 11372
// Function ID: 11373
// Name: openCreatePollModal
// Dependencies: [5260, 11373, 2007, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11372 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(11373, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(5260).popWithKey(c3);
};
