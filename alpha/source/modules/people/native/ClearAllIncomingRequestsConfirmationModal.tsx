// Module ID: 7011
// Function ID: 7012
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5940, 7012, 1999, 2]
// Exports: default

// Module 7011 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequire(7012, dependencyMap.paths), obj2);
};
