// Module ID: 9742
// Function ID: 9743
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [5260, 9743, 2007, 2]
// Exports: default

// Module 9742 (openClearAllIncomingRequestsConfirmationModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = importDefault(5260);
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(9743, dependencyMap.paths), obj);
};
