// Module ID: 11642
// Function ID: 11643
// Name: openCreatePollModal
// Dependencies: [4549, 11643, 2007, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11642 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(11643, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4549).popWithKey(c3);
};
