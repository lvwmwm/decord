// Module ID: 11925
// Function ID: 11926
// Name: PollCreationModalActionCreators
// Dependencies: [5940, 11926, 1999, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11925 (PollCreationModalActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(11926, dependencyMap.paths), merged, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
