// Module ID: 11906
// Function ID: 11907
// Name: PollCreationModalActionCreators
// Dependencies: [5934, 11907, 2000, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 11906 (PollCreationModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(11907, dependencyMap.paths), merged, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
