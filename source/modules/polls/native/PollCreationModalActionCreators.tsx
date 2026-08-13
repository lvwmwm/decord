// Module ID: 11638
// Function ID: 11639
// Name: openCreatePollModal
// Dependencies: [4550, 11639, 2007, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11638 (openCreatePollModal)
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(11639, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  importDefault(4550).popWithKey(c3);
};
