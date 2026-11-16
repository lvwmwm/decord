// Module ID: 12771
// Function ID: 12772
// Name: PollCreationModalActionCreators
// Dependencies: [6831, 12772, 2118, 2]
// Exports: closeCreatePollModal, openCreatePollModal

// Module 12771 (PollCreationModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export function openCreatePollModal(merged) {
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(12772, dependencyMap.paths), merged, c3);
}
export function closeCreatePollModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(c3);
}
