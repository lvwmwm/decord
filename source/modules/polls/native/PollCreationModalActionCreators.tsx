// Module ID: 11306
// Function ID: 87957
// Name: openCreatePollModal
// Dependencies: []
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11306 (openCreatePollModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_2) {
  importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), closure_2, "create-poll-modal");
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(dependencyMap[0]).popWithKey("create-poll-modal");
};
