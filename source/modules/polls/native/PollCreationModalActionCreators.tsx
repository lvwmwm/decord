// Module ID: 11385
// Function ID: 11386
// Name: openCreatePollModal
// Dependencies: [4399, 11386, 1959, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11385 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(11386, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4399).popWithKey(c3);
};
