// Module ID: 12739
// Function ID: 12740
// Name: PollCreationModalActionCreators
// Dependencies: [6799, 12740, 2118, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 12739 (PollCreationModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export function openCreatePollModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12740, dependencyMap.paths), merged, c3);
}
export function closeCreatePollModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
