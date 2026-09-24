// Module ID: 10054
// Function ID: 10055
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4993, 10055, 1984, 2]
// Exports: default

// Module 10054 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10055, dependencyMap.paths), { incomingPendingRequestCount });
};
