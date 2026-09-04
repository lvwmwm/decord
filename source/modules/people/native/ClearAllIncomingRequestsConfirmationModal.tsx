// Module ID: 8978
// Function ID: 8979
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4731, 8979, 2008, 2]
// Exports: default

// Module 8978 (openClearAllIncomingRequestsConfirmationModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const result = set.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = _modDef4731;
  obj = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequireImpl(8979, dependencyMap.paths), obj);
};
