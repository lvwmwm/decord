// Module ID: 8922
// Function ID: 70395
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: []
// Exports: default

// Module 8922 (openClearAllIncomingRequestsConfirmationModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(dependencyMap[0]);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj);
};
