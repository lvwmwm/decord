// Module ID: 9397
// Function ID: 9398
// Name: openClearAllIncomingRequestsConfirmationModal
// Dependencies: [4611, 9398, 2009, 2]
// Exports: default

// Module 9397 (openClearAllIncomingRequestsConfirmationModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

const result = set.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = _modDef4611;
  obj = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequireImpl(9398, dependencyMap.paths), obj);
};
