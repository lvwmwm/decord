// Module ID: 11032
// Function ID: 11033
// Name: conjureManagedCopyConnection
// Dependencies: [572, 11004, 2]
// Exports: setConjureDownstreamUpdates

// Module 11032 (conjureManagedCopyConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 11004 */;
import size from "module_2" /* 2 */;

let obj = {
  copy_state(event, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_COPY_STATE_SET", projectId, event };
    obj.dispatch(obj2);
  },
  copy_sync(event, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_COPY_SYNC_SET", projectId, event };
    obj.dispatch(obj2);
  },
  downstream_updates(event, projectId) {
    projectId = projectId.projectId;
    const obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_DOWNSTREAM_UPDATES_SET", projectId, event };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/conjure/managed_copy/conjureManagedCopyConnection.tsx");

export const managedCopyFrameHandlers = obj;
export function setConjureDownstreamUpdates(projectId, enabled) {
  let closure_0 = enabled;
  const obj = conjureProjectSockets;
  const sendOnConjureSocketResult = obj.sendOnConjureSocket(projectId, "downstream updates", (sendDownstreamUpdates) => sendDownstreamUpdates.sendDownstreamUpdates(closure_0));
  if (sendOnConjureSocketResult) {
    const obj3 = { type: "CONJURE_DOWNSTREAM_UPDATES_REQUEST", projectId, enabled };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
  }
  return sendOnConjureSocketResult;
}
