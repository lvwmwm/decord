// Module ID: 10088
// Function ID: 10089
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5030, 10089, 1980, 2]
// Exports: default

// Module 10088 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10089, dependencyMap.paths), { incomingPendingRequestCount });
};
