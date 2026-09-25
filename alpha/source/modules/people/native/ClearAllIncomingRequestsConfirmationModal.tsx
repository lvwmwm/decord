// Module ID: 9190
// Function ID: 9191
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5032, 9191, 1980, 2]
// Exports: default

// Module 9190 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9191, dependencyMap.paths), { incomingPendingRequestCount });
};
