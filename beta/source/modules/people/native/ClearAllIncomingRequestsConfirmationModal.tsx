// Module ID: 9201
// Function ID: 9202
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5039, 9202, 1981, 2]
// Exports: default

// Module 9201 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequire(9202, dependencyMap.paths), obj2);
};
