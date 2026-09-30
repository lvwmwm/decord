// Module ID: 9400
// Function ID: 9401
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5069, 9401, 1981, 2]
// Exports: default

// Module 9400 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9401, dependencyMap.paths), { incomingPendingRequestCount });
};
