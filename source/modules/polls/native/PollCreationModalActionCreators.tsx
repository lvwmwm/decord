// Module ID: 12129
// Function ID: 12130
// Name: openCreatePollModal
// Dependencies: [4731, 12130, 2008, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 12129 (openCreatePollModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

let c3 = "create-poll-modal";
const result = set.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  _modDef4731.pushLazy(asyncRequireImpl(12130, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  _modDef4731.popWithKey(c3);
};
