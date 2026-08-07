// Module ID: 11515
// Function ID: 11516
// Name: openCreatePollModal
// Dependencies: [4507, 11516, 1988, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11515 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(11516, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4507).popWithKey(c3);
};
