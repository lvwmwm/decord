// Module ID: 11585
// Function ID: 11586
// Name: openCreatePollModal
// Dependencies: [4509, 11586, 2007, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11585 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(11586, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4509).popWithKey(c3);
};
