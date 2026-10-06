// Module ID: 9453
// Function ID: 9454
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5099, 9454, 1987, 2]
// Exports: default

// Module 9453 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequire(9454, dependencyMap.paths), obj2);
};
