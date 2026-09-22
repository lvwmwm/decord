// Module ID: 12330
// Function ID: 12331
// Name: PollCreationModalActionCreators
// Dependencies: [4839, 12331, 1896, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 12330 (PollCreationModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12331, dependencyMap.paths), merged, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
