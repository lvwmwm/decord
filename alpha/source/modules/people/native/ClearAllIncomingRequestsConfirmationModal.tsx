// Module ID: 9394
// Function ID: 9395
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5048, 9395, 1981, 2]
// Exports: default

// Module 9394 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9395, dependencyMap.paths), { incomingPendingRequestCount });
};
