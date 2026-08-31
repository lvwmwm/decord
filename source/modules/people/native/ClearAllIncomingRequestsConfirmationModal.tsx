// Module ID: 9027
// Function ID: 9028
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4691, 9028, 2009, 2]
// Exports: default

// Module 9027 (openClearAllIncomingRequestsConfirmationModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;

const result = set.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = _modDef4691;
  obj = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequireImpl(9028, dependencyMap.paths), obj);
};
