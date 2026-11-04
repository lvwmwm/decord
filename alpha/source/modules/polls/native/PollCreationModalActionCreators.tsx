// Module ID: 12754
// Function ID: 12755
// Name: PollCreationModalActionCreators
// Dependencies: [6879, 12755, 2123, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 12754 (PollCreationModalActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export function openCreatePollModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12755, dependencyMap.paths), merged, c3);
}
export function closeCreatePollModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
