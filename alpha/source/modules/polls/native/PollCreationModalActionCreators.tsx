// Module ID: 12949
// Function ID: 12950
// Name: PollCreationModalActionCreators
// Dependencies: [6310, 12950, 2119, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 12949 (PollCreationModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export function openCreatePollModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12950, dependencyMap.paths), merged, c3);
}
export function closeCreatePollModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
