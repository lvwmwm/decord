// Module ID: 12197
// Function ID: 12198
// Name: openCreatePollModal
// Dependencies: [4763, 12198, 1896, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 12197 (openCreatePollModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

let c3 = "create-poll-modal";
const result = set.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  _modDef4763.pushLazy(asyncRequireImpl(12198, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  _modDef4763.popWithKey(c3);
};
