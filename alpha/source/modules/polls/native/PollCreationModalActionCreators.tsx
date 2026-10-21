// Module ID: 12138
// Function ID: 12139
// Name: PollCreationModalActionCreators
// Dependencies: [6651, 12139, 2002, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 12138 (PollCreationModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12139, dependencyMap.paths), merged, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
};
