// Module ID: 9440
// Function ID: 9441
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5093, 9441, 1987, 2]
// Exports: default

// Module 9440 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequire(9441, dependencyMap.paths), obj2);
};
