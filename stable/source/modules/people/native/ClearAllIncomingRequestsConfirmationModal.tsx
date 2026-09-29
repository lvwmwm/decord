// Module ID: 10041
// Function ID: 10042
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4991, 10042, 1980, 2]
// Exports: default

// Module 10041 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10042, dependencyMap.paths), { incomingPendingRequestCount });
};
