// Module ID: 10009
// Function ID: 10010
// Name: people/ClearAllIncomingRequestsConfirmationModal
// Dependencies: [4959, 10010, 1980, 2]
// Exports: default

// Module 10009 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10010, dependencyMap.paths), { incomingPendingRequestCount });
};
