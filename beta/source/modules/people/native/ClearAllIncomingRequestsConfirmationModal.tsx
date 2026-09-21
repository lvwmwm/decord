// Module ID: 10015
// Function ID: 10016
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4961, 10016, 1984, 2]
// Exports: default

// Module 10015 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10016, dependencyMap.paths), { incomingPendingRequestCount });
};
