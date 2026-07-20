// Module ID: 8917
// Function ID: 70359
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: []
// Exports: default

// Module 8917 (openClearAllIncomingRequestsConfirmationModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(dependencyMap[0]);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj);
};
