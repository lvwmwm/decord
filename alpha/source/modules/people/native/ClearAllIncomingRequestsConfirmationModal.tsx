// Module ID: 10093
// Function ID: 10094
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5032, 10094, 1980, 2]
// Exports: default

// Module 10093 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10094, dependencyMap.paths), { incomingPendingRequestCount });
};
