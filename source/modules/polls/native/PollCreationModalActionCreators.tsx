// Module ID: 11581
// Function ID: 11582
// Name: openCreatePollModal
// Dependencies: [4509, 11582, 1988, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11581 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(11582, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4509).popWithKey(c3);
};
