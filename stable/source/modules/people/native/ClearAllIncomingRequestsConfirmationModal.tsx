// Module ID: 9177
// Function ID: 9178
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4839, 9178, 1896, 2]
// Exports: default

// Module 9177 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9178, dependencyMap.paths), { incomingPendingRequestCount });
};
