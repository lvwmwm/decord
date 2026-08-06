// Module ID: 11500
// Function ID: 11501
// Name: openCreatePollModal
// Dependencies: [4490, 11501, 1988, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11500 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(11501, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4490).popWithKey(c3);
};
