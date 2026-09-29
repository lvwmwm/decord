// Module ID: 9366
// Function ID: 9367
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [5039, 9367, 1981, 2]
// Exports: default

// Module 9366 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9367, dependencyMap.paths), { incomingPendingRequestCount });
};
