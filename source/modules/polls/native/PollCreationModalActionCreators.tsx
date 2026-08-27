// Module ID: 11681
// Function ID: 11682
// Name: openCreatePollModal
// Dependencies: [4676, 11682, 2009, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11681 (openCreatePollModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

let c3 = "create-poll-modal";
const result = set.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  _modDef4676.pushLazy(asyncRequireImpl(11682, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  _modDef4676.popWithKey(c3);
};
