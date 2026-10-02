// Module ID: 9213
// Function ID: 9214
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5040, 9214, 1987, 2]
// Exports: default

// Module 9213 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequire(9214, dependencyMap.paths), obj2);
};
