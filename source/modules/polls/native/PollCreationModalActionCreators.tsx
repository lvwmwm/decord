// Module ID: 11764
// Function ID: 11765
// Name: openCreatePollModal
// Dependencies: [4723, 11765, 2009, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11764 (openCreatePollModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4723 from "module_4723" /* 4723 */;

let c3 = "create-poll-modal";
const result = set.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  _modDef4723.pushLazy(asyncRequireImpl(11765, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  _modDef4723.popWithKey(c3);
};
